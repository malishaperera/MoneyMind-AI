"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrolly;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="pb-25 px-4 bg-[#f9fafb]">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] leading-tight mb-6">
          Manage Your <span className="text-[#0d9488]">Finances</span> <br />
          Smarter with AI
        </h1>

        <p className="text-lg md:text-xl text-[#475569] mb-8">
          MoneyMind helps you take control of your money with real-time insights,
          smart budgeting, and AI-powered tracking.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <Link href={"/dashboard"}>
            <Button
              size="lg"
              className="px-8 bg-[#0d9488] text-white hover:bg-[#facc15] hover:text-[#134e4a] transition"
            >
              Get Started
            </Button>
          </Link>

          <Link href="#">
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-[#0d9488] text-[#0d9488] hover:bg-[#facc15] hover:text-[#134e4a] transition"
            >
              Watch Demo
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <div
            ref={imageRef}
            className="hero-image transition-transform duration-500 ease-in-out "
          >
            <Image
              src="/back-hero.png"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;