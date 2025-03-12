import Image from "next/image";

export interface CardProps {
  id: number;
  title: string;
  description: string;
  city: string;
  price: string;
  date_time: Date;
  complete_address: string;
}

export function Card({
  title,
  description,
  city,
  price,
  date_time,
  complete_address,
}: CardProps) {
  return (
    <div className="flex flex-col w-full  min-h-28">
      <article className="flex flex-col p-2.5 h-full  gap-4 justify-between  bg-amber-400">
        <h2 className="text-4xl font-semibold text-orange-600">{title}</h2>

        <p className="flex  gap-2.5 text-zinc-800 text-[20px] font-medium">
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

          <p className="flex  gap-2.5 text-zinc-800 text-[20px] font-medium">
            <Image src="/city.svg" alt="link.svg" width={24} height={24} />
            {city}
          </p>

        <p className="flex  gap-2.5 text-zinc-800 text-[20px] font-medium">
          <Image src="/address.svg" alt="link.svg" width={24} height={24} />
          {complete_address}
        </p>

        <p className="flex gap-2.5 p-2.5 rounded-md bg-[#2E8E00] w-fit text-white text-[20px] font-medium">
          <Image src="/price.svg" alt="link.svg" width={24} height={24} />
          {price ? price : "Preço indiponível"}
        </p>

        <span className="flex  gap-2.5 text-zinc-800 text-[20px] font-medium">
          <Image src="/data.svg" alt="link.svg" width={24} height={24} />

          {date_time
            ? new Date(date_time).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Data não disponível"}
        </span>
      </article>
    </div>
  );
}
