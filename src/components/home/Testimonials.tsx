import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import {testimonials} from "@/data/testimonials";
import {Star, Quote} from "lucide-react";

export default function Testimonials() {
    return (
        <section className="bg-[#FFF9F7] py-24">
            <Container>
                <SectionTitle
                title="What Our Customers Say"
                subtitle="A little sweetness from the people who love SweetBites."
                />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial)=>(
                        <div
                        key={testimonial.id}
                        className="group relative rounded-[28px] bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                    {/* Quote Icon */}
                    <div className="absolute right-7 top-7 text-[#F7D6C8]">
                        <Quote size={42} fill="currentColor" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map(
                            (_, index)=>(
                                <Star
                                key={index}
                                size={18}
                                className="fill-[#D9B26F] text-[#D9B26F]"
                    />
                            )
                        )}
                    </div>

                    {/* Message */}
                    <p className="mt-6 text-lg leading-8 text-[#6D6867]">
                    "{testimonial.message}"
                    </p>
                  
                    {/* Customer */}
                    <div className="mt-8 flex items-center gap-4">
                        <div className="flex h-12 w-12c= items-center justify-center rounded-full bg-[#F7D6C8] text-lg font-semibold text-[#D88C9A]">
                           {testimonial.name.charAt(0)} 
                        </div>

                        <div>
                            <h3 className="font-semibold text-[#3E3A39]">
                                {testimonial.name}
                            </h3>

                            <p className="text-sm text-[#6D6867]">
                                {testimonial.role}
                            </p>
                        </div>
                    </div>
                </div>
))}
                </div>
            </Container>
        </section>
    )
}