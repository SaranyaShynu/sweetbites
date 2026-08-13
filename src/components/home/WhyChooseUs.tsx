import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import {
    CakeSlice,
    Heart,
    Leaf,
    Truck,
} from "lucide-react";

const features = [
    {
        icon: CakeSlice,
        title: "Freshly Baked",
        description:
        "Every order is freshly prepared by our bakers for the best taste and texture.",
    },
    {
        icon:Leaf,
        title: "Premium Ingredients",
        description:
        "We use carefully selected, high-quality ingredients in every SweetBites creation.",
    },
    {
        icon:Heart,
        title: "Made With Love",
        description:
        "From mixing to decorarting, every treat receives special care and attention.",
    },
    {
        icon:Truck,
        title: "Fast Delivery",
        description: 
        "We  carefully pack your treats and deliver them fresh and safely to your doorstep.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24">
            <Container>
                <SectionTitle
                title="Why Choose SweetBites?"
                subtitle="We believe great deserts should be fresh, beautiful, and made with care."
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon=feature.icon;

                        return (
                            <div key={feature.title}
                            className="group rounded-[28px] border-[#ECE4DF] bg-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7D6C8] text-[#D88C9A] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                  <Icon size={30} strokeWidth={1.8} />
                                  </div>

                                  <h3 className="mt-6 text-xl font-semibold text-[#3E3A39]">
                                    {feature.title}
                                  </h3>

                                  <p className="mt-3 leading-7 text-[#6D6867]">
                                    {feature.description}
                                  </p>
                                  </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}