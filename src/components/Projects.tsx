import type { Project as ProjectType } from "@/types/cv";
import { HtmlContent, TagList } from "@/components/ui";

interface ProjectsProps {
  items: ProjectType[];
}

export function Projects({ items }: ProjectsProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <article key={item.name} className="space-y-2">
          <h3 className="text-base font-semibold">
            <a
              href={item.url}
              className="text-stone-900 underline decoration-stone-300 underline-offset-2 hover:decoration-stone-500"
            >
              {item.name}
            </a>
            <span className="ml-2 text-sm font-normal text-stone-500">
              {item.type}
            </span>
          </h3>

          <HtmlContent
            html={item.description}
            as="p"
            className="text-sm text-stone-700"
          />

          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {item.components.map((component) => (
              <li key={component.url}>
                <a
                  href={component.url}
                  className="text-stone-700 underline decoration-stone-300 underline-offset-2 hover:decoration-stone-500"
                >
                  {component.name}
                </a>
              </li>
            ))}
          </ul>

          <div>
            <span className="text-xs font-semibold tracking-wide text-stone-500 uppercase">
              Technologies
            </span>
            <TagList items={item.technologies} />
          </div>

          {item.footnote && (
            <p className="text-xs text-stone-500">* {item.footnote}</p>
          )}
        </article>
      ))}
    </div>
  );
}
