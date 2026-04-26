import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface Order {
    deliveryAddress?: string;
    senderPlace: string;
    queryType: string;
    agriKitSeeds?: string;
    agriKitFertilizer?: string;
    agriKitComments?: string;
    timestamp: Timestamp;
    senderName: string;
    paymentMode: string;
    agriKitOrganic: boolean;
    senderAddress: string;
    refId: string;
}
export interface OrderInput {
    deliveryAddress?: string;
    senderPlace: string;
    queryType: string;
    agriKitSeeds?: string;
    agriKitFertilizer?: string;
    agriKitComments?: string;
    senderName: string;
    paymentMode: string;
    agriKitOrganic: boolean;
    senderAddress: string;
}
export interface backendInterface {
    getOrder(refId: string): Promise<Order | null>;
    getOrders(): Promise<Array<Order>>;
    submitOrder(input: OrderInput): Promise<string>;
}
