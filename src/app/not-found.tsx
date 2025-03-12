import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 text-center p-5">
      <h1 className="text-4xl font-bold text-[#ff4500]">🎭 Ops! Página não encontrada! 🎭</h1>
      <p className="text-lg text-[#616161] mt-2">
        Parece que esse bloco se perdeu no meio da folia! 🏳️‍🌈  
      </p>
      <Link 
        href="/" 
        className="mt-5 px-4 py-2 bg-[#ff4500] text-white rounded-lg shadow-md hover:bg-[#e03e00] transition"
      >
        Voltar para a festa 🎉
      </Link>
    </div>
  );
}
