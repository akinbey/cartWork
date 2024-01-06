import { ProductImage } from "./product-image";

export interface Product{
    productId: number;
    id:number;
    categoryId:number;
    name:string;
    price:number;
    image:ProductImage;
    description:string;
    createdDate:string;
    isActive:boolean;
    
}
