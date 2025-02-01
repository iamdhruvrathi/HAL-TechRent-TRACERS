// src/data.ts

export interface Order {
  id: number;
  product: string;
  startDate: string;
  endDate: string;
  status: string;
  price: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  status: string;
  rentedTimes: number;
}

export const userOrders: Order[] = [
  {
    id: 1,
    product: "MacBook Pro M1",
    startDate: "2024-03-01",
    endDate: "2024-03-07",
    status: "Active",
    price: "₹3,493"
  },
  {
    id: 2,
    product: "Sony A7 III",
    startDate: "2024-02-15",
    endDate: "2024-02-20",
    status: "Completed",
    price: "₹3,995"
  }
];

export const rentedProducts: Product[] = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: "₹599/day",
    status: "Available",
    rentedTimes: 5
  },
  {
    id: 2,
    name: "4K Monitor",
    price: "₹299/day",
    status: "Rented",
    rentedTimes: 3
  }
];

export const addOrder = (order: Order) => {
  userOrders.push(order);
};

export const addProduct = (product: Product) => {
  rentedProducts.push(product);
};
