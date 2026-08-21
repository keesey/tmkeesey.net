import type { Person } from "@/types/cv";

interface ContactProps {
  person: Person;
}

export function Contact({ person }: ContactProps) {
  return (
    <address className="not-italic">
      <div className="grid gap-2 text-sm text-stone-700 sm:grid-cols-3 sm:gap-4">
        <span>
          {person.address.locality}, {person.address.region}
        </span>
        <span className="hidden text-center sm:block">
          <em className="not-italic">{person.website}</em>
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
    </address>
  );
}
