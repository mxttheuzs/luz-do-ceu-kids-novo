import { useState, useEffect } from "react";

export function useExitIntent() {
  const [showExitModal, setShowExitModal] = useState(false);
  const [isExitModalShown, setIsExitModalShown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const detectExitIntent = () => {
      if (!isExitModalShown && window.scrollY < lastScrollY && window.scrollY < 100) {
        setShowExitModal(true);
        setIsExitModalShown(true);
      }
      lastScrollY = window.scrollY;
    };

    // For mobile, detect when user scrolls up near the top
    window.addEventListener('scroll', detectExitIntent);

    // For desktop, detect mouse leaving the viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (!isExitModalShown && e.clientY <= 0) {
        setShowExitModal(true);
        setIsExitModalShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', detectExitIntent);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isExitModalShown]);

  const closeExitModal = () => {
    setShowExitModal(false);
  };

  return { showExitModal, closeExitModal };
}
