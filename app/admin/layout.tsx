import Sidebar from "@/components/admin/Sidebar";
import Banner from "@/components/Menu/Banner";
import Header from "@/components/ui/Header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Sidebar>
            {children}
        </Sidebar>
    );
}