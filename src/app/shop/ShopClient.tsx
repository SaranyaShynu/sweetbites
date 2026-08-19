"use client";

import {useMemo, useState} from "react";
import ProductCard from "@/components/product/ProductCard";
import {products} from "@/data/products";

const categories = [
    "All",
    "Cake",
    "Cookies",
    "Biscuits",
    "Brownie",
];

export default function ShopClient() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("featured");

    const filteredProducts = useMemo(() => {
          let result = [...products];
          
          // Search
          if (search.trim()) {
            result = result.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
          }

          // Category
          if (category !== "All") {
            result = result.filter(
                (product) => product.category === category
            );
          }

          // Sorting
          if (sort === "price-low") {
            result.sort((a,b) => a.price - b.price);
          }
          if(sort === "price-high") {
            result.sort((a,b) => b.price - a.price);
          }
          if(sort === "rating") {
            result.sort((a,b) => b.rating - a.rating);
          }
          return result;
    }, [search, category, sort]);

    return (
        <>
        {/* Filters */}
        <div className="mt-12 rounded-[28px] bg-white p-5 shadow-sm md:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                 
                 {/* Search */}
                 <div className="w-full lg:max-w-md">
                    <label className="mb-2 block text-sm font-medium text-[#3E3A39]">
                        Search Products
                    </label>

                    <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search cakes, cookies..."
                    className="h-12 w-full rounded-full border border-[#E8DDD8] bg-[#FFF9F7] px-5 text-[#3E3A39] outline-none transition focus:border-[#D88C9A] focus:ring-2 focus:ring-[#F7D6C8]"
                    />
                 </div>

                 {/* Category */}
                 <div>
                    <p className="mb-2 text-sm font-medium text-[#3E3A39]">
                        Category
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((item) => (
                            <button
                            key={item}
                            onClick={() => setCategory(item)}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                                category === item
                                ? "bg-[#D88C9A] text-white"
                                : "bg-[#FFF1EC] text-[#6D6867] hover:bg-[#F7D6C8]"
                            }`}
                        >
                            {item}
                        </button>
                        ))}
                    </div>
                 </div>

                 {/* Sort */}
                 <div className="min-w-[180px]">
                    <label className="mb-2 block text-sm font-medium text-[#3E3A39]">
                        Sort By
                    </label>

                    <select
                    value={sort}
                    onChange={(event) => setSort(event.target.value)}
                    className="h12 w-full rounded-full border border-[#E8DDD8] bg-[#FFF9F7] px-5 text-[#3EA39] outline-none focus:border-[#D88C9A]"
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                    </select>
                 </div>
            </div>
        </div>

        {/* Result Count */}
        <div className="mt-10 flex items-center justify-between">
            <p className="text-[#6D6867]">
                Showing{" "}
                products
            </p>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    />
                ))}
            </div>
        ) : (
            <div className="mt-10 rounded-[28px] bg-white px-6 py-20 text-center shadow-sm">
               <div className="text-5xl">🍪</div>

               <h2 className="mt-5 text-2xl font-semibold text-[#3E3A39]">
                    No treats found
               </h2> 
               <p className="mt-2 text-[#6D6867]">
                Try another search or choose a different category.
               </p>

               <button
               onClick={() => {
                setSearch("");
                setCategory("All");
               }}
               className="mt-6 rounded-full bg-[#D88C9A] px-6 py-3 font-medium text-white transition hover:bg-[#C96D80]"
               >
                Clear Filters
               </button>
            </div>
        )}
        </>
    );
}