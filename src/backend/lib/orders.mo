import Debug "mo:core/Debug";
import Map "mo:core/Map";
import List "mo:core/List";
import Types "../types/orders";

module {
  public type Order = Types.Order;
  public type OrderInput = Types.OrderInput;

  public func submitOrder(
    orders : Map.Map<Text, Order>,
    counter : { var value : Nat },
    input : OrderInput,
  ) : Text {
    Debug.todo()
  };

  public func getOrder(
    orders : Map.Map<Text, Order>,
    refId : Text,
  ) : ?Order {
    Debug.todo()
  };

  public func getOrders(
    orders : Map.Map<Text, Order>,
  ) : [Order] {
    Debug.todo()
  };
};
