import { ProcessCategory } from "../types/process";

export const categories: ProcessCategory[] = [
  {
    id: "1",
    value: "generic",
    name: "Generic",
    icon: "generic",
  },
  {
    id: "2",
    value: "delivery",
    name: "Delivery",
    icon: "motorcycle",
  },
  {
    id: "3",
    value: "restaurant",
    name: "Restaurant",
    icon: "pizza",
  },
  {
    id: "4",
    value: "ridesharing",
    name: "Ridesharing",
    icon: "car",
  },
  {
    id: "5",
    value: "lodging",
    name: "Lodging",
    icon: "travel",
  },
  {
    id: "6",
    value: "todo/kanban",
    name: "Todo/Kanban",
    icon: "kanban",
  },
  {
    id: "7",
    value: "package management",
    name: "Package management",
    icon: "boxes",
  },
];
