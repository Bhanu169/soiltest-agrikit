import Debug "mo:core/Debug";
import Map "mo:core/Map";
import Types "../types/orders";

mixin (orders : Map.Map<Text, Types.Order>, counter : { var value : Nat }) {
  public func submitOrder(input : Types.OrderInput) : async Text {
    Debug.todo()
  };

  public query func getOrder(refId : Text) : async ?Types.Order {
    Debug.todo()
  };

  public query func getOrders() : async [Types.Order] {
    Debug.todo()
  };
};
