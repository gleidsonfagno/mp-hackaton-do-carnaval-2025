import { Agendas } from "./lib/types";
import { Card } from "./layouts/card";

type AgendaProps = {
  agendas: Agendas[];
};

export function CardContent({ agendas }: AgendaProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {agendas.map((agenda) => (
        <Card
          key={agenda.id}
          id={agenda.id}
          title={agenda.title}
          address={agenda.address}
          price={agenda.price}
        />
      ))}
    </div>
  );
}
