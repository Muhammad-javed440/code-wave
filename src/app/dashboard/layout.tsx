import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
