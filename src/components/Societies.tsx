import type { Society as SocietyType } from "@/types/cv";

interface SocietiesProps {
  items: SocietyType[];
}

export function Societies({ items }: SocietiesProps) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <h3 key={item.url} className="text-sm font-medium">
          <a
            href={item.url}
            className="text-stone-900 underline decoration-stone-300 underline-offset-2 hover:decoration-stone-500"
          >
            {item.name}
          </a>{" "}
          <span className="font-normal text-stone-600">({item.title})</span>
        </h3>
      ))}
    </div>
  );
}
