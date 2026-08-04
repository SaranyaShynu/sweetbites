"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types/product";
import Button from "../ui/Button";

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group overflow-hidden rounded-[28px] bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative overflow-hidden">
                {product.badge && (
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-[#D98695] px-3 py-1 text-xs font-semibold text-white">
                        {product.badge}
                    </span>
                )}
                <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-md transition hover:scale-110 ">
                    <Heart size={18} />
                </button>
                <div className="relative aspect-square overflow-hidden rounded-[28px]">
                <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration=700 group-hover:scale-110"
                />
                </div>
            </div>

            <div className="p-6">
                <p className="text-sm uppercase tracking-wider text-[#D98695]">
                    {product.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#3E3A39]">
                    {product.name}
                </h3>
                <div className="mt-3 flex items-center gap-2">
                    <Star
                    size={18}
                    className="fill-yellow-400 text-yellow=400"
                    />
                    <span className="font-medium">
                    {product.rating}
                    </span>
                    <span className="text-gray-500">
                          ({product.reviews} reviews)
                    </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                    <span className="text-2xl font-boldtext-[#3E3A39">
                         ₹{product.price}
                    </span>
                    {product.oldPrice && (
                         <span className="text-gray-400 line-through">
                         ₹{product.oldPrice}
                    </span>
                    )}
            </div>

            <Button className="mt-6 w-full flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                Add to Cart
            </Button>
        </div>
        </div>
    )
}