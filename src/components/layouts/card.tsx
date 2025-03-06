import Link from "next/link";

export interface CardProps {
  id: number
  title: string
  address: string
  price: string
}

export function Card({id, title, address, price}: CardProps) {
  return (
    <Link href={`/bloco/${id}`} className="flex flex-col bg-[#F95A00] text-amber-50 max-w-96 min-h-28"  >
      <article className="p-2.5  gap-2.5">
        <h2 className="text-[16px]">{title}</h2>
        <div  className="flex flex-row justify-between  gap-3" >
          <p className="text-[12px]">{address}</p>
          <span className="text-[12px]" >{price}</span>
        </div>
      </article>
    </Link>
  );
}
