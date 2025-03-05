import { Card } from "@/components/layouts/card";
import { Navbar } from "@/components/layouts/navbar";
import { Date } from "@/components/ui/date";
import { City } from "@/components/ui/lelect";
import { Order } from "@/components/ui/order";
import { Search } from "@/components/ui/search";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" max-w-[913px] m-auto p-4">
      <Navbar />

      <form action="" className="flex flex-col gap-16 mb-8 max-md:gap-4">
        <fieldset className="flex flex-row justify-between gap-2 max-md:flex-col ">
          <Search />
          <City />
        </fieldset>

        <fieldset className="flex flex-row justify-between gap-2 max-md:flex-col ">
          <Date />

          <Order />
        </fieldset>
      </form>

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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /><Card />
        </div>
      </section>
    </main>
  );
}
