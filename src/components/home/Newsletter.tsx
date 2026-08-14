import Container from "../ui/Container";

export default function Newsletter() {
    return (
        <section className="py-24">
            <Container>
                <div className="overflow-hidden rounded-[40px] bg-[#F7D6C8] px-6 py-16 text-center md:px-12">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D88C9A]">
                        Sweet News
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-[#3E3A39] md:text-5xl">
                        Get a little sweetness in your inbox
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-[#6D6867]">
                        Subscribe for new product announcements, special offers,
                        seasonal treats, and exclusive discounts.
                    </p>

                    <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                        <input
                        type="email"
                        placeholder="Enter your email address"
                        className="h-14 flex-1 rounded-full border border-white bg-white px-6 text-[#3E3A39] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#D88C9A]"
                        />

                        <button
                        type="submit"
                        className="h-14 rounded-full bg-[#D88C9A] px-8 font-semibold text-white transition hover:bg-[#C96D80] hover:shadow-lg"
                        >
                            Subscribe
                        </button>
                        </form>

                        <p className="=mt-4 text-xs text-[#6D6867]">
                            No spam. Just sweet updates. 🍪
                        </p>
                </div>
            </Container>
        </section>
    );
}