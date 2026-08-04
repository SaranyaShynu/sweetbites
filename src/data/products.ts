import { Product } from "@/types/product";

export const products: Product[] = [
    {
        id:1,
        name:"Chocolate Truffle Cake",
        category:"Cake",
        image:"/images/products/chocolate-cake.jpg",
        price:499,
        oldPrice:599,
        rating:4.9,
        reviews:128,
        badge:"Best-Seller",
    },
    {
        id:2,
        name:"Butter Cookies",
        category:"Cookies",
        image:"/images/products/butter-cookies.jpg",
        price:199,
        rating:4.8,
        reviews:96,
        badge:"New",
    },
    {
        id:3,
        name:"Oreo Cheesecake",
        category:"Cake",
        image:"/images/products/oreo-cake.jpg",
        price:699,
        oldPrice:799,
        raring:5,
        reviews:210,
    },
    {
        id:4,
        name:"Chocolate Brownie",
        category:"Brownie",
        image:"/images/products/brownie.jpg",
        price:249,
        rating:4.7,
        reviews:88,
    },
];