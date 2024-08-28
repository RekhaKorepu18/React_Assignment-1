
import express from 'express';
import { ItemDataModel } from "./schema";
import { DiscountItemModel } from './schema'
const router = express.Router();
export const discountItemData = [
  {
      id: 1,
     imageUrl: "/assets/merun_top.webp",
      name: "Criscross A-Line Dress",
      price: 550,
      rating: 4.5,
      isAvailable: true,
      isDiscount: true, 
      discountRate: 30, 
    },
    {
      id: 2,
      imageUrl: "/assets/Navy_blue_Shirt.jpeg",
      name: "Navy Blue - Cotton Solid Shirts For Men",
      price: 550,
      rating: 4.5,
      isAvailable: true,
      isDiscount: true, 
      discountRate: 25
    },
    {
      id: 3,
      imageUrl: "/assets/black_shirt.jpeg",
      name: "Floral printed shirt for Men",
      price: 750,
      rating: 4.5,
      isAvailable: true,
      isDiscount: true,
      discountRate: 50
    },
    {
      id: 4,
      imageUrl: "/assets/white_onepiece.webp",
      name: "Women Floral Printed Etnic wear",
      price: 850,
      rating: 4.5,
      isAvailable: true,
      isDiscount: true, 
      discountRate: 20, 
    },
  ];
  
  export const itemData = [
    {
      id: 5,
      imageUrl : "/assets/green_frock.jpeg",
      name : "Pista Green Maxi Dress",
      price : 550,
      rating : 4.5,
      isAvailable : true
    },
    {
      id: 6,
      imageUrl : "/assets/long_merun_frock.jpeg",
      name : "Pink Silk Long Dress with Duppatta",
      price : 2210,
      rating : 4.2,
      isAvailable : true
    },
    {
      id: 7,
      imageUrl : "/assets/peach_long_frock.jpeg",
      name : "Solid Peach Long Flair Anarkali",
      price : 1500,
      rating : 4.0,
      isAvailable : false
    },
    {
      id: 8,
      imageUrl : "/assets/light_grey.jpeg",
      name : "Light grey Shirt for Men",
      price : 900,
      rating : 4.5,
      isAvailable : true
    },
    {
      id: 9,
      imageUrl : "/assets/pink_floral_piece.jpeg",
      name : "pink peony and printed Doria dress",
      price : 550,
      rating : 4.5,
      isAvailable : true
    },
    {
      id: 10,
      imageUrl : "/assets/brown_floral.avif",
      name : "Miss case Floral Print Fit",
      price : 550,
      rating : 4.5,
      isAvailable : false
    },
    {
      id: 11,
      imageUrl : "/assets/kurtha.webp",
      name : "Women Cotton Blend Kurta Pant Duppata ser",
      price : 550,
      rating : 4.5,
      isAvailable : true
    },
    {
      id: 12,
      imageUrl : "/assets/white_checks.webp",
      name : "Men slim Fit ceckered Spread collar shirt",
      price : 550,
      rating : 4.5,
      isAvailable : true
    }
  ];


router.post('/api/discountitems', async (req, res) => {
  try {
      
     await DiscountItemModel.deleteMany({ id: { $in: discountItemData.map(item => item.id) } });

   
      const result = await DiscountItemModel.insertMany(discountItemData);

      res.status(201).json({ message: 'Discount items added successfully', data: result });
  } catch (error: any) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Failed to add discount items', error: error.message });
  }
});



router.post('/api/items', async (req, res) => {
  try {
     
    await ItemDataModel.deleteMany({ id: { $in: itemData.map(item => item.id) } });

   
      const result = await ItemDataModel.insertMany(itemData);

      res.status(201).json({ message: 'Items added successfully', data: result });
  } catch (error:any) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Failed to add items', error: error.message });
  }
});

router.get('/api/Hanami_products/discountitems', async (req, res) => {
  try {
      const discountedItems = await DiscountItemModel.find();
      res.status(200).json(discountedItems);
  } catch (error:any) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Failed to retrieve discounted items', error: error.message });
  }
});
router.get('/api/Hanami_products/items', async (req, res) => {
  try {
      const items = await ItemDataModel.find();
      res.status(200).json(items);
  } catch (error:any) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Failed to retrieve items', error: error.message });
  }
});






export default router;