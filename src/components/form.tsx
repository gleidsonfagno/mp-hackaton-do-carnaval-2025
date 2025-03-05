import { Date } from "./ui/date";
import { City } from "./ui/lelect";
import { Order } from "./ui/order";
import { Search } from "./ui/search";

export function Form() {
  return (
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
  );
}
