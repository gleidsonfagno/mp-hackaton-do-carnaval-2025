"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function Order()

{
   const searchParams = useSearchParams()
   const pathname = usePathname()
   const {replace } = useRouter()

   function handleSelectOrder(event: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams)

    const selectOrder = event.currentTarget.value

    if(selectOrder){
      params.set("sort", selectOrder)
    } else{
      params.delete("sort")
    }

    // essa vaiser a prametroo para a busca /?sort/asc ex
    replace(`${pathname}?${params.toString()}`)

   }

  return(
    <select  className="p-2.5  border border-[#666666] text-[#666666] w-fit "
    onChange={handleSelectOrder}
    // isso e para quando seleciona fica na opçao
    value={searchParams.get("sort") || ""}
    
    >
    <option value="" disabled >
      Ordena os resultados
    </option>
    <option value="">Limpar filtro</option>
    <option value="asc">(mais antigos primeiro)</option>
    <option value="desc">(mais recentes primeiro)</option>
  </select>
  )
}
