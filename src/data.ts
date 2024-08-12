export type TitemData= {
    imageUrl : string,
    name : string,
    price: number,
    rating : number,
    isAvailable : boolean,
    isDiscount?: boolean; // New property
    discountRate?: number;
  
  }
export const discountItemData: TitemData[] = [
    {
      imageUrl: "assets/Crisscross _A-Line _Dress.jpeg",
      name: "Criscross A-Line Dress",
      price: 550,
      rating: 4.5,
      isAvailable: true,
      isDiscount: true, // New property
      discountRate: 30, // New property
    },
    {
      imageUrl: "assets/Navy_blue_Shirt.jpeg",
      name: "Navy Blue - Cotton Solid Shirts For Men",
      price: 550,
      rating: 4.5,
      isAvailable: true,
      isDiscount: true, // New property
      discountRate: 25
    },
    
    {
      imageUrl: "assets/black_shirt.jpeg",
      name: "Floral printed shirt for Men",
      price: 750,
      rating: 4.5,
      isAvailable: true,
      isDiscount: true,
      discountRate: 50
    },
    {
      imageUrl: "assets/white_onepiece.webp",
      name: "Women Floral Printed Etnic wear",
      price: 850,
      rating: 4.5,
      isAvailable: true,
      isDiscount: true, // New property
      discountRate: 20, // New property
    },
   
  ];
 export const itemData: TitemData[] = [
    {
    imageUrl : "assets/green_frock.jpeg",
    name : "Pista Green Maxi Dress",
    price : 550,
    rating : 4.5,
    isAvailable : true
   },
     {
      imageUrl : "assets/long_merun_frock.jpeg",
      name : "Pink Silk Long Dress with Duppatta",
      price : 2210,
      rating : 4.2,
      isAvailable : true
     },
     {
      imageUrl : "assets/peach_long_frock.jpeg",
      name : "Solid Peach Long Flair Anarkali",
      price : 1500,
      rating : 4.0,
      isAvailable : false
     },
     {
      imageUrl : "assets/light_grey.jpeg",
      name : "Light grey Shirt for Men",
      price : 900,
      rating : 4.5,
      isAvailable : true
     },
     {
      imageUrl : "assets/pink_floral_piece.jpeg",
      name : "pink peony andprinted Doria dress",
      price : 550,
      rating : 4.5,
      isAvailable : true
     },
     {
      imageUrl : "assets/brown_floral.avif",
      name : "Miss case Floral Print Fit",
      price : 550,
      rating : 4.5,
      isAvailable : false
     },
     {
      imageUrl : "assets/kurtha.webp",
      name : "Women Cotton Blend Kurta Pant Duppata ser",
      price : 550,
      rating : 4.5,
      isAvailable : true
     },
     {
      imageUrl : "assets/white_checks.webp",
      name : "Men slim Fit ceckered Spread collar shirt",
      price : 550,
      rating : 4.5,
      isAvailable : true
     }
    ];