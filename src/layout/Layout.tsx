import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-[1280px] min-w-0 mx-auto overflow-x-hidden md:pl-[72px]">
      <Header />
      <div className="min-w-0 w-full max-w-full overflow-x-hidden">
        <main className="min-w-0 w-full max-w-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
