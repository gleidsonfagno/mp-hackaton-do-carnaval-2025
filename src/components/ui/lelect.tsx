// "use client";

export function Select() {
  return (
    <select
      name="city"
      id="city"
      
      className="p-2.5  border border-[#666666] text-[#666666] "
    >
      <option value="" disabled>
        Selecione uma cidade
      </option>
      <option value="sao-paulo">São Paulo</option>
      <option value="rio-de-janeiro">Rio de Janeiro</option>
      <option value="belo-horizonte">Belo Horizonte</option>
      <option value="salvador">Salvador</option>
      <option value="recife-olinda">Recife e Olinda</option>
      <option value="brasilia">Brasília</option>
      <option value="fortaleza">Fortaleza</option>
      <option value="porto-alegre">Porto Alegre</option>
    </select>
  );
}
