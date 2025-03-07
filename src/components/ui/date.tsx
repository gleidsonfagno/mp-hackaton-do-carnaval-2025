"use client"

export function Date() {
    return(
        <select name="" id="date" className="p-2.5  border border-[#666666] text-[#666666] outline-none w-fit max-sm:w-[90%] ">
        <option value="" disabled >Escolha data</option>
        <option value="2025-02-28">Sexta-feira, 28 de fevereiro</option>
        <option value="2025-03-01">Sábado, 1º de março</option>
        <option value="2025-03-02">Domingo, 2 de março</option>
        <option value="2025-03-03">Segunda-feira, 3 de março</option>
        <option value="2025-03-04">Terça-feira de Carnaval, 4 de março</option>
        <option value="2025-03-05">Quarta-feira de Cinzas, 5 de março</option>
    </select>
    )
}