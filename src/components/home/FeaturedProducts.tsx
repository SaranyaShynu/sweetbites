import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProductCard from "../product/ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
    return (
        <section className="py-24 bg-[#FFF9F7]">
           <Container>
            <SectionTitle
            title="Our Best Sellers"
            subtitle="Discover our most loved cakes, cookies and desserts baked fresh every day."
             />

             <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product)=> (
                <ProductCard
                key={product.id}
                product={product}
                />
              ))}
                </div>  
            </Container> 
        </section>
    )
}