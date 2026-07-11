"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface PassengerData {
  title: string;
  gender: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  phone: string;
  dob: string;
  nationality: string;
}

interface PassportData {
  passport_number: string;
  issue_country: string;
  issue_date: string;
  expiry_date: string;
  passport_file: string;
  passport_photo?: string;
  place_of_issue?: string;
}

interface EmergencyData {
  name: string;
  relationship: string;
  phone: string;
  address: string;
}

interface BookingData {
  package_id: number | null;

  passenger: PassengerData;

  passport: PassportData;

  emergency: EmergencyData;
}

interface BookingContextType {
  booking: BookingData;

  step: number;

  nextStep: () => void;

  previousStep: () => void;

  goToStep: (step: number) => void;

  updatePassenger: (
    data: Partial<PassengerData>
  ) => void;

  updatePassport: (
    data: Partial<PassportData>
  ) => void;

  updateEmergency: (
    data: Partial<EmergencyData>
  ) => void;

  setPackage: (id: number) => void;

  resetBooking: () => void;
}

const BookingContext =
  createContext<BookingContextType | null>(null);

const defaultBooking: BookingData = {
  package_id: null,

  passenger: {
    title: "",
    gender: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone: "",
    dob: "",
    nationality: "",
  },

  passport: {
    passport_number: "",
    issue_country: "",
    issue_date: "",
    expiry_date: "",
    passport_file: "",
    passport_photo: "",
    place_of_issue: "",
  },

  emergency: {
    name: "",
    relationship: "",
    phone: "",
    address: "",
  },
};

export function BookingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [booking, setBooking] =
    useState(defaultBooking);

  const [step, setStep] = useState(1);

  useEffect(() => {
    const saved =
      localStorage.getItem("booking");

    const savedStep =
      localStorage.getItem("booking-step");

    if (saved) {
      setBooking(JSON.parse(saved));
    }

    if (savedStep) {
      setStep(Number(savedStep));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "booking",
      JSON.stringify(booking)
    );

    localStorage.setItem(
      "booking-step",
      step.toString()
    );
  }, [booking, step]);

  function nextStep() {
    setStep((prev) =>
      Math.min(prev + 1, 6)
    );
  }

  function previousStep() {
    setStep((prev) =>
      Math.max(prev - 1, 1)
    );
  }

  function goToStep(step: number) {
    setStep(step);
  }

  function updatePassenger(
    data: Partial<PassengerData>
  ) {
    setBooking((prev) => ({
      ...prev,
      passenger: {
        ...prev.passenger,
        ...data,
      },
    }));
  }

  function updatePassport(
    data: Partial<PassportData>
  ) {
    setBooking((prev) => ({
      ...prev,
      passport: {
        ...prev.passport,
        ...data,
      },
    }));
  }

  function updateEmergency(
    data: Partial<EmergencyData>
  ) {
    setBooking((prev) => ({
      ...prev,
      emergency: {
        ...prev.emergency,
        ...data,
      },
    }));
  }

  function setPackage(id: number) {
    setBooking((prev) => ({
      ...prev,
      package_id: id,
    }));
  }

  function resetBooking() {
    setBooking(defaultBooking);

    setStep(1);

    localStorage.removeItem("booking");

    localStorage.removeItem("booking-step");
  }

  return (
    <BookingContext.Provider
      value={{
        booking,

        step,

        nextStep,

        previousStep,

        goToStep,

        updatePassenger,

        updatePassport,

        updateEmergency,

        setPackage,

        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context =
    useContext(BookingContext);

  if (!context) {
    throw new Error(
      "useBooking must be used inside BookingProvider"
    );
  }

  return context;
}