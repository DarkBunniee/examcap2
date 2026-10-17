namespace example.db;

using { cuid, managed } from '@sap/cds/common';

entity POHeader : managed {
  key ID        : Integer;
  poNumber      : String(20);
  supplier      : String(100);
  currency      : String(5);
  totalAmount   : Decimal(15,2);

  items : Composition of many POItem
            on items.poHeader = $self;
}

entity POItem : managed {
  key ID        : Integer;
  poHeader      : Association to POHeader;

  itemNo        : Integer;
  material      : String(100);
  quantity      : Integer;
  price         : Decimal(15,2);
}


// updated schema in cds modeling