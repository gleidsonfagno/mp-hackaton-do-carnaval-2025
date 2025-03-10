// import { Detail } from "@/components/layouts/detail";
"user client";
// import axios from "axios";
import Link from "next/link";

export default async function Details({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const bloco_id = (await params).id;

  // Fazendo a requisição para obter os blocos da API
  const response = await fetch(
    `https://apis.codante.io/api/bloquinhos2025/agenda`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar dados da API");
  }

  const data = await response.json();

  // Filtrando o bloco pelo ID correto
  const bloco = data.data.find(
    (bloco: { id: number }) => bloco.id === Number(bloco_id)
  );

  // Se não encontrou o bloco, retorna erro
  if (!bloco) {
    return <p>Bloco não encontrado.</p>;
  }

  console.log(bloco)

  // console.log((await params).id)
  return (
    <div>
      <p>{bloco.id} </p>
      <Link rel="stylesheet" href="/">
        voltar
      </Link>

      <article className="flex flex-col gap-8 mb-">
        <h2 className="text-4xl text-orange-600 font-semibold">
          {bloco?.title}
        </h2>
        <p className="text-[#616161] text-[16px] font-medium">
          {bloco?.description}
        </p>

        <div className="description-addres flex flex-row gap-5">
          <span className="text-[#616161] text-[16px] font-medium">
            {bloco?.complete_address}
          </span>

          <span className="text-[#616161] text-[16px] font-medium">
            {bloco?.date_time}
          </span>

          <span className="text-[#616161] text-[16px] font-medium">
            {bloco?.price}
          </span>
        </div>

        <a href="" className="text-[#2564CF] text-[16px] font-medium">
          {bloco?.event_url}
        </a>
      </article>
      {/* <Detail /> */}
    </div>
  );
}
