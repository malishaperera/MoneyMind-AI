import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white text-[#0d9488] z-50 border-b  shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.jpg"}
            alt="AI Finance logo"
            height={100}
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href={"/dashboard"}
              className="text-[#0d9488] hover:text-[#facc15] flex items-center gap-2"
            >
              <Button
                variant="outline"
                className="border-[#0d9488] text-[#0d9488] hover:bg-[#facc15] hover:text-[#134e4a] transition"
              >
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href={"/transaction"}>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-[#0d9488] text-[#0d9488] hover:bg-[#facc15] hover:text-[#134e4a] transition"
              >
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button
                variant="outline"
                className="border-[#0d9488] text-[#0d9488] hover:bg-[#facc15] hover:text-[#134e4a] transition"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};
export default Header;
