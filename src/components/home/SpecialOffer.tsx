import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function SpecialOffer() {
  return (
    <section className="py-24">
      <Container>
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#D88C9A] via-[#E8A9B6] to-[#F7D6C8]">
          <div className="grid items-center gap-10 p-8 md:p-12 lg:grid-cols-2 lg:p-16">
            {/* Left */}
            <div className="text-white">
              <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                🎉 Weekend Special
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight">
                20% OFF
              </h2>

              <h3 className="mt-4 text-3xl font-semibold">
                Chocolate Truffle Cake
              </h3>

              <p className="mt-6 max-w-lg text-white/90">
                Rich Belgian chocolate, silky ganache, and fresh cream
                handcrafted by our expert bakers.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button className="bg-white text-[#D88C9A] hover:bg-[#FFF5F7]">
                  Shop Now
                </Button>

                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#D88C9A]"
                >
                  View Menu
                </Button>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center">
              <div className="relative aspect-square w-full max-w-md">
                <Image
                  src="/images/products/chocolate-cake.jpg"
                  alt="Chocolate Truffle Cake"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width:768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}