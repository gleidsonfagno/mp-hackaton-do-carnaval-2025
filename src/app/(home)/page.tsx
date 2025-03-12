import { CardContent } from "@/components/card-contet";
import { Form } from "@/components/form";
import { Pagination } from "@/components/layouts/pagination";
import axios from "axios";

// o searchParms e do tipo Promise
type ComponentProps = {
  searchParams?: Promise<{
    city?: string;
    search?: string;
    date?: string;
    sort?: string;
    page?: string;
  }>;
};

export default async function Home({ searchParams }: ComponentProps) {
  //os objetos searchParams e params são Promises que precisam ser aguardadas antes de acessar suas propriedades
  const resolvedSearchParams = await searchParams;

  const response = await axios.get(
    "https://apis.codante.io/api/bloquinhos2025/agenda/",
    {
      params: {
        city: resolvedSearchParams?.city, //?city=Brasilia
        search: resolvedSearchParams?.search, //?search=Zumbi
        date: resolvedSearchParams?.date, //?date=2025-03-01
        sort: resolvedSearchParams?.sort, //?sort=asc
        page: resolvedSearchParams?.page,
      },
    }
  );

  const agendas = response.data.data;
  const blocos = response.data.meta
  const lastPage = blocos.last_page

  // adicionano dentro do objeto links um id para cada item 
  const links = response.data.meta.links.map((
    link: { url: string; label: string; active: boolean }[], // tipando os dados que tem na API
    index: number) => 
  ({
    ...link,
    id: String(index),
  }));
  

  return (
    <>
      <Form />

      <section>
        <div className="flex flex-col justify-between items-center gap-4 mb-8  lg:flex-row">
          <p className=" text-2 max-sm:text-[12px]">
            Foram encontrado {blocos.to} bloco(s) em {blocos.current_page} página(s) de um total de {blocos.total}
          </p>
        <Pagination links={links} lastPage={lastPage} />
        </div>

        <CardContent agendas={agendas} />
      </section>
    </>
  );
}
