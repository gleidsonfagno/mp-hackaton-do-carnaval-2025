
import { CardContent } from "@/components/card-contet";
import { Form } from "@/components/form";
import axios from "axios";
// import { Card } from "@/components/layouts/card";

import Image from "next/image";

type ComponentPrps = {
  searchParams?: { city?: string; search?: string };
};

export default async function Home({ searchParams }: ComponentPrps) {
  //  os objetos searchParams e params são Promises que precisam ser aguardadas antes de acessar suas propriedades
  const resolvedSearchParams  =  await searchParams

  const response = await axios.get(
    "https://apis.codante.io/api/bloquinhos2025/agenda/",
    {
      params: {
        city: resolvedSearchParams?.city, //?city=Brasília
        search: resolvedSearchParams?.search, //?search=Zumbi
      },
    }
  );
  // https://apis.codante.io/api/bloquinhos2025/agenda?search=Zumbi

  // console.log(searchParams)

  const agendas = response.data.data;
  const blocos = response.data.meta;
  // console.log(agendas)
  // console.log(blocos)

  return (
    <>
      <Form />

      <section>
        <div className="flex flex-row justify-between items-center mb-8">
          <p className=" text-2 max-sm:text-[12px]">
            Foram encontrado {blocos.to} bloco(s) em {blocos.current_page}{" "}
            página(s) de um total de {blocos.total}
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

        <CardContent agendas={agendas} />
      </section>
    </>
  );
}
