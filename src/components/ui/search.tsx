import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

export function SearchIput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // do evendo o que digitado estamos pegando a valor toda vez que e digitado alguma coisa
  // com estamos usando o use-debouce a cada 500 mili segundos ele chama a API
  const handleChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // a api que do navegador que pega o parametro
      const params = new URLSearchParams(searchParams);

      const searchString = event.target.value;
      // essa parte vaz a verficaçao se tem alguma coisa no input se tiver ele seta na url se nao tiver nada ele lipra a url

      if (searchString) {
        params.set("search", searchString);
      } else {
        params.delete("search");
      }

      // vai  setar uma nova novo parametro na url
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 500
  );
  return (
    <div className="flex flex-row w-full max-w-lg border border-[#666666] text-[#666666]">
      <input
        className="w w-full p-2.5 outline-none "
        type="text"
        placeholder="Digite o que  você  procura"
        onChange={handleChange}
        // spellcheck="false"
        data-ms-editor="true"
      />

      <span className="flex items-center">
        <Image src="/search.png" alt="search" width={20} height={20} />
      </span>
    </div>
  );
}
