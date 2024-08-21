import { TitemData } from "./Types/products";

export const discountItemData: TitemData[] = [
{
    id: 1,
    imageUrl: "/assets/Crisscross _A-Line _Dress.jpeg",
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

export const itemData: TitemData[] = [
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
export const combinedData = [...itemData, ...discountItemData];


export function filteredData(search: string){ 
  return  itemData.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
)};
export function filteredDiscountData(search: string){ 
  return  discountItemData.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
)};