"use client"

import { Date } from "./ui/date";
import { City } from "./ui/city";
import { Order } from "./ui/order";
import { SearchIput } from "./ui/search";

export function Form() {
  return (
    <form action="" className="flex flex-col gap-16 mb-8 max-md:gap-4">
      <fieldset className="flex flex-row justify-between gap-2 max-md:flex-col ">
        <SearchIput />
        <City />
      </fieldset>

      <fieldset className="flex flex-row justify-between gap-2 max-md:flex-col ">
        <Date />

        <Order />
      </fieldset>
    </form>
  );
}
