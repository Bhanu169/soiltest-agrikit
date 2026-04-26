import { createContext, useCallback, useContext, useState } from "react";
import type {
  OrderFormData,
  OrderSummary,
  SoilTestingFormData,
} from "../types";

// Default empty states
const defaultSoilTesting: SoilTestingFormData = {
  receiverName: "Vanshika",
  receiverInstitution: "YSP University of Horticulture and Forestry",
  receiverLocation: "Nauni, Solan – 173230",
  senderName: "",
  senderPlace: "",
  senderAddress: "",
  queryType: "",
  paymentMode: "",
  deliveryAddress: "",
  agriKitSeeds: "",
  agriKitFertilizer: "",
  agriKitOrganic: false,
  agriKitComments: "",
};

const defaultOrder: OrderFormData = {
  name: "",
  place: "",
  address: "",
  phone: "",
  paymentMode: "",
};

// Context shape
export interface FormStoreContextValue {
  soilTestingData: SoilTestingFormData;
  orderData: OrderFormData;
  orderSummary: OrderSummary | null;
  updateSoilTesting: (patch: Partial<SoilTestingFormData>) => void;
  updateOrder: (patch: Partial<OrderFormData>) => void;
  setOrderSummary: (summary: OrderSummary) => void;
  resetForms: () => void;
  prefillOrderFromSoilTesting: () => void;
}

// Create context with null initial value — provider is always required
export const FormStoreContext = createContext<FormStoreContextValue | null>(
  null,
);

// Hook for consuming context
export function useFormStore(): FormStoreContextValue {
  const ctx = useContext(FormStoreContext);
  if (!ctx) {
    throw new Error("useFormStore must be used within FormStoreProvider");
  }
  return ctx;
}

// Hook to create the store value — used in the provider component
export function useFormStoreState(): FormStoreContextValue {
  const [soilTestingData, setSoilTestingData] =
    useState<SoilTestingFormData>(defaultSoilTesting);
  const [orderData, setOrderData] = useState<OrderFormData>(defaultOrder);
  const [orderSummary, setOrderSummaryState] = useState<OrderSummary | null>(
    null,
  );

  const updateSoilTesting = useCallback(
    (patch: Partial<SoilTestingFormData>) => {
      setSoilTestingData((prev) => ({ ...prev, ...patch }));
    },
    [],
  );

  const updateOrder = useCallback((patch: Partial<OrderFormData>) => {
    setOrderData((prev) => ({ ...prev, ...patch }));
  }, []);

  const setOrderSummary = useCallback((summary: OrderSummary) => {
    setOrderSummaryState(summary);
  }, []);

  const resetForms = useCallback(() => {
    setSoilTestingData(defaultSoilTesting);
    setOrderData(defaultOrder);
    setOrderSummaryState(null);
  }, []);

  // Pre-fill order form with data already collected in soil testing form
  const prefillOrderFromSoilTesting = useCallback(() => {
    setSoilTestingData((current) => {
      setOrderData((prev) => ({
        ...prev,
        name: prev.name || current.senderName,
        place: prev.place || current.senderPlace,
        address: prev.address || current.senderAddress,
        paymentMode: prev.paymentMode || current.paymentMode,
      }));
      return current;
    });
  }, []);

  return {
    soilTestingData,
    orderData,
    orderSummary,
    updateSoilTesting,
    updateOrder,
    setOrderSummary,
    resetForms,
    prefillOrderFromSoilTesting,
  };
}
