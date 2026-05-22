import { Project } from "./types";

export const mallMarkProject: Project = {
  id: "mall-mark",
  name: "Mall Mark",
  platform: "Mobile",
  shortDescription: "Grocery & Items Delivery App",
  problemStatement:
    "Connecting local vendors with customers for seamless grocery and item delivery.",
  status: "Production",
  hasDemo: true,
  hasGithub: false,
  techStack: ["React Native (JavaScript)", "CSS", "Render (Database)"],
  role: "Sole Frontend Developer",
  overview:
    "Mall Mark is a production-grade grocery and items delivery platform, live on the Apple App Store, consisting of two React Native applications: a Customer app for browsing, ordering, and tracking deliveries, and a Vendor app for inventory management, order processing, and sales analytics.",
  features: [
    "Real-time order tracking with push notifications",
    "Multi-vendor product catalog with search and filters",
    "Cart management with promo code support",
    "Secure payment integration",
    "Vendor dashboard for order management",
    "Inventory management system",
    "Delivery scheduling and slot management",
    "Customer reviews and ratings system",
  ],
  technicalDecisions: [
    {
      title: "State Management",
      description:
        "Redux Toolkit with RTK Query for server state synchronization. Chose this for predictable state updates across complex order flows and offline support capabilities.",
    },
    {
      title: "API Architecture",
      description:
        "RESTful API integration with centralized error handling and retry logic. Implemented request interceptors for token refresh and offline queue management.",
    },
    {
      title: "Performance",
      description:
        "Virtualized lists for product catalogs, image caching strategies, and optimistic updates for cart operations to ensure smooth UX.",
    },
    {
      title: "Code Organization",
      description:
        "Feature-based folder structure with shared components. Separate concerns for customer and vendor apps while sharing core utilities.",
    },
  ],
  demoContent: {
    videoUrl:
      "https://res.cloudinary.com/dzgtaqwwk/video/upload/v1768509237/IMG_20260115_212912_783_iitmat.mp4",
    videoDescription:
      "Complete walkthrough of the customer ordering flow and vendor management dashboard.",
    mediaType: "mobile",
    videoClips: [
      {
        title: "Error Handling",
        description: "Validation and error states during ordering.",
        url: "https://res.cloudinary.com/dzgtaqwwk/video/upload/v1768509235/IMG_20260115_213207_213_ioy2wf.mp4",
      },
      {
        title: "Cart & Checkout",
        description: "Add items, adjust quantities, and complete checkout.",
        url: "https://res.cloudinary.com/dzgtaqwwk/video/upload/v1768509234/IMG_20260115_212731_740_li0chr.mp4",
      },
      {
        title: "Authentication",
        description: "Simple login flow for returning users.",
        url: "https://res.cloudinary.com/dzgtaqwwk/video/upload/v1768509233/IMG_20260115_213049_936_uuvq78.mp4",
      },
      {
        title: "Search & Filtering",
        description: "Browse categories and refine results with filters.",
        url: "https://res.cloudinary.com/dzgtaqwwk/video/upload/v1768509237/IMG_20260115_212912_783_iitmat.mp4",
      },
    ],
    screenshots: [
      {
        caption: "Product Catalog",
        description:
          "Browse products with filters, categories, and search functionality.",
        imageUrl:
          "https://res.cloudinary.com/dzgtaqwwk/image/upload/v1768542336/Search_k5r2th.png",
      },
      {
        caption: "Cart & Checkout",
        description:
          "Seamless cart management with promo code support and multiple payment options.",
        imageUrl:
          "https://res.cloudinary.com/dzgtaqwwk/image/upload/v1768542336/Shopping_Cart_qcu9wz.png",
      },
      {
        caption: "Order Tracking",
        description: "Real-time order status updates with push notifications.",
        imageUrl:
          "https://res.cloudinary.com/dzgtaqwwk/image/upload/v1768542335/Order_history_e8inhn.png",
      },
      {
        caption: "Vendor Dashboard",
        description: "Order management and inventory control for vendors.",
        imageUrl:
          "https://res.cloudinary.com/dzgtaqwwk/image/upload/v1768542335/Home_page_znamwn.png",
      },
    ],
    highlights: [
      {
        title: "Real-time Updates",
        description:
          "Live order tracking with push notifications keeps customers informed.",
      },
      {
        title: "Multi-vendor Support",
        description:
          "Customers can order from multiple vendors in a single transaction.",
      },
      {
        title: "Offline Capable",
        description:
          "Cart and browsing work offline with sync when connection returns.",
      },
      {
        title: "Live on App Store",
        description:
          "Available on the Apple App Store for iOS users. Android release in progress.",
      },
    ],
  },
};

