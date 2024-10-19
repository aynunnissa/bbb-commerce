export interface IProduct {
  id: number,
  title: string,
  price: string,
  rating: number,
  thumbnail: string,
  discountPercentage: number,
  stock: number,
  category: string
}

export interface IProductDetail {
  id: number,
  title: string,
  description: string,
  price: number,
  rating: number,
  images: string[],
  discountPercentage: number,
  stock: number,
  category: string,
  sku: string,
  brand: string
}