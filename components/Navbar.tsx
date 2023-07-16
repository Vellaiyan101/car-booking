import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = (props: any) => {
  return (
    <header className="w-full fixed z-20 bg-white opacity-95">
      <nav className="max-w-[1440px]  mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.svg" alt="Car Hub Log" width={118} height={18} className="object-contain" />
        </Link>
        <div className="flex gap-3">
          <Link href="/signIn">
            <CustomButton title="Sign In" btnType="button" containerStyle="text-white rounded-full bg-blue-700 text-xs md:text-sm" />
          </Link>
          <Link href="/signUp">
            <CustomButton title="Sign Up" btnType="button" containerStyle="text-white rounded-full bg-blue-700 text-xs md:text-sm" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
