"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
 

export function City() {

  
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()

  // Pegando a cidade da URL para deixar  o  valor lecionado nao mudar mesmo com reload
  const selectedCity = searchParams.get("city") || "";

  function handleChangeFillterCity(event: React.ChangeEvent<HTMLSelectElement>)  {
    const params = new URLSearchParams(searchParams)

    const selectCity = event.currentTarget.value

    if(selectCity){
      params.set("city", selectCity)
    }else {
      params.delete("search")
    }

    replace(`${pathname}?${params.toString()}`, {scroll: false})
  }

  return (
    <select
      className="p-2.5  border border-[#666666] text-[#666666] w-fit"
      onChange={handleChangeFillterCity}
      value={selectedCity}
    >
      <option value="" disabled>
        Selecione uma cidade
      </option>
      <option value="São Paulo">São Paulo</option>
      <option value="Rio de Janeiro">Rio de Janeiro</option>

      <option value="Belo Horizonte">Belo Horizonte</option>
      <option value="Salvador">Salvador</option>
      <option value="Recife e Olinda">Recife e Olinda</option>
      <option value="Brasilia">Brasília</option>
      <option value="Fortaleza
">Fortaleza</option>
      <option value="Porto Alegre">Porto Alegre</option>
    </select>
  );
}
