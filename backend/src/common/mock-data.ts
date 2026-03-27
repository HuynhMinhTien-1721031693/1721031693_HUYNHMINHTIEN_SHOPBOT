export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  stockQty: number;
  description: string;
};

export type Order = {
  id: string;
  orderCode: string;
  userId: string;
  status: 'pending' | 'confirmed' | 'packing' | 'shipping' | 'done' | 'cancelled';
  total: number;
  paymentMethod: 'cod' | 'vnpay' | 'momo';
  createdAt: string;
};

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'iPhone 15 128GB',
    brand: 'Apple',
    category: 'phone',
    price: 18990000,
    rating: 4.8,
    stockQty: 22,
    description: 'Camera on dinh, hieu nang manh, phu hop da so nguoi dung.',
  },
  {
    id: 'p2',
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    category: 'phone',
    price: 17990000,
    rating: 4.7,
    stockQty: 18,
    description: 'Man hinh dep, pin tot, trai nghiem Android cao cap.',
  },
  {
    id: 'p3',
    name: 'MacBook Air M3 13"',
    brand: 'Apple',
    category: 'laptop',
    price: 26990000,
    rating: 4.9,
    stockQty: 12,
    description: 'Nhe, pin lau, phu hop hoc tap va cong viec van phong.',
  },
  {
    id: 'p4',
    name: 'Asus ROG Zephyrus G14',
    brand: 'Asus',
    category: 'laptop',
    price: 32990000,
    rating: 4.6,
    stockQty: 7,
    description: 'Laptop hieu nang cao cho gaming va cong viec sang tao.',
  },
  {
    id: 'p5',
    name: 'AirPods Pro 2',
    brand: 'Apple',
    category: 'accessory',
    price: 5390000,
    rating: 4.8,
    stockQty: 35,
    description: 'Chong on chu dong, ket noi nhanh, am thanh can bang.',
  },
];

export const mockOrders: Order[] = [
  {
    id: 'o1',
    orderCode: '#SP260001',
    userId: 'u1',
    status: 'shipping',
    total: 24380000,
    paymentMethod: 'cod',
    createdAt: new Date().toISOString(),
  },
];
