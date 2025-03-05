import { Form } from "@/components/form";
import { Card } from "@/components/layouts/card";

import Image from "next/image";

const data = [
  {
    id: 1,
    title: "9º Ensaio da Bateria Emilias e Viscondes",
    description:
      "Juntos, vamos fazer do Carnaval 2025 uma festa inesquecível para a criançada! Com muita música, dança, fantasia e alegria, vamos celebrar a magia do Carnaval e criar memórias que vão durar para sempre!",
    date_time: "2025-02-28T18:00:00.000Z",
    address: "Rua General Jardim, 485",
    complete_address: "Rua General Jardim, 485,  Vila Buarque - São Paulo - SP",
    city: "São Paulo",
    neighborhood: "Vila Buarque",
    price: "Grátis",
    event_url: "https://www.instagram.com/p/DFGibHlxQVr/?igsh=dzlpdHNvM29uNzNi",
  },
  {
    id: 2,
    title: "Banda do Trem Elétrico",
    description:
      "Desde 1984 O Bloco Banda do Trem Elétrico eletrifica as ruas de São Paulo com seu desfile carnavalesco. O Bloco arrasta foliões em um verdadeiro show de alegria O Bloco está previsto para desfilar em Consolação, dia 28/02/25 com início da concentração às 18:00 e dispersão às 23:00.  O trajeto será: R. Augusta, R. Luiz Coelho, R. Martins Fontes, R. Cel. Xavier de Toledo, Praça Ramos de Azevedo.",
    date_time: "2025-02-28T21:00:00.000Z",
    address: "R. Augusta",
    complete_address: "R. Augusta,  Consolação - São Paulo - SP",
    city: "São Paulo",
    neighborhood: "Consolação",
    price: "Grátis",
    event_url: "",
  },
];

export default function Home() {
  return (
    <>
      <Form />

      <section>
        <div className="flex flex-row justify-between items-center mb-8">
          <p className=" text-2 max-sm:text-[12px]">
            Foram encontrado 10 bloco(s) em 1 página(s)
          </p>

          <nav className="flex flex-row gap-2 items-center ">
            <button>
              <Image
                src="/keyboard_arrow_left_24px_outlined.svg"
                alt="keyboard_arrow_left_24px_outlined.svg"
                width={20}
                height={20}
              />
            </button>
            <span className="px-2 bg-orange-500 border border-black">1</span>
            <button>
              <Image
                src="/keyboard_arrow_right_24px_outlined.svg"
                alt="keyboard_arrow_right_24px_outlined.svg"
                width={20}
                height={20}
              />
            </button>
          </nav>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((blocos) => (
            <Card
              key={blocos.id}
              id={blocos.id}
              title={blocos.title}
              address={blocos.address}
              price={blocos.price}
            />
          ))}
        </div>
      </section>
    </>
  );
}
