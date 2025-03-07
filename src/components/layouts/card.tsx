import Link from "next/link";

export interface CardProps {
  id: number
  title: string
  city: string
  price: string
}

export function Card({id, title, city, price}: CardProps) {
  return (
    <Link href={`/bloco/${id}`} className="flex flex-col bg-[#F95A00] text-amber-50 max-w-96 min-h-28"  >
      <article className="flex flex-col p-2.5  gap-2.5 justify-between h-full">
        <h2 className="text-[16px]">{title}</h2>
        <div  className="flex flex-row justify-between  gap-3" >
          <p className="text-[12px]">{city}</p>
          <span className="text-[12px]" >
            {price}
          </span>
        </div>
      </article>
    </Link>
  );
}
