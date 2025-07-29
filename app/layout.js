import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "moneymind-ai",
  description: "Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/*header*/}
          <Header></Header>
          <main className="min-h-screen ">{children}</main>
          <Toaster richColors />
          {/*footer*/}
          <footer className="bg-[#0f2027] bg-gradient-to-r from-[#203a43] to-[#2c5364] text-gray-300 py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Company Info */}
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-white">
                    AI Finance
                  </h2>
                  <p className="text-sm text-[#94a3b8]">
                    Empowering your financial decisions with AI insights.
                  </p>
                </div>

                {/* Navigation */}
                <div>
                  <h3 className="text-lg font-medium mb-2 text-white">
                    Quick Links
                  </h3>
                  <ul className="space-y-1 text-[#94a3b8]">
                    <li>
                      {/*<a*/}
                      {/*  href="/dashboard"*/}
                      {/*  className="hover:text-[#facc15] transition-colors"*/}
                      {/*>*/}
                      {/*  Dashboard*/}
                      {/*</a>*/}
                      <Link href="/dashboard" className="hover:text-[#facc15] transition-colors">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      {/*<a*/}
                      {/*  href="/account"*/}
                      {/*  className="hover:text-[#facc15] transition-colors"*/}
                      {/*>*/}
                      {/*  Dashboard*/}
                      {/*</a>*/}
                      <Link href="/account" className="hover:text-[#facc15] transition-colors">
                        Account
                      </Link>
                    </li>
                    <li>
                      {/*<a*/}
                      {/*  href="/pricing"*/}
                      {/*  className="hover:text-[#facc15] transition-colors"*/}
                      {/*>*/}
                      {/*  Pricing*/}
                      {/*</a>*/}
                      <Link href="/pricing" className="hover:text-[#facc15] transition-colors">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      {/*<a*/}
                      {/*  href="/contact"*/}
                      {/*  className="hover:text-[#facc15] transition-colors"*/}
                      {/*>*/}
                      {/*  Contact*/}
                      {/*</a>*/}
                      <Link href="/contact" className="hover:text-[#facc15] transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-medium mb-2 text-white">
                    Connect with us
                  </h3>
                  <div className="flex justify-center md:justify-start space-x-6 text-[#94a3b8]">
                    <a
                      href="#"
                      className="hover:text-[#facc15] transition-colors text-2xl"
                    >
                      🌐
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#facc15] transition-colors text-2xl"
                    >
                      🐦
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#facc15] transition-colors text-2xl"
                    >
                      📘
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#facc15] transition-colors text-2xl"
                    >
                      📸
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-[#203a43] pt-4 text-sm text-center text-[#64748b]">
                © 2025 AI Finance Platform. All rights reserved.
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
