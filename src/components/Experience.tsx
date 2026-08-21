import type { Experience as ExperienceType } from "@/types/cv";
import { HtmlContent, TagList } from "@/components/ui";

interface ExperienceProps {
  items: ExperienceType[];
}

export function Experience({ items }: ExperienceProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => {
        const key = `${item.title}-${item.months.join("-")}-${item.organization ?? item.location}`;

        return (
          <article key={key} className="border-l-2 border-stone-200 pl-4">
            <div className="mb-2 grid gap-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              <h3
                className={`text-base font-semibold text-stone-900 ${item.organization ? "lg:col-span-1" : "sm:col-span-2 lg:col-span-2"}`}
              >
                {item.title}
              </h3>
              {item.organization && (
                <HtmlContent
                  html={item.organization}
                  className="text-stone-700 italic lg:col-span-1"
                />
              )}
              <span className="text-sm text-stone-600 lg:col-span-1">
                {item.location}
              </span>
              <span className="text-sm text-stone-500 lg:col-span-1 lg:text-right">
                {item.months.join("–")}
              </span>
            </div>

            {item.responsibilities && (
              <ul className="mb-2 list-disc space-y-1 pl-5 text-sm text-stone-700">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            )}

            {item.technologies && (
              <div>
                <span className="text-xs font-semibold tracking-wide text-stone-500 uppercase">
                  Technologies
                </span>
                <TagList items={item.technologies} />
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
