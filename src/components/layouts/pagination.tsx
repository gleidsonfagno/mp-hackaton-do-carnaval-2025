"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PaginationProps } from "../lib/types";

export function Pagination({ links, lastPage }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleClickPage(pageNumber: number) {
    const params = new URLSearchParams(searchParams);
    
    console.log(pageNumber)
    
    if (pageNumber > 1) {
      if (pageNumber > lastPage) {
        params.set("page", lastPage.toString())
      }
      else {
        params.set("page", pageNumber.toString());

      }
    } else {
      params.delete("page");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <nav className="flex flex-row gap-2 items-center justify-center mt-7">
      
      <button 
      // se tiver na pagina 1 na pode ir para pagina 0 curso fica nao deixamos clicado
      className={`${links[0].url ? "cursor-pointer": "cursor-auto text-zinc-400 bg" }`}
      onClick={
        () => handleClickPage(Number(searchParams.get("page") || 1) - 1)
      }
      >
      Anterior
      </button>

      {links.map((link) => {
        // verificamos se a label tem Anterior e Próximo e removemos o mesmo vale para os ... e removemos pra deixar somente a label com os numeros.
        if (link.label.includes("Anterior") || link.label.includes("Próximo")) {
          return null;
        }
        if (link.label === "...") {
          return null 
        }
        // se nao retoona nada nao ira aparecer
        return (
          <button
              key={link.id}
              // o botao que tiver o activer true vai ficar com bg orange
              className={
                link?.active
                  ? "px-2 bg-orange-500 border border-black active:bg-amber-200 cursor-pointer"
                  : "px-2 text-black cursor-pointer border border-black"
              }
              // para inserir o html que tem na API que as setas >>
              dangerouslySetInnerHTML={{ __html: link.label }}
              onClick={() => handleClickPage(Number(link.label))}
            ></button>
        )
      })}

      <button
       className={`${links[links.length -1].url ? "cursor-pointer": "cursor-auto text-zinc-400 bg" }`}
      onClick={
        () => handleClickPage(Number(searchParams.get("page") || 1) +1)
      }
      >
        Próximo
      </button>

    </nav>
  );
}
