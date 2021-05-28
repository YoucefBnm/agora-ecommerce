const SHOP_DATA = [
  {
    id: 1,
    title: 'Shoes',
    bgImage: 'https://images.unsplash.com/photo-1547586877-0351a7143cbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'discover our multi collection shoes for all ages and for different uses.',
    routeName: 'shoes',
    items: [
      {
        id: 1,
        subCategory: 'Athletic',
        name: 'UMYOGO Running Tennis Shoes',
        imageUrl: 'https://m.media-amazon.com/images/I/81axS2m8f3L._AC_SY695._SX._UX._SY._UY_.jpg',
        price: 43.45
      },
      {
        id: 2,
        subCategory: 'Slippers',
        name: 'Santa Cruz Convertible Slip',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81uZB6s%2B0iL._AC_UX695_.jpg',
        price: 34.95
      },
      {
        id: 3,
        subCategory: 'Athletic',
        name: 'Brooks Ghost 13',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Sny91Rc9L._AC_UY695_.jpg',
        price: 113.13
      },
      {
        id: 4,
        subCategory: 'Athletic',
        name: 'New Balance 608 V5 Cross Trainer',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71I2Hf4x0SL._AC_UX695_.jpg',
        price: 140.32
      },
      {
        id: 5,
        subCategory: 'Sandals',
        name: 'OluKai Ohana',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61jfh3HhL1L._AC_UX695_.jpg',
        price: 68.99
      },
      {
        id: 6,
        subCategory: 'Slippers',
        name: 'RockDove Original Two-Tone Memory',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81VWnS%2Bq69L._AC_UY695_.jpg',
        price: 15.98
      },
      {
        id: 7,
        subCategory: 'Sandals',
        name: 'Crocs Classic Clog',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71tYPEu0HfL._AC_UX695_.jpg',
        price: 32.00
      },
      {
        id: 8,
        subCategory: 'Shoes',
        name: 'EVER BOOTS Grain Leather Work Boots',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61FSu%2BIda7L._AC_UY695_.jpg',
        price: 59.99
      },
      {
        id: 9,
        subCategory: 'Athletic',
        name: 'New Balance 680v6 Running Shoe',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71z915DDAIL._AC_UX695_.jpg',
        price: 59.99
      },
      {
        id: 10,
        subCategory: 'Athletic',
        name: 'Brooks Adrenaline GTS 21',
        imageUrl: 'https://m.media-amazon.com/images/I/81Qod+RSlTL._AC_SY695._SX._UX._SY._UY_.jpg',
        price: 250.26
      },
      {
        id: 11,
        subCategory: 'Athletic',
        name: "Nike Air Max Torch 3 Running",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71wbXtpEwQL._AC_UY695_.jpg',
        price: 150.00
      },
      {
        id: 12,
        subCategory: 'Athletic',
        name: "PUMA Ignite Nxt Lace Golf Shoe",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61HpTC1CrFL._AC_UX695_.jpg',
        price: 111.34
      },
      {
        id: 13,
        subCategory: 'Athletic',
        name: "ASICS Gel-Kayano 26 Running Shoes",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51DNcff4o%2BL._AC_.jpg',
        price: 218.24
      },
      {
        id: 14,
        subCategory: 'Slippers',
        name: "Water Shoes Aqua Yoga Socks",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61ampH7FkiL._AC_UY695_.jpg',
        price: 10.99
      },
      {
        id: 15,
        subCategory: 'Sandals',
        name: "adidas Slide Sport Sandal",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/7174HBxkXIL._AC_UX695_.jpg',
        price: 44.99
      },
      {
        id: 16,
        subCategory: 'Slippers',
        name: "Crocs Bistro Clog Work Shoes",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81np6PqPsXL._AC_UX695_.jpg',
        price: 39.07
      },
      {
        id: 17,
        subCategory: 'Slippers',
        name: "Mens Slippers with Arch Support",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91iDl9ey9YL._AC_UY695_.jpg',
        price: 65.00
      },
      {
        id: 18,
        subCategory: 'Slippers',
        name: "Amoji Unisex Garden Clogs AM1702",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61VygrGanDL._AC_UY695_.jpg',
        price: 20.99
      },
      {
        id: 19,
        subCategory: 'Slippers',
        name: "shevalues Shower Shoes",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51%2B6di7n%2BjL._AC_UY695_.jpg',
        price: 12.99
      },
      {
        id: 20,
        subCategory: 'Slippers',
        name: 'Slippers',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81NNwvfBo6L._AC_UX695_.jpg',
        price: 31.85
      },
      {
        id: 21,
        subCategory: 'Sandals',
        name: "Newpage Sandal",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81R5sGgcjlL._AC_UX695_.jpg',
        price: 39.95
      },
      {
        id: 22,
        subCategory: 'Sandals',
        name: "Myles Black Brando Sandal",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71R-rSsojfL._AC_UX695_.jpg',
        price: 82.14
      },
      {
        id: 23,
        subCategory: 'Sandals',
        name: "Crocs Men's Swiftwater Mesh Wave",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61goek0H7GL._AC_UY695_.jpg',
        price: 39.23
      }
    ]
  },
  {
    id: 2,
    title: 'Clothing',
    bgImage: 'https://images.unsplash.com/photo-1520975867597-0af37a22e31e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    description: 'from shirts and pants and underwears we got all the best for you.',
    routeName: 'clothing',
    items: [
      {
        id: 24,
        subCategory: 'Shirts',
        name: 'PJ PAUL JONES Striped Vintage Polo Shirt',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71HcBQ81XYL._AC_UX679_.jpg',
        price: 89.50
      },
      {
        id: 25,
        subCategory: 'Underwears',
        name: 'Woven Boxers, Multipack',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/814HmJK72gL._AC_UX679_.jpg',
        price: 33.96
      },
      {
        id: 26,
        subCategory: 'Shorts',
        name: "Wrangler Authentics Classic Relaxed Fit",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/814rpp-AYUL._AC_UX679_.jpg',
        price: 25.80
      },
      {
        id: 27,
        subCategory: 'Sweathers',
        name: "Men's Full-Zip Cotton Sweater",
        imageUrl: 'https://m.media-amazon.com/images/I/A1tJVedJh6L._AC_SX679._SX._UX._SY._UY_.jpg',
        price: 32.10
      },
      {
        id: 28,
        subCategory: 'Sweathers',
        name: "Vineyard Vines Saltwater Quarter Zip",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91%2B4RqpmsZS._AC_UY879_.jpg',
        price: 98.50
      },
      {
        id: 29,
        subCategory: 'Shirts',
        name: "Hurley One and Only Textured Short Sleeve",
        imageUrl: 'https://m.media-amazon.com/images/I/61SiLBS+5ML._AC_SX679._SX._UX._SY._UY_.jpg',
        price: 49.99
      },
      {
        id: 30,
        subCategory: 'Shirts',
        name: "Columbia Bahama Ii Short Sleeve",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61zT1SR09CL._AC_SX679_.jpg',
        price: 52.89
      },
      {
        id: 31,
        subCategory: 'Underwears',
        name: "Hanes 3-Pack Tagless Cotton Crew Neck",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81B6Rg7YblL._AC_UX679_.jpg',
        price: 41.99
      },
      {
        id: 32,
        subCategory: 'Pants',
        name: "Van Heusen Flex Flat Front Straight Fit",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71FlV5Bur9L._AC_UY879_.jpg',
        price: 49.79
      },
      {
        id: 33,
        subCategory: 'Shirts',
        name: 'Nike Mens Dri-FIT Short Sleeve Polo Shirt',
        imageUrl: 'https://m.media-amazon.com/images/I/41gHSDjy9rL._AC_SY879._SX._UX._SY._UY_.jpg',
        price: 49.08
      },
      {
        id: 34,
        subCategory: 'Shirts',
        name: "Amazon Essentials Regular-fit Short-Sleeve",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/A1Qw0o0%2B8LL._AC_UX679_.jpg',
        price: 18.90
      },
      {
        id: 35,
        subCategory: 'Sweathers',
        name: 'Cotton Cardigan Sweater',
        imageUrl: 'https://m.media-amazon.com/images/I/A1trP9RfZ7L._AC_SX679._SX._UX._SY._UY_.jpg',
        price: 22.80
      },
      {
        id: 36,
        subCategory: 'Pants',
        name: "Dickies Original 874 Work Pant",
        imageUrl: 'https://m.media-amazon.com/images/I/71KSj3TlzVL._AC_SX679._SX._UX._SY._UY_.jpg',
        price: 46.99
      },
      {
        id: 37,
        subCategory: 'Pants',
        name: "AG Adriano Goldschmied Tailored Leg",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81rd975sq5L._AC_UY879_.jpg',
        price: 19.66
      },
      {
        id: 38,
        subCategory: 'Shirts',
        name: "Dickies Short-Sleeve Flex Twill Work",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81WjD4sKeSL._AC_UY879_.jpg',
        price: 27.99
      },
      {
        id: 39,
        subCategory: 'Shorts',
        name: "UNIONBAY Survivor Belted Cargo",
        imageUrl: 'https://m.media-amazon.com/images/I/81G1Qz3mVjL._AC_SY879._SX._UX._SY._UY_.jpg',
        price: 29.95
      },
      {
        id: 40,
        subCategory: 'Shorts',
        name: "Wrangler Authentics Classic Relaxed Fit Jean Short",
        imageUrl: 'https://m.media-amazon.com/images/I/713DsABrxgL._AC_SY879._SX._UX._SY._UY_.jpg',
        price: 33.99
      },
      {
        id: 41,
        subCategory: 'Shirts',
        name: 'Gildan V-Neck, Multipack',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/712iPqGUc4L._AC_UX679_.jpg',
        price: 50.85
      },
      {
        id: 42,
        subCategory: 'Sweathers',
        name: "AQuarter-Zip French Rib Sweater",
        imageUrl: 'https://m.media-amazon.com/images/I/91CErWwdZlL._AC_SY879._SX._UX._SY._UY_.jpg',
        price: 24.90
      },
      {
        id: 43,
        subCategory: 'Sweathers', 
        name: "QUALFORT Cardigan 100% Cotton Slim Fit",
        imageUrl: 'https://m.media-amazon.com/images/I/71lYe3F+L2L._AC_SX679._SX._UX._SY._UY_.jpg',
        price: 64.25
      },
      {
        id: 44,
        subCategory: 'Pants',
        name: "Perry Ellis 100% Linen Drawstring",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71STof1XucS._AC_UY879_.jpg',
        price: 55.34
      },
      {
        id: 45,
        subCategory: 'Shirts',
        name: "Gildan Ultra Cotton Style G2400, 2-Pack",
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Bwaf1QPUL._AC_UY879_.jpg',
        price: 37.25
      },
      {
        id: 46,
        subCategory: 'Underwears',
        name: 'Fruit of the Loom Coolzone Boxer Briefs',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91wNxIxVj6L._AC_UY879_.jpg',
        price: 56.24
      },
      {
        id: 47,
        subCategory: 'Underwears',
        name: 'Calvin Klein Cotton Stretch Multipack',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Rw4WTjRAS._AC_UX679_.jpg',
        price: 85.00
      },
      {
        id: 48,
        subCategory: 'Underwears',
        name: 'Hanes 5-Pack X-Temp Comfort Crewneck',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61uNuOn9iJS._AC_UY879_.jpg',
        price: 39.99
      },
      {
        id: 49,
        subCategory: 'Shirts',
        name: 'Makkrom Linen Button Down Beach Yoga',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51TaoecGavL._AC_UY879_.jpg',
        price: 16.88
      },
      {
        id: 50,
        subCategory: 'Shirts',
        name: 'Regular-fit Cotton Pique Polo',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91AIIlZwp-L._AC_UX679_.jpg',
        price: 14.30
      },
      {
        id: 51, 
        subCategory: 'Pants',
        name: 'Wrangler Authentics Premium Relaxed Fit Cargo',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81llBqvKDRL._AC_UY879_.jpg',
        price: 26.99
      },
      {
        id: 52,
        subCategory: 'Pants',
        name: 'Fleece Jogger Pant',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81L5NaXBHBL._AC_UY879_.jpg',
        price: 19.90
      },
      {
        id: 53,
        subCategory: 'Underwears',
        name: 'Hanes 5-Pack Tartan Boxer',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/A1SOwQrwmHS._AC_UX679_.jpg',
        price: 33.50
      },
      {
        id: 54,
        subCategory: 'Shirts',
        name: 'Hanes Size Tall Pack of Two',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81woNVByHSL._AC_UX679_.jpg',
        price: 35.95
      },
      {
        id: 55,
        subCategory: 'Sweathers',
        name: 'Polo Ralph Lauren mens Pullover',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71VgnQtj6OL._AC_UX679_.jpg',
        price: 109.99
      },
      {
        id: 56,
        subCategory: 'Pants',
        name: 'Straight-Fit Jogger Pant',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71tXq%2BJnAUL._AC_UY879_.jpg',
        price: 22.80
      },
      {
        id: 57,
        subCategory: 'Shorts',
        name: 'Unionbay Cordova Belted Messenger Cargo',
        imageUrl: 'https://m.media-amazon.com/images/I/61ZuNTFJpvL._AC_SY879._SX._UX._SY._UY_.jpg',
        price: 42.99
      },
      {
        id: 58,
        subCategory: 'Underwears',
        name: 'Hanes ComfortSoft Tagless Pocket 6 Pack',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81JlwzHEbaL._AC_UY879_.jpg',
        price: 31.98
      },
      {
        id: 59,
        subCategory: 'Shorts',
        name: 'Wrangler Authentics Performance Comfort Flex Waist',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61p0%2B9k1h5L._AC_UY879_.jpg',
        price: 35.00
      },
      {
        id: 60, 
        subCategory: 'Shorts',
        name: 'Volcom Vmonty Stretch Chino',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81zpC629hDL._AC_UY879_.jpg',
        price: 35.00
      }
    ]
  },
  {
    id: 3,
    title: 'Watches',
    bgImage: 'https://images.unsplash.com/photo-1580120173753-41a3c2779e4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1219&q=80',
    description: 'smart watches and premuim watches and even bands, your next watch is one click away.',
    routeName: 'watches',
    items: [
      {
        id: 61,
        subCategory: 'Wrist Watches',
        name: 'Eco-Drive Blue Angels World',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81NCuv0esNS._AC_UX679_.jpg',
        price: 235.99
      },
      {
        id: 62,
        subCategory: 'Smart Watches',
        name: 'Timex Unisex Metropolitan S',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/7175YjUMF%2BL._AC_UX679_.jpg',
        price: 179.99
      },
      {
        id: 63,
        subCategory: 'Watch bands',
        name: 'GA2100 Metal Strap Bezel GA-2100/GA-2110',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51tvudcgFDL._AC_UY695_.jpg',
        price: 105.00
      },
      {
        id: 64, 
        subCategory: 'Wrist Watches',
        name: 'Timex Expansion Band Watch',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/8111yj0YDBL._AC_UY879_.jpg',
        price: 37.42
      },
      {
        id: 65,
        subCategory: 'Wrist Watches',
        name: 'SNK805 SEIKO 5 Automatic Stainless Steel',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71%2BCpatGDNL._AC_UX679_.jpg',
        price: 84.00
      },
      {
        id: 66, 
        subCategory: 'Watch bands',
        name: 'G-Shock Resin Replacement',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61WI%2Bj5u67L._AC_UX679_.jpg',
        price: 16.95
      },
      {
        id: 67,
        subCategory: 'Smart Watches',
        name: 'Garmin 010-02173-21 Venu',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51isczcLiHL._AC_SX679_.jpg',
        price: '349.99'
      },
      {
        id: 68,
        subCategory: 'Wrist Watches',
        name: 'Invicta Pro Diver 40mm Stainless Steel Automatic Model8926OB',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg',
        price: 79.84
      },
      {
        id: 69,
        subCategory: 'Watch bands',
        name: 'Genuine Luminox Band/Carbon Strap for Navy Seals Series 3000, 3900-23 mm Black',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/7107j8YFJXL._AC_UX679_.jpg',
        price: 32.74
      },
      {
        id: 70,
        subCategory: 'Watch bands',
        name: 'Barton Elite Silicone (Stainless Steel) - 18mm, 19mm, 20mm, 21mm, 22mm, 23mm & 24mm Watch Straps',
        imageUrl: '',
        price: 14.50
      },
      {
        id: 71,
        subCategory: 'Smart Watches',
        name: 'Skagen Connected Falster 3 Gen 5 Touchscreen with Heart Rate, GPS, NFC',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71VYpgNUMGL._AC_UX679_.jpg',
        price: 295
      },
      {
        id: 72,
        subCategory: 'Wrist Watches',
        name: 'SAMSUNG Galaxy Watch (46mm, GPS, Bluetooth)',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81ZKNYBwYlL._AC_SY879_.jpg',
        price: 429
      },
      {
        id: 73,
        subCategory: 'Smart Watches',
        name: 'Garmin fēnix 5, Premium and Rugged Multisport GPS Smartwatch, Slate Gray/Black Band, 47 MM',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71WF5AMDIuL._AC_SX679_.jpg',
        price: 499.99
      },
      {
        id: 74,
        subCategory: 'Wrist Watches',
        name: 'Invicta Pro Diver Scuba 48mm Gold Tone Stainless Steel',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71hdk32FcBL._AC_UY879_.jpg',
        price: 80.00 
      },
      {
        id: 75,
        subCategory: 'Watch Bands',
        name: 'Fullmosa Stainless Steel Watch Strap 16mm, 18mm, 20mm, 22mm or 24mm',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71hKtot36DL._AC_UX679_.jpg',
        price: 17.99
      },
      {
        id: 76,
        subCategory: 'Wrist Watches',
        name: 'Michael Kors Lexington Chronograph Stainless Steel Watch',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81KHOC9L0%2BL._AC_UX679_.jpg',
        price: 129.00
      }
    ]
  },
  {
    id: 4,
    title: 'Accessoirs',
    bgImage: 'https://images.unsplash.com/photo-1541495532687-d41ee8904943?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=895&q=80',
    description: 'summer is in, find your sunglasses and your hat, and a lot more accessoires.',
    routeName: 'accessoirs',
    items: [
      {
        id: 77,
        subCategory: 'Sunglasses',
        name: 'ATTCL Retro Metal Frame Driving Polarized Sunglasses',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71mn3Iv6faL._AC_UX679_.jpg',
        price: 160.00
      },
      {
        id: 78,
        subCategory: 'Belts',
        name: 'BeltBro Titan No Buckle Elastic Belt',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/815S0HBBlQL._AC_UX679_.jpg',
        price: 12.99
      },
      {
        id: 79,
        subCategory: 'Hats',
        name: 'MISSION Cooling Bucket Hat- UPF 50, 3” Wide Brim, Cools When Wet',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81-WoOYKWiL._AC_UX679_.jpg',
        price: 19.85
      },
      {
        id: 80,
        subCategory: 'Sunglasses',
        name: 'Polarized Sunglasses Matte Finish Mirror Lens 100% UV Blocking (3 Pack)',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61A3%2BEkWTAL._AC_UX679_.jpg',
        price: 24.99
      },
      {
        id: 81,
        subCategory: 'Sunglasses',
        name: 'Polarized Sunglasses FEIDU Polarized Retro D2149',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61hnHDvLODL._AC_UX679_.jpg',
        price: 16.85
      },
      {
        id: 82,
        subCategory: 'Belts',
        name: 'Nike 3 Pack Golf Web Belt',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71I%2B6GILfVL._AC_UX679_.jpg',
        price: 19.99
      },
      {
        id: 83, 
        subCategory: 'Belts',
        name: 'Timberland 35mm Classic Jean Belt',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61-jkfvJtjL._AC_UX679_.jpg',
        price: 26.55
      },
      {
        id: 84,
        subCategory: 'Hats',
        name: 'Carhartt mens Canvas Cap',
        imageUrl: 'https://m.media-amazon.com/images/I/61K3hsE2duL._AC_SX679._SX._UX._SY._UY_.jpg',
        price: 33.49
      },
      {
        id: 85,
        subCategory: 'Sunglasses',
        name: 'Polarized Sunglasses Semi-Rimless Frame Driving 100% UV Blocking',
        imageUrl: 'https://m.media-amazon.com/images/I/51y5TKq7orL._AC_SX679._SX._UX._SY._UY_.jpg',
        price: 14.95
      },
      {
        id: 86,
        subCategory: 'Hats',
        name: 'Columbia Mesh Snap Back Hat',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/712Bk3LJazL._AC_UX679_.jpg',
        price: 24.99
      },
      {
        id: 87,
        subCategory: 'Sunglasses',
        name: 'Ray-Ban Rb3447 Metal Round Sunglasses',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/513yJseY3xL._AC_UX679_.jpg',
        price: 161.00
      },
      {
        id: 88,
        subCategory: 'Sunglasses',
        name: 'ATTCL Retro Metal Frame Driving Polarized',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71mn3Iv6faL._AC_UX679_.jpg',
        price: 25.00
      },
      {
        id: 89,
        subCategory: 'Belts',
        name: 'Groove Life Stretch Nylon Magnetic Aluminum Buckle',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71nVuTKeUoL._AC_UX679_.jpg',
        price: 59.95
      },
      {
        id: 90,
        subCategory: 'Hats',
        name: 'Columbia Unisex Adult Bora Bora Booney',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61APXmgJHgL._AC_SX679_.jpg',
        price: 21.99
      },
      {
        id: 91,
        subCategory: 'Hats',
        name: 'adidas Superlite Performance Visor',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/815whAzVusL._AC_UX679_.jpg',
        price: 11.99
      },
      {
        id: 92,
        subCategory: 'Sunglasses',
        name: 'goodr OG Sunglasses (no slip, no bounce, all polarized)',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41bBQu7RBmL._AC_UL1000_.jpg',
        price: 9.99
      },
      {
        id: 93,
        subCategory: 'Sunglasses',
        name: 'Polarized Aviator Sunglasses UV400 Protection Mirrored Lens',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Ny0Uzs2oS._AC_UX679_.jpg',
        price: 25.99
      }
    ]
  }
];

export default SHOP_DATA;