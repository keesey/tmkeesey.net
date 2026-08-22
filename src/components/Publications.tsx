import type { Publication as PublicationType } from "@/types/cv";
import { Publication } from "@/components/Publication";

interface PublicationsProps {
  items: PublicationType[];
}

export function Publications({ items }: PublicationsProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Publication key={`${item.year}-${item.title}`} publication={item} />
      ))}
    </div>
  );
}
