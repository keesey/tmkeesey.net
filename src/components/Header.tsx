import Image from "next/image";
import type { Person } from "@/types/cv";

interface HeaderProps {
  person: Person;
}

export function Header({ person }: HeaderProps) {
  const fullName = `${person.name.given} ${person.name.family}`;

  return (
    <header className="mb-8 flex flex-col gap-6 border-b border-stone-300 pb-8 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          {fullName}
        </h1>
        <p className="mt-1 text-lg text-stone-600 italic">{person.tagline}</p>
      </div>
      <div className="shrink-0">
        <Image
          src="/images/portrait.svg"
          alt={`Portrait of ${fullName}`}
          width={146}
          height={162}
          className="border border-stone-300 bg-stone-100 object-cover"
          priority
        />
      </div>
    </header>
  );
}
