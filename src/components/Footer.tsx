import type { Person } from "@/types/cv";

interface FooterProps {
  person: Person;
}

export function Footer({ person }: FooterProps) {
  const fullName = `${person.name.given} ${person.name.family}`;

  return (
    <footer className="mt-12 border-t border-stone-300 pt-4 pb-16">
      <div className="grid gap-2 text-sm text-stone-600 sm:grid-cols-3 sm:gap-4">
        <span className="hidden sm:block">{fullName}</span>
        <span className="sm:text-center">
          {person.address.locality}, {person.address.region}
        </span>
        <span className="sm:text-right">
          <a
            href={`mailto:${person.email}`}
            className="text-stone-700 underline decoration-stone-300 underline-offset-2 hover:decoration-stone-500"
          >
            <em className="not-italic">{person.email}</em>
          </a>
        </span>
      </div>
    </footer>
  );
}
