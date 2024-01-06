export interface PostDataType {
  id: number | string;
  title: string;
  body: string;
}

import { ReactNode } from "react";
import { AxiosPromise } from "axios";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  rating: number;
  stock: number;
  category: string;
  image: string;
  create_at: number;
  color: string;
}

export interface InitialStateType extends Omit<Product, "id"> {}

interface PriceDetails {
  amount: number;
  totalAmount: number;
  totalPrice: number;
  totalDiscountPrice: number;
}

export interface BasketType extends Omit<Product, "create_at">, PriceDetails {}

export interface ProductState extends PriceDetails {
  basket: BasketType[];
}

export interface LayoutProps {
  children: ReactNode;
}
interface ProductParams {
  price: number;
  discountPrice: number;
}

export interface RouterTypes {
  Home: string;
  AddItem: string;
  UpdateItem: string;
  Detail: string;
  Product: string;
  Basket: string;
  ProductDetail: string;
}

export interface GetProducts {
  (params?: Required<ProductParams> | undefined): AxiosPromise<PostDataType[]>;
}

export interface GetSingleProduct {
  (productId: number): AxiosPromise<Product>;
}

export interface AddProduct {
  (newProduct: InitialStateType): AxiosPromise<Product>;
}

export interface DeleteProduct {
  (productId: number): AxiosPromise<void>;
}

export interface EditProduct {
  (
    productId: number,
    updatedProduct: Partial<InitialStateType>
  ): AxiosPromise<Product>;
}
