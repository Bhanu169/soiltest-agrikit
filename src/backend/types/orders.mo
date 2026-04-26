import Common "common";

module {
  public type Timestamp = Common.Timestamp;

  public type OrderInput = {
    senderName : Text;
    senderPlace : Text;
    senderAddress : Text;
    queryType : Text;
    paymentMode : Text;
    deliveryAddress : ?Text;
    agriKitSeeds : ?Text;
    agriKitFertilizer : ?Text;
    agriKitOrganic : Bool;
    agriKitComments : ?Text;
  };

  public type Order = {
    refId : Text;
    senderName : Text;
    senderPlace : Text;
    senderAddress : Text;
    queryType : Text;
    paymentMode : Text;
    deliveryAddress : ?Text;
    agriKitSeeds : ?Text;
    agriKitFertilizer : ?Text;
    agriKitOrganic : Bool;
    agriKitComments : ?Text;
    timestamp : Timestamp;
  };
};
