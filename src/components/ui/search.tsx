import Image from "next/image";

export function Search() {
  return (
    <div className="flex flex-row w-full max-w-lg border border-[#666666] text-[#666666]">
      <input
        className="w w-full p-2.5 outline-none "
        type="text"
        placeholder="Digite o que  você  procura"
        id="search"
        name=""
      />

      <span className="flex items-center">
        <Image src="/search.png" alt="search" width={20} height={20} />
      </span>
    </div>
  );
}
