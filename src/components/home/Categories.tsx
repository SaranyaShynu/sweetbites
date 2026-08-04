import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import CategoryCard from "./CategoryCard";
import {categories} from "@/data/categories";

export default function Categories() {
    return (
        <section className="py-24">
            <Container>
                <SectionTitle
                title="Browse Our Categories"
                subtitle="Freshly baked delights crafted with love for every occasion."
                />

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category)=> (
                        <CategoryCard
                        key={category.id}
                        name={category.name}
                        image={category.image}
                        items={category.items}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}