import Banner from "@/components/Menu/Banner";
import Header from "@/components/ui/Header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="bg-gray-50">
            <Header />
            <Banner />
            {children}
        </section>
    );
}