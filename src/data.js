import {
  arnabet,
  faswolia,
  manga,
  prockely,
  psala,
  straw,
} from "./assets/Frozen";
import { baladi, mandrien1, navels, Valencia } from "./assets/orange";
import { GrapeFruites, mango, olives, strawberries } from "./assets/products";

export const productsData = [
  {
    id: 1,
    name: "Mandrien",
    image: mandrien1,
    imageWidth: "w-[75%]",
     

    description: "A premium selection of fresh Mandarin fruits.",
    details:
      "Mandarin fruits are sourced from organic farms with rich taste and high nutritional value.",
    sizes: ["36-90"],
    exportSeason: "November to March",
    category: "fresh", // ✅ Fresh product
    nutrition: {
      calories: 53,
      protein: "0.8g",
      fat: "0.3g",
      carbs: "13.3g",
      fiber: "1.8g",
      vitaminC: "85%",
    },
    packagingDetails: [
      {
        type: "Open Top",
        weightPerBag: ["8 kg", "10 kg"], // خيارات الوزن
        cartonType: "Open Top",
      },
      {
        type: "Telescopic",
        weightPerBag: ["15 kg"], // خيار وزن واحد
        cartonType: "Telescopic",
      },
    ],
  },
  {
    id: 2,
    name: "Egyptian Baladi Orange",
    image: baladi,
    imageWidth: "w-[75%]",

    description:
      "Premium Egyptian Baladi oranges with exceptional juiciness and flavor.",
    details:
      "Baladi oranges are known for their exceptional juiciness and unique flavor, perfect for fresh juice or a healthy snack.",
    sizes: ["Medium", "Large"],
    exportSeason: "October to April",
    category: "fresh", // ✅ Fresh product
    nutrition: {
      calories: 60,
      protein: "1g",
      fat: "0.2g",
      carbs: "15g",
      fiber: "2g",
      vitaminC: "42mg (70% DV)",
    },
    packagingDetails: [
      {
        type: "Open Top",
        weightPerBag: ["8 kg", "10 kg"], // خيارات الوزن
        cartonType: "Open Top",
      },
      {
        type: "Telescopic",
        weightPerBag: ["15 kg"], // خيار وزن واحد
        cartonType: "Telescopic",
      },
    ],
  },

  {
    id: 3,
    name: "Valencia Oranges",
    image: Valencia,
    imageWidth: "w-[90%]",

    description:
      "Juicy and flavorful Valencia oranges, perfect for juicing or a refreshing snack.",
    details:
      "Valencia oranges are known for their sweet flavor and high juice content. Perfect for fresh juice, salads, or as a healthy snack.",
    sizes: ["Small", "Medium", "Large"],
    exportSeason: "All Year",
    category: "fresh", // ✅ Fresh product
    nutrition: {
      calories: 49,
      protein: "0.9g",
      fat: "0.3g",
      carbs: "12g",
      fiber: "2g",
      vitaminC: "53mg (89% DV)",
    },
    packagingDetails: [
      {
        type: "Open Top",
        weightPerBag: ["8 kg", "10 kg"], // خيارات الوزن
        cartonType: "Open Top",
      },
      {
        type: "Telescopic",
        weightPerBag: ["15 kg"], // خيار وزن واحد
        cartonType: "Telescopic",
      },
    ],
  },

  {
    id: 4,
    name: "Navel Oranges",
    image: navels,
    imageWidth: "w-[80%]",

    description:
      "Sweet and seedless Navel oranges, bursting with refreshing citrus flavor.",
    details:
      "Navel oranges are known for their sweet flavor, seedless nature, and easy-to-peel skin. Packed with vitamin C, they make the perfect healthy snack.",
    sizes: ["Small", "Medium"],
    exportSeason: "March to June",
    category: "fresh", // ✅ Fresh product
    nutrition: {
      calories: 81,
      protein: "1.2g",
      fat: "0.2g",
      carbs: "21g",
      fiber: "4g",
      vitaminC: "59mg (98% DV)",
    },
    packagingDetails: [
      {
        type: "Open Top",
        weightPerBag: ["8 kg", "10 kg"], // خيارات الوزن
        cartonType: "Open Top",
      },
      {
        type: "Telescopic",
        weightPerBag: ["15 kg"], // خيار وزن واحد
        cartonType: "Telescopic",
      },
    ],
  },

  {
    id: 5,
    name: "Olives",
    imageWidth: "w-[100%]",

    image: olives,
    description:
      "High-quality, fresh olives with rich flavor and natural goodness.",
    details:
      "Our fresh olives are carefully selected to ensure the best taste and quality, perfect for salads, appetizers, or a healthy snack.",
    sizes: ["Small", "Medium", "Large"],
    exportSeason: "All Year",
    category: "fresh", // ✅ Fresh product
    nutrition: {
      calories: 115,
      protein: "0.8g",
      fat: "10.7g",
      carbs: "6.3g",
      fiber: "3.2g",
      vitaminC: "7mg (12% DV)",
    },
    packagingDetails: [
      {
        type: "Open Top",
        weightPerBag: ["8 kg", "10 kg"], // خيارات الوزن
        cartonType: "Open Top",
      },
      {
        type: "Telescopic",
        weightPerBag: ["15 kg"], // خيار وزن واحد
        cartonType: "Telescopic",
      },
    ],
  },

  {
    id: 6,
    name: "Grapefruits",
    imageWidth: "w-[90%]",

    image: GrapeFruites, // تأكد من توافق الاسم مع الصورة
    description:
      "Refreshing and tangy grapefruits, bursting with citrus flavor and health benefits.",
    details:
      "Packed with antioxidants and Vitamin C, grapefruits boost immunity and are perfect for a refreshing snack or juice.",
    sizes: ["Medium", "Large"],
    exportSeason: "December to May",
    category: "fresh", // ✅ Fresh product
    nutrition: {
      calories: 42,
      protein: "0.8g",
      fat: "0.1g",
      carbs: "10.6g",
      fiber: "1.6g",
      vitaminC: "38mg (64% DV)",
    },
    packagingDetails: [
      {
        type: "Open Top",
        weightPerBag: ["8 kg", "10 kg"], // خيارات الوزن
        cartonType: "Open Top",
      },
      {
        type: "Telescopic",
        weightPerBag: ["15 kg"], // خيار وزن واحد
        cartonType: "Telescopic",
      },
    ],
  },

  {
    id: 8,
    name: "Fresh Mango",
    image: mango,
    imageWidth: "w-[100%]",

    description:
      "Juicy and sweet Egyptian mangoes, bursting with tropical flavor and natural goodness.",
    details:
      "Egyptian fresh mangoes are known for their unique fragrance, rich flavor, and exceptional nutritional benefits, making them the king of tropical fruits.",
    sizes: ["Medium", "Large"],
    exportSeason: "All Year",
    category: "fresh", // ✅ Fresh product
    nutrition: {
      calories: 65,
      protein: "0.9g",
      fat: "0.4g",
      carbs: "17g",
      fiber: "1.6g",
      vitaminC: "36mg (60% DV)",
    },
    packagingDetails: [
      {
        type: "Open Top",
        weightPerBag: ["8 kg", "10 kg"], // خيارات الوزن
        cartonType: "Open Top",
      },
      {
        type: "Telescopic",
        weightPerBag: ["15 kg"], // خيار وزن واحد
        cartonType: "Telescopic",
      },
    ],
  },

  {
    id: 9,
    name: "Strawberries",
    imageWidth: "w-[100%]",

    image: strawberries,
    description:
      "Fresh, juicy strawberries bursting with natural sweetness and vibrant color.",
    details:
      "Packed with sweetness and nutrition, our strawberries are perfect for desserts, smoothies, or a refreshing snack.",
    sizes: ["Small", "Medium"],
    exportSeason: "January to May",
    category: "fresh", // ✅ Fresh product
    nutrition: {
      calories: 33,
      protein: "0.7g",
      fat: "0.3g",
      carbs: "7.7g",
      fiber: "2g",
      vitaminC: "59mg (97% DV)",
    },
    packagingDetails: [
      {
        type: "Open Top",
        weightPerBag: ["8 kg", "10 kg"], // خيارات الوزن
        cartonType: "Open Top",
      },
      {
        type: "Telescopic",
        weightPerBag: ["15 kg"], // خيار وزن واحد
        cartonType: "Telescopic",
      },
    ],
  },

  // ============================= Start Data Frozen =========================

  {
    id: 10,
    name: "Frozen Strawberries",
    image: straw,
    imageWidth: "w-[100%]",

    description:
      "Sweet and juicy frozen strawberries, perfect for year-round freshness.",
    details:
      "Perfect for smoothies, desserts, or as a topping for yogurt and cereals.",
    sizes: ["Small", "Medium"],
    exportSeason: "All Year",
    category: "frozen", // ❄️ Frozen product
    nutrition: {
      calories: 32,
      protein: "0.7g",
      fat: "0.3g",
      carbs: "7.7g",
      fiber: "2g",
      vitaminC: "59mg (59% DV)",
    },

    packagingDetails: {
      weightPerBag: "400 gm - 1000 gm - 2 kG ",
      bagsPerCarton: "10 - 25",
      weightPerCarton: "7 - 15 KG",
      additionalOption: "Or according to customer needs",
      bulkOption: {
        weightPerBag: "10 - 15 KG",
        bagsPerCarton: "1 Bulk",
        weightPerCarton: "10 - 15 KG",
      },
    },
  },

  {
    id: 11,
    name: "Frozen Mango",
    image: manga,
    imageWidth: "w-[100%]",

    description:
      "Juicy and sweet frozen mango slices, perfect for smoothies and desserts.",
    details:
      "Egyptian mango is known for its distinctive flavor, rich aroma, and exceptional sweetness. Perfect for smoothies, desserts, or a tropical snack.",
    sizes: ["Medium", "Large"],
    exportSeason: "All Year",
    category: "frozen", // ❄️ Frozen product
    nutrition: {
      calories: 65,
      protein: "0.9g",
      fat: "0.4g",
      carbs: "17g",
      fiber: "1.6g",
      vitaminC: "36mg (60% DV)",
    },
    packagingDetails: {
      weightPerBag: "400 gm - 1000 gm - 2 kG ",
      bagsPerCarton: "10 - 25",
      weightPerCarton: "7 - 15 KG",
      additionalOption: "Or according to customer needs",
      bulkOption: {
        weightPerBag: "10 - 15 KG",
        bagsPerCarton: "1 Bulk",
        weightPerCarton: "10 - 15 KG",
      },
    },
  },

  {
    id: 13,
    name: "Frozen Peas",
    image: psala,
    imageWidth: "w-[100%]",

    description:
      "Nutritious and delicious frozen peas, perfect for healthy meals all year round.",
    details:
      "Packed with vitamins and minerals, these peas are great for soups, stews, salads, or as a healthy side dish.",
    sizes: ["Small", "Medium", "Large"],
    exportSeason: "All Year",
    category: "frozen", // ❄️ Frozen product
    nutrition: {
      calories: 62,
      protein: "4.5g",
      fat: "0.4g",
      carbs: "11g",
      fiber: "4.4g",
      vitaminC: "32mg (40% DV)",
    },

    packagingDetails: {
      weightPerBag: "400 gm - 1000 gm - 2 kG ",
      bagsPerCarton: "10 - 25",
      weightPerCarton: "7 - 15 KG",
      additionalOption: "Or according to customer needs",
      bulkOption: {
        weightPerBag: "10 - 15 KG",
        bagsPerCarton: "1 Bulk",
        weightPerCarton: "10 - 15 KG",
      },
    },
  },

  {
    id: 14,
    name: "Frozen Cauliflower",
    image: arnabet,
    imageWidth: "w-[100%]",

    description:
      "High-quality frozen cauliflower, perfect for healthy and low-carb dishes.",
    details:
      "Packed with essential vitamins and low in carbs, this cauliflower is ideal for healthy meals, keto recipes, and side dishes.",
    sizes: ["Small", "Medium", "Large"],
    exportSeason: "All Year",
    category: "frozen", // ❄️ Frozen product
    nutrition: {
      calories: 25,
      protein: "2g",
      fat: "0.1g",
      carbs: "5g",
      fiber: "2g",
      vitaminC: "48mg (80% DV)",
    },

    packagingDetails: {
      weightPerBag: "400 gm - 1000 gm - 2 kG ",
      bagsPerCarton: "10 - 25",
      weightPerCarton: "7 - 15 KG",
      additionalOption: "Or according to customer needs",
      bulkOption: {
        weightPerBag: "10 - 15 KG",
        bagsPerCarton: "1 Bulk",
        weightPerCarton: "10 - 15 KG",
      },
    },
  },

  {
    id: 16,
    name: "Frozen Broccoli",
    imageWidth: "w-[100%]",

    image: prockely, // تأكد من أن الصورة مناسبة للبروكلي
    description:
      "Premium frozen broccoli with vibrant green florets and rich flavor.",
    details:
      "Perfect for various dishes, rich in fiber, vitamins, and antioxidants that support a healthy lifestyle.",
    sizes: ["Small", "Medium", "Large"],
    exportSeason: "All Year",
    category: "frozen", // ❄️ Frozen product
    nutrition: {
      calories: "34 kcal",
      protein: "2.8 g",
      fat: "0.4 g",
      carbs: "6.6 g",
      fiber: "2.6 g",
      vitaminC: "89 mg (149% DV)",
    },
    packagingDetails: {
      weightPerBag: "400 gm - 1000 gm - 2 kG ",
      bagsPerCarton: "10 - 25",
      weightPerCarton: "7 - 15 KG",
      additionalOption: "Or according to customer needs",
      bulkOption: {
        weightPerBag: "10 - 15 KG",
        bagsPerCarton: "1 Bulk",
        weightPerCarton: "10 - 15 KG",
      },
    },
  },

  {
    id: 20,
    name: "Frozen Green Beans",
    imageWidth: "w-[100%]",

    image: faswolia, // تأكد من أن اسم الصورة مناسب للمنتج
    description: "High-quality frozen Green Beans (green beans).",
    details:
      "Packed with essential vitamins and fiber, perfect for a variety of traditional and modern dishes.",
    sizes: ["Small", "Medium", "Large"],
    exportSeason: "All Year",
    category: "frozen", // ❄️ Frozen product
    nutrition: {
      calories: 31,
      protein: "1.8g",
      fat: "0.1g",
      carbs: "7g",
      fiber: "3.4g",
      vitaminC: "12% DV",
    },

    packagingDetails: {
      weightPerBag: "400 gm - 1000 gm - 2 kG ",
      bagsPerCarton: "10 - 25",
      weightPerCarton: "7 - 15 KG",
      additionalOption: "Or according to customer needs",
      bulkOption: {
        weightPerBag: "10 - 15 KG",
        bagsPerCarton: "1 Bulk",
        weightPerCarton: "10 - 15 KG",
      },
    },
  },

  ,
];
