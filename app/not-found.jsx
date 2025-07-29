import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4f8] px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-[#181818] mb-4">404</h1>
        <p className="text-2xl text-[#181818] mb-2 font-semibold">
          Page Not Found
        </p>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" passHref>
          <Button className="bg-[#4fd1c5] hover:bg-[#38b2ac] text-white px-6 py-2 text-lg rounded-xl transition-all">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
