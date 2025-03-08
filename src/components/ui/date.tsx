"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function Date() {
    const searchParams  = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()

    function handleChangeFilterDate(event: React.ChangeEvent<HTMLSelectElement>) {
        const params = new URLSearchParams(searchParams )

        const selectDate = event.currentTarget.value
        

        if(selectDate) {
            params.set("date", selectDate)
        }else {
            params.delete("date")
        }


        replace(`${pathname}?${params.toString()}`)


    }
    return(
        <select className="p-2.5  border border-[#666666] text-[#666666] outline-none w-fit max-sm:w-fit 
        "
        onChange={handleChangeFilterDate}
        value={searchParams.get("date") || ""}
        >
        <option value="" disabled >Escolha data</option>
        <option value="">Limpar filtro</option>
        <option value="2025-02-28">Sexta-feira, 28 de fevereiro</option>
        <option value="2025-03-01">Sábado, 1º de março</option>
        <option value="2025-03-02">Domingo, 2 de março</option>
        <option value="2025-03-03">Segunda-feira, 3 de março</option>
        <option value="2025-03-04">Terça-feira de Carnaval, 4 de março</option>
        <option value="2025-03-05">Quarta-feira de Cinzas, 5 de março</option>
    </select>
    )
}