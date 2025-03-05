
import Image from "next/image";

export default async function Bloco({
    params: { id },
}: {
    params: { id: string}
}) {
    // const 

    console.log(id)
  return (
    <>
      <section>
        <div className="flex flex-row justify-between items-center mb-8">
          <p className=" text-2 max-sm:text-[12px]">
            Foram encontrado 10 bloco(s) em 1 página(s)
          </p>

          <nav className="flex flex-row gap-2 items-center ">
            <button>
              <Image
                src="/keyboard_arrow_left_24px_outlined.svg"
                alt="keyboard_arrow_left_24px_outlined.svg"
                width={20}
                height={20}
              />
            </button>
            <span className="px-2 bg-orange-500 border border-black">1</span>
            <button>
              <Image
                src="/keyboard_arrow_right_24px_outlined.svg"
                alt="keyboard_arrow_right_24px_outlined.svg"
                width={20}
                height={20}
              />
            </button>
          </nav>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        </div>
      </section>
    </>
  );
}
