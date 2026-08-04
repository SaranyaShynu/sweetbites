import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F7] via-[#FDF5F2] to-[#F7DDD1]">
            <Container className="grid min-h-[90vh] items-center gap-16 py-16 lg:grid-cols-2">
                <div>
                    <span className="inline-block rounded-full bg-[#F7DDD1] px-4 py-2 text-sm font-medium text-[#D98695]">
                      🍰 Freshly Baked Every Day
                    </span>
                <h1 className="mt-8 text-5xl font-bold leading-tight text-[#3E3A39] md:text-7xl ">
                    Freshly
                    <br />
                    Baked
                    <br />
                    Happiness
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8 text-[#6D6867]">
                    Indulge in handicrafted cakes, buttery cookies and artisan biscuits
                    made with premium ingredients. Every bite is baked with love.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                <Button>Shop Collection</Button>
                <Button variant="secondary">
                    Explore Menu
                    </Button>
            </div>
            <div className="mt-14 flex gap-10">
            <div>
                <h3 className="text-3xl font-bold">25K+</h3>
                <p className="text-gray-500">Happy Customers</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">120+</h3>
                <p className="text-gray-500">Fresh Products</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">4.9★</h3>
                <p className="text-gray-500">Customer Rating</p>
            </div>
            </div>
            </div>

            <div className="relative">
                <div className="absolute -left-8 top-10 rounded-2xl bg-white p-4 shadow-xl">
                    ⭐ Premium Quality
                </div>
                <div className="absolute -right-8 bottom-10 rounded-2xl bg-white p-4 shadow-xl">
                    🚚 Free Delivery
                </div>
                <Image
                src="/images/hero/hero-cake.jpg"
                alt="SweetBites Hero"
                width={700}
                height={700}
                priority
                className="w-full h-auto rounded-[40px] shadow-2xl"
                />
            </div>
            </Container>
        </section>
    )
}