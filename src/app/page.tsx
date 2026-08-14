import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SpecialOffer from "@/components/home/SpecialOffer";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";

export default function Home()
{
    return (
        <>
         <Navbar />

         <main>
         <Hero />
         <Categories />
         <FeaturedProducts />
         <SpecialOffer />
         <Testimonials />
         <WhyChooseUs />
         <Newsletter />
         </main>

         <Footer />
        </>
    )
}