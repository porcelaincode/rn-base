export type IProductPriceSchema = {
  mrp: string;
  discount?: string;
};

export type IProductQuantitySchema = {
  units: number;
  count: string;
  type: string;
};

export type IInventoryProductSchema = {
  id: string;
  name: string;
  url?: string;
  barcode?: string;
  quantity: IProductQuantitySchema;
  price: IProductPriceSchema;
  lastUpdated: string;
};

export type IInventorySchema = {
  meta: {
    storeId: string;
    lastUpdated: string;
  };
  products: Array<IInventoryProductSchema>;
};

export type IPointSchema = {
  hash: string;
  coordinates: [string, string];
};

export type IOrderProductsSchema = {
  id: string;
  brand?: string;
  name: string;
  url: string;
  price: IProductPriceSchema;
  quantity: IProductQuantitySchema;
  totalAmount: string;
};

export type IOrderSchema = {
  meta: {
    userId?: string;
    storeId: string;
    rating?: string;
    timeTaken?: string;
  };
  products: Array<IOrderProductsSchema>;
  linkedAccount?: string;
  state: {
    created: {
      date: string;
    };
    message: string;
    order: {
      cancelled: boolean;
      accepteed: boolean;
      date: string;
    };
    delivery: {
      toDeliver: boolean;
      address: {
        line: string;
        location: IPointSchema;
      };
      deliverBy?: string;
      delivered?: boolean;
      deliveredAt?: string;
      dispatched?: boolean;
      dispatchedAt?: string;
    };
    payment: {
      method: string;
      paid: boolean;
      paymentId: string;
      grandAmount: string;
      paidAt: string;
    };
  };
};

export type ICreateOrderSchema = {
  products: Array<IOrderProductsSchema>;
  grandTotal?: string;
  addressId: string;
  storeId: string;
  paymentId?: string;
  delivery: boolean;
  deliverBy: string;
  accountId?: string;
  method?: string;
};

export type IProductSchema = {
  id?: string;
  brand?: string;
  name: string;
  url?: string;
  fetchUri?: string;
  quantity: {
    count: string;
    type: string;
  };
  barcode: string;
  price: IProductPriceSchema;
  ratings?: Array<number>;
};

export type IContactSchema = {
  ISD: string;
  number: string;
};

export type IAccountOrderSchema = {
  orderId?: string;
  paid?: boolean;
  date?: string;
  amount?: string;
};

export type IAccountPendingSchema = {
  status: boolean;
  amount?: string;
};

export type IAccountsSchema = {
  id: string;
  name?: string;
  lastUpdated?: string;
  closed: boolean;
  orders: Array<IAccountOrderSchema>;
  pending: IAccountPendingSchema;
};

export type IStoreSchema = {
  name?: string;
  contact: IContactSchema;
  meta: {
    verified: boolean;
    closed: boolean;
    lastUpdated: string;
  };
  upi: {
    value?: string;
    display?: string;
    lastUpdated: string;
  };
  address: {
    line: string;
    location: IPointSchema;
  };
  accounts: Array<IAccountsSchema>;
};

export type IStoreUpdateSchema = {
  name: string;
  licenseNumber: string;
  upi?: string;
  contact: IContactSchema;
  address: {
    line: string;
    location: IPointSchema;
  };
  accounts: Array<IAccountsSchema>;
};

export type IDeliverySchema = {
  name?: string;
  line1?: string;
  location: IPointSchema;
};

export type IUserSchema = {
  name?: string;
  contact: IContactSchema;
  deliveryAddresses: Array<IDeliverySchema>;
  meta: {
    lastLogin: string;
    loginCount: number;
    createdAt: string;
  };
};

export type IUpdateAddressSchema = {
  name: string;
  line: string;
  location: {
    coordinates: [string, string];
  };
};

export type IEditProfileSchema = {
  name: string;
  contact: IContactSchema;
};

export type ITwilioMessageSchema = {
  sid: string;
};

export type IRegisterSchema = {
  name: string;
  contact: IContactSchema;
  coordinates: [string, string];
  business: boolean;
};
