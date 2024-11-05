export const sideBarOptions = [
  { label: "Profile", link: "/user-profile" },
  { label: "Climate Impact", link: "/climate-impact" },
  { label: "Certificate & Green Rewards", link: "/certificate" },
  {
    label: "Integrations",
    link: "/tree-widget",
    children: [
      { label: "Tree Widget", link: "/tree-widget" },
      { label: "Tree Planting API", link: "/tree-planting-api" },
    ],
  },
  { label: "Subscriptions", link: "/subscriptions" },
  // { label: "Purchase History", link: "/purchase-history" },
  { label: "Settings", link: "/settings" },
];
