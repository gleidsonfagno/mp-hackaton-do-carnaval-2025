// import { Detail } from "@/components/layouts/detail";
// "user client"
import Link from "next/link";

export default async function Details() {



  return (
    <div>
        <p>paramentros  </p>
      <Link rel="stylesheet" href="/">
        voltar
      </Link>

      <article className="flex flex-col gap-8 mb-">
        <h2 className="text-4xl text-orange-600 font-semibold">
          9º Ensaio da Bateria Emilias e Viscondes
        </h2>
        <p className="text-[#616161] text-[16px] font-medium">
          Juntos, vamos fazer do Carnaval 2025 uma festa inesquecível para a
          criançada! Com muita música, dança, fantasia e alegria, vamos celebrar
          a magia do Carnaval e criar memórias que vão durar para sempre!
        </p>

        <div className="description-addres">
          <span className="text-[#616161] text-[16px] font-medium">
            Rua General Jardim, 485, Vila Buarque - São Paulo - SP
          </span>

          <span className="text-[#616161] text-[16px] font-medium">
            2025-02-28T18
          </span>

          <span className="text-[#616161] text-[16px] font-medium">Grátis</span>
        </div>

        <a href="" className="text-[#2564CF] text-[16px] font-medium">
          https://www.instagram.com/p/DFGibHlxQVr/?igsh=dzlpdHNvM29uNzNi
        </a>
      </article>
      {/* <Detail /> */}
    </div>
  );
}
