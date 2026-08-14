import Link from "next/link";
import Container from "../ui/Container";

const shopLinks = [
    { label: "All Products", href: "/shop" },
    { label: "Cakes", href: "/cakes" },
    { label: "Cookies", href: "/biscuits" },
    { label: "Biscuits", href: "/biscuits" },
];

const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Delivery Information", href: "/delivery" },
];

export default function Footer() {
    return (
        <footer className="bg-[#3E3A39] text-white">
            <Container>
              <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
                {/* Brand */}
                <div>
                    <Link href="/" className="text-3xl font-bold text-[#F7D6C8]">
                    SweetBites
                    </Link>

                    <p className="mt-5 max-w-xs leading-7 text-white/70">
                    Freshly baked cakes, cookies, biscuits, and sweet treats made
                    with love and premium ingredients.
                    </p>
                </div>

                {/* Shop */}
                <div>
                    <h3 className="text-lg font-semibold">Shop </h3>

                    <ul className="mt-5 space-y-3">
                        {shopLinks.map((link) =>(
                            <li key={link.href}>
                                <Link
                                href={link.href}
                                className="text-white/70 transition hover:text-[#F7D6C8]"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-lg font-semibold">Company</h3>

                    <ul className="mt-5 space-y-3">
                        {companyLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                href={link.href}
                                className="text-white/70 transition hover:text-[#F7D6C8]"
                                >
                                    {link.label}
                                </Link>
                                </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <div className="mt-5 space-y-3 text-white/70">
                    <p>📍 Kerala, India</p>
                    <p>📞 +91 11100 00000</p>
                    <p>✉️ hello@sweetbites.com</p>
                    </div>
                </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
                <p>
                    © {new Date().getFullYear()} SweetBites. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-white">
                       Privacy Policy
                    </Link>

                    <Link href="/terms" className="hover:text-white">
                       Terms & Conditions 
                    </Link>
                </div>
                </div>  
            </Container>
        </footer>
    );
}