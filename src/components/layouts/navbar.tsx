import Image from "next/image";

export function Navbar() {
  return (
    <header className="flex flex-col items-center justify-center gap-8 mb-20">
      <Image
        src="/Logo-Carnaval-Horizontal.png"
        alt="logo do carnaval "
        width={319}
        height={54}
      />

      <h1 className="text-4xl font-bold text-[#ff4500]">
        🎭 Projeto Hackathon do Carnaval de 2025 🎭
      </h1>
    </header>
  );
}
