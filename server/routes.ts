import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertOrderSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create lead endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(leadData);
      res.json({ success: true, lead });
    } catch (error) {
      console.error("Error creating lead:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof z.ZodError ? error.errors : "Invalid data" 
      });
    }
  });

  // Create order endpoint
  app.post("/api/orders", async (req, res) => {
    try {
      const orderData = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(orderData);
      res.json({ success: true, order });
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof z.ZodError ? error.errors : "Invalid data" 
      });
    }
  });

  // Get order endpoint
  app.get("/api/orders/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const order = await storage.getOrder(id);
      if (!order) {
        return res.status(404).json({ success: false, error: "Order not found" });
      }
      res.json({ success: true, order });
    } catch (error) {
      console.error("Error fetching order:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Update order status endpoint
  app.patch("/api/orders/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status || typeof status !== "string") {
        return res.status(400).json({ success: false, error: "Status is required" });
      }

      const order = await storage.updateOrderStatus(id, status);
      if (!order) {
        return res.status(404).json({ success: false, error: "Order not found" });
      }
      res.json({ success: true, order });
    } catch (error) {
      console.error("Error updating order:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Create contact endpoint
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof z.ZodError ? error.errors : "Invalid data" 
      });
    }
  });

  // Calculate price endpoint (for order bump calculations)
  app.post("/api/calculate-price", async (req, res) => {
    try {
      const { hasOrderBump, discountCode } = req.body;
      
      const basePrice = 1000; // R$ 10.00 in cents
      const orderBumpPrice = 990; // R$ 9.90 in cents
      
      let totalAmount = basePrice;
      let orderBumpAmount = 0;
      let discountAmount = 0;
      
      if (hasOrderBump) {
        orderBumpAmount = orderBumpPrice;
        totalAmount += orderBumpPrice;
      }
      
      // Apply discount codes
      if (discountCode === "VOLTA50") {
        discountAmount = Math.floor(totalAmount * 0.5);
        totalAmount = Math.floor(totalAmount * 0.5);
      }
      
      res.json({
        success: true,
        pricing: {
          basePrice,
          orderBumpAmount,
          discountAmount,
          totalAmount,
          discountCode: discountCode || null
        }
      });
    } catch (error) {
      console.error("Error calculating price:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
