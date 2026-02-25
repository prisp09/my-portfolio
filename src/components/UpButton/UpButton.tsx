"use client";

import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function UpButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-5 right-10 z-[100] transition-all duration-300 ease-in-out text-white border-none rounded-full p-2 bg-transparent hover:bg-[#212d45] hover:scale-110 cursor-pointer"
      aria-label="Scroll to top"
    >
      <IoIosArrowUp size="4rem" />
    </button>
  );
}
