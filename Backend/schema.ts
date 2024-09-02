import mongoose from 'mongoose'

const ItemDataSchema= new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    isAvailable: { type: Boolean },
    isDiscount: { type: Boolean  },
    discountRate: { type: Number },
  });

  const DiscountItemDataSchema= new mongoose.Schema({
    id: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    isAvailable: { type: Boolean },
    isDiscount: { type: Boolean  },
    discountRate: { type: Number },
  });

  const ItemDataModel = mongoose.model<any>('ItemData', ItemDataSchema);
  const DiscountItemModel = mongoose.model<any>('discountItemData',DiscountItemDataSchema);

export{ItemDataModel, DiscountItemModel};

