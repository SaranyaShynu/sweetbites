export interface Product {
    id:number;
    name:string;
    category:string;
    image:string;
    price:number;
    oldprice?:number;
    rating:number;
    reviews:number;
    badge?:string;
}