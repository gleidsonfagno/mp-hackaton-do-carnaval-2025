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
          city={agenda.city}
          date_time={agenda.date_time}
          price={agenda.price === "" ? "Grátis" : agenda.price}
        />
      ))}
    </div>
  );
}
