"use client"

export function Order() {
  return(
    <select name="" id="order"  className="p-2.5  border border-[#666666] text-[#666666] w-fit ">
    <option value="" disabled >
      Ordena os resultados
    </option>
    <option value="asc">(mais antigos primeiro)</option>
    <option value="desc">(mais recentes primeiro)</option>
  </select>
  )
}
