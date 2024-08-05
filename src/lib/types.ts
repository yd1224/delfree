export interface Product {
  productId: number;
  quantity: number;
  productName: string;
  price: number;
  productImageUrl: string;
}

export interface GetProductsResponse {
  nextPageExists: boolean;
  products: Product[];
  totalPages: number;
  totalProducts: number;
}
