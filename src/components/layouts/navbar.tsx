import Image from "next/image";
import Link from "next/link";

export  function Navbar() {
  return (
    <header className="flex flex-col items-center justify-center gap-8 mb-20">
      <Image
        src="/Logo-Carnaval-Horizontal.png"
        alt="logo do carnaval "
        width={319}
        height={54}
      />

      <nav
        className="flex gap-8 justify-center bg-[#FFFF00] w-full"
        aria-label="Paginação  principal"
      >
        <Link
          href="/"
          className="px-8 py-2 border-l border-r border-black text-orange-600 text-lg font-bold font-poppins"
        >
          HOME
        </Link>
          <Link
            href="/bloco"
            className="px-8 py-2 border-l border-r border-black text-orange-600 text-lg font-bold font-poppins"
          >BLOCOS</Link>
      </nav>
      
    </header>
  );
}
