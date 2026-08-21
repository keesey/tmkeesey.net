import type { Education as EducationType } from "@/types/cv";

interface EducationProps {
  items: EducationType[];
}

export function Education({ items }: EducationProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article key={item.organization}>
          <h3 className="text-base font-semibold text-stone-900">
            {item.organization}{" "}
            <span className="text-sm font-normal text-stone-500">
              Graduated {item.graduationQualifier} {item.graduation}
            </span>
          </h3>
          <p className="text-sm text-stone-700">{item.degree}</p>
        </article>
      ))}
    </div>
  );
}
