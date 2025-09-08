import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-stone-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" aria-label="Gammelbyggnad - Till startsidan">
          <Image
            src="/images/loggagammelbyggnad.png" 
            alt="Gammelbyggnadsmåleri logotyp"
            width={250}
            height={250}
            className="h-24 w-auto"
          />
        </Link>
        <nav className="flex space-x-6">
          <Link href="#omoss" className="text-stone-600 hover:text-stone-900">
            Om oss
          </Link>
          <Link
            href="#tjanster"
            className="text-stone-600 hover:text-stone-900"
          >
            Tjänster
          </Link>
          <Link href="#galleri" className="text-stone-600 hover:text-stone-900">
            Galleri
          </Link>
          <Link href="#kontakt" className="text-stone-600 hover:text-stone-900">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
