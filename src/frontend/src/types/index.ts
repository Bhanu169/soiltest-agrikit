export type QueryType = "soil-testing-only" | "soil-testing-agrikit";

export type PaymentMode = "online" | "cod" | "bank-transfer" | "upi";

export interface ReceiverInfo {
  name: string;
  institution: string;
  location: string;
}

export interface SoilTestingFormData {
  // Receiver (pre-filled)
  receiverName: string;
  receiverInstitution: string;
  receiverLocation: string;

  // Sender
  senderName: string;
  senderPlace: string;
  senderAddress: string;

  // Query type — controls conditional sections
  queryType: QueryType | "";

  // Payment
  paymentMode: PaymentMode | "";

  // AgriKit fields (shown only when queryType === 'soil-testing-agrikit')
  deliveryAddress: string;
  agriKitSeeds: "normal" | "hybrid" | "";
  agriKitFertilizer: string;
  agriKitOrganic: boolean;
  agriKitComments: string;
}

export interface OrderFormData {
  name: string;
  place: string;
  address: string;
  phone: string;
  paymentMode: PaymentMode | "";
}

export interface OrderSummary {
  refId: string;
  queryType: QueryType | "";
  senderName: string;
  paymentMode: PaymentMode | "";
  deliveryAddress?: string;
  timestamp: number;
}

export const RECEIVER_INFO: ReceiverInfo = {
  name: "Vanshika",
  institution: "YSP University of Horticulture and Forestry",
  location: "Nauni, Solan – 173230",
};

export const PAYMENT_MODE_LABELS: Record<PaymentMode, string> = {
  online: "Online Payment",
  cod: "Cash on Delivery",
  "bank-transfer": "Bank Transfer",
  upi: "UPI",
};
