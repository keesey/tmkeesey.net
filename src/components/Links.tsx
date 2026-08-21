import type { Link as LinkType } from "@/types/cv";
import { HtmlContent } from "@/components/ui";

interface LinksProps {
  items: LinkType[];
}

export function Links({ items }: LinksProps) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.url} className="text-sm">
          <a
            href={item.url}
            className="text-stone-900 underline decoration-stone-300 underline-offset-2 hover:decoration-stone-500"
          >
            <HtmlContent html={item.title} />
          </a>{" "}
          {item.type && (
            <span className="text-stone-500">({item.type})</span>
          )}
        </li>
      ))}
    </ul>
  );
}
