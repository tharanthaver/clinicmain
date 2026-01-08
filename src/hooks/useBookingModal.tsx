import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface BookingModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export const BookingModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Auto-open modal after 6 seconds (only once per session)
  useEffect(() => {
    if (hasAutoOpened) return;

    const timer = setTimeout(() => {
      // Check if user hasn't already interacted with the modal
      const hasInteracted = sessionStorage.getItem("booking_modal_interacted");
      if (!hasInteracted) {
        setIsOpen(true);
        setHasAutoOpened(true);
        sessionStorage.setItem("booking_modal_interacted", "true");
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [hasAutoOpened]);

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
};
