import Link from "next/link";

export function Card() {
  return (
    <Link href="" className="flex flex-col bg-[#F95A00] text-amber-50 max-w-96"  >
      <article className="p-2.5  gap-2.5">
        <h2 className="text-[16px]">Bloco do Caramuela</h2>
        <div  className="flex flex-row justify-between  gap-3" >
          <p className="text-[12px]">Rua General Jardim, 485</p>
          <span className="text-[12px]" >Grátis</span>
        </div>
      </article>
    </Link>
  );
}
