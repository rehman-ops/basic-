/**
 * Centralized Generic Restaurant Template Configuration
 * 
 * Replace all placeholders below with actual restaurant client details.
 * Everything propagates automatically across the entire website template.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  formattedPrice: string; // e.g. "Rs. PRICE HERE"
  imagePlaceholderText: string; // e.g. "DISH IMAGE HERE"
  badge?: string; // e.g. "SPECIAL HERE"
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
}

export interface RestaurantConfig {
  name: string;
  logoText: string;
  tagline: string;
  shortDescription: string;
  story: {
    heading: string;
    subheading: string;
    paragraph1: string;
    paragraph2: string;
    cuisineType: string;
    experienceText: string;
    highlights: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    phoneDisplay: string;
    whatsappNumberPlaceholder: string;
    whatsappButtonText: string;
  };
  location: {
    addressDisplay: string;
    mapPlaceholderText: string;
    landmark: string;
  };
  hours: {
    schedule: string;
  }[];
  social: {
    instagram: {
      displayText: string;
      urlPlaceholder: string;
    };
    facebook: {
      displayText: string;
      urlPlaceholder: string;
    };
    tiktok: {
      displayText: string;
      urlPlaceholder: string;
    };
  };
  amenities: string[];
  categories: MenuCategory[];
  menuItems: MenuItem[];
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export const defaultRestaurantConfig: RestaurantConfig = {
  name: "RESTAURANT NAME HERE",
  logoText: "RESTAURANT LOGO HERE",
  tagline: "RESTAURANT TAGLINE HERE",
  shortDescription: "RESTAURANT DESCRIPTION HERE",

  story: {
    heading: "ABOUT RESTAURANT HERE",
    subheading: "RESTAURANT SUBHEADING HERE",
    paragraph1: "RESTAURANT DESCRIPTION HERE. Introduce the dining concept, kitchen philosophy, and atmosphere for your restaurant client here.",
    paragraph2: "SHORT RESTAURANT DESCRIPTION HERE. Detail the ingredients, heritage, and service commitment for your restaurant client here.",
    cuisineType: "CUISINE TYPE HERE",
    experienceText: "YEARS OF SERVICE HERE",
    highlights: [
      {
        title: "HIGHLIGHT 1 HERE",
        description: "Highlight description and feature details here.",
      },
      {
        title: "HIGHLIGHT 2 HERE",
        description: "Highlight description and feature details here.",
      },
      {
        title: "HIGHLIGHT 3 HERE",
        description: "Highlight description and feature details here.",
      },
      {
        title: "HIGHLIGHT 4 HERE",
        description: "Highlight description and feature details here.",
      },
    ],
  },

  contact: {
    phoneDisplay: "PHONE NUMBER HERE",
    whatsappNumberPlaceholder: "WHATSAPP NUMBER HERE",
    whatsappButtonText: "CHAT ON WHATSAPP",
  },

  location: {
    addressDisplay: "RESTAURANT ADDRESS HERE",
    mapPlaceholderText: "GOOGLE MAP LOCATION HERE",
    landmark: "RESTAURANT LANDMARK HERE",
  },

  hours: [
    { schedule: "OPENING HOURS HERE" },
    { schedule: "OPENING HOURS HERE" },
    { schedule: "OPENING HOURS HERE" },
  ],

  social: {
    instagram: {
      displayText: "INSTAGRAM LINK HERE",
      urlPlaceholder: "#",
    },
    facebook: {
      displayText: "FACEBOOK LINK HERE",
      urlPlaceholder: "#",
    },
    tiktok: {
      displayText: "TIKTOK LINK HERE",
      urlPlaceholder: "#",
    },
  },

  amenities: [
    "RESTAURANT AMENITY 1 HERE",
    "RESTAURANT AMENITY 2 HERE",
    "RESTAURANT AMENITY 3 HERE",
    "RESTAURANT AMENITY 4 HERE",
  ],

  categories: [
    { id: 'cat-1', name: 'MENU CATEGORY 1', description: 'Category description here' },
    { id: 'cat-2', name: 'MENU CATEGORY 2', description: 'Category description here' },
    { id: 'cat-3', name: 'MENU CATEGORY 3', description: 'Category description here' },
    { id: 'cat-4', name: 'MENU CATEGORY 4', description: 'Category description here' },
    { id: 'cat-5', name: 'MENU CATEGORY 5', description: 'Category description here' },
    { id: 'cat-6', name: 'MENU CATEGORY 6', description: 'Category description here' },
  ],

  menuItems: [
    {
      id: 'dish-1',
      name: 'DISH 1',
      category: 'cat-1',
      description: 'Dish description here',
      formattedPrice: 'Rs. PRICE HERE',
      imagePlaceholderText: 'DISH IMAGE HERE',
      badge: 'FEATURED DISH',
    },
    {
      id: 'dish-2',
      name: 'DISH 2',
      category: 'cat-1',
      description: 'Dish description here',
      formattedPrice: 'Rs. PRICE HERE',
      imagePlaceholderText: 'DISH IMAGE HERE',
    },
    {
      id: 'dish-3',
      name: 'DISH 3',
      category: 'cat-2',
      description: 'Dish description here',
      formattedPrice: 'Rs. PRICE HERE',
      imagePlaceholderText: 'DISH IMAGE HERE',
      badge: 'FEATURED DISH',
    },
    {
      id: 'dish-4',
      name: 'DISH 4',
      category: 'cat-2',
      description: 'Dish description here',
      formattedPrice: 'Rs. PRICE HERE',
      imagePlaceholderText: 'DISH IMAGE HERE',
    },
    {
      id: 'dish-5',
      name: 'DISH 5',
      category: 'cat-3',
      description: 'Dish description here',
      formattedPrice: 'Rs. PRICE HERE',
      imagePlaceholderText: 'DISH IMAGE HERE',
    },
    {
      id: 'dish-6',
      name: 'DISH 6',
      category: 'cat-3',
      description: 'Dish description here',
      formattedPrice: 'Rs. PRICE HERE',
      imagePlaceholderText: 'DISH IMAGE HERE',
    },
    {
      id: 'dish-7',
      name: 'DISH 7',
      category: 'cat-4',
      description: 'Dish description here',
      formattedPrice: 'Rs. PRICE HERE',
      imagePlaceholderText: 'DISH IMAGE HERE',
    },
    {
      id: 'dish-8',
      name: 'DISH 8',
      category: 'cat-4',
      description: 'Dish description here',
      formattedPrice: 'Rs. PRICE HERE',
      imagePlaceholderText: 'DISH IMAGE HERE',
    },
    {
      id: 'dish-9',
      name: 'DISH 9',
      category: 'cat-5',
      description: 'Dish description here',
      formattedPrice: 'Rs. PRICE HERE',
      imagePlaceholderText: 'DISH IMAGE HERE',
    },
    {
      id: 'dish-10',
      name: 'DISH 10',
      category: 'cat-5',
      description: 'Dish description here',
      formattedPrice: 'Rs. PRICE HERE',
      imagePlaceholderText: 'DISH IMAGE HERE',
    },
    {
      id: 'dish-11',
      name: 'DISH 11',
      category: 'cat-6',
      description: 'Dish description here',
      formattedPrice: 'Rs. PRICE HERE',
      imagePlaceholderText: 'DISH IMAGE HERE',
    },
    {
      id: 'dish-12',
      name: 'DISH 12',
      category: 'cat-6',
      description: 'Dish description here',
      formattedPrice: 'Rs. PRICE HERE',
      imagePlaceholderText: 'DISH IMAGE HERE',
    },
  ],

  seo: {
    metaTitle: "RESTAURANT NAME HERE | Official Website",
    metaDescription: "RESTAURANT DESCRIPTION HERE",
  },
};
