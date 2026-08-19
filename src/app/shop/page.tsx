import Container from "@/components/ui/Container";
import ProductCard from "@/components/product/ProductCard";
import {products} from "@/data/products";

export default function ShopPage() {
    return (
        <main className="min-h-screen bg-[#FFF9F7] py-16">
            <Container>
                {/* Page Header */}
                <div className="text-center">
                    <span className="inline-block rounded-full bg-[#F7D6C8] px-4 py-2 text-sm font-medium text-[#D88C9A]">
                        🍪 SweetBites Shop
                    </span>

                    <h1 className="mt-6 text-4xl font-bold text-[#3E3A39] md:text-6xl">
                        All Our Sweet Treats
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6D6867]">
                        Explore our collection of freshly baked cakes, cookies, biscuits,
                        brownies and more.
                    </p>
                </div>

                {/* Products */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                        key={product.id}
                        product={product}
                        />
                    ))}
                </div>
            </Container>
        </main>
    )
}