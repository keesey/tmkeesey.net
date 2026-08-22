import type { ReactNode } from "react";

interface HtmlContentProps {
  html: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}

export function HtmlContent({
  html,
  as: Tag = "span",
  className,
}: HtmlContentProps) {
  if (!html) {
    return null;
  }

  return (
    <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  hideTitle?: boolean;
}

export function Section({ id, title, children, hideTitle }: SectionProps) {
  return (
    <section id={id} className="mb-8">
      <h2
        className={`mb-4 border-b border-stone-300 pb-1 text-lg font-semibold tracking-wide text-stone-800 uppercase ${hideTitle ? "sr-only" : ""}`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

interface TagListProps {
  items: string[];
}

export function TagList({ items }: TagListProps) {
  return (
    <ul className="mt-2 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-600"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
