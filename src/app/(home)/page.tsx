import { CardContent } from "@/components/card-contet";
import { Form } from "@/components/form";
import axios from "axios";
// import { Card } from "@/components/layouts/card";

import Image from "next/image";


export default  async function Home() {
  const response =  await axios.get("https://apis.codante.io/api/bloquinhos2025/agenda/")

  const agendas = response.data.data
  console.log(agendas)
  
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

        <CardContent 
        agendas={agendas}
        />

       
      </section>
    </>
  );
}
