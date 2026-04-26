import Map "mo:core/Map";
import Types "types/orders";
import OrdersMixin "mixins/orders-api";

actor {
  let orders = Map.empty<Text, Types.Order>();
  var orderCounter = { var value : Nat = 0 };

  include OrdersMixin(orders, orderCounter);
};
