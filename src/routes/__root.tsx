import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Outlet } from "@remix-run/react";

export default function App() {
  return (
    <div className="h-full w-full bg-gradient-to-b from-green-600 via-neutral-900 to-black text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
