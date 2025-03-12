import { Navbar } from "@/components/layouts/navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" max-w-[1300px] m-auto p-4 ">
      <Navbar />
      <section >{children}</section>
    </main>
  );
}
