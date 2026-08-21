import type { Publication as PublicationType } from "@/types/cv";
import { HtmlContent } from "@/components/ui";

interface PublicationsProps {
  items: PublicationType[];
}

export function Publications({ items }: PublicationsProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const key = `${item.year}-${item.title}`;

        return (
          <article key={key} className="text-sm leading-relaxed text-stone-700">
            <HtmlContent
              html={item.authors}
              className="font-medium tracking-wide text-stone-800 uppercase"
            />{" "}
            (<span>{item.year}</span>).{" "}
            {item.journal ? (
              <>
                <span className="font-medium text-stone-900">{item.title}</span>.{" "}
                <span className="italic">{item.journal}</span>{" "}
                <span className="font-semibold">{item.volume}</span>
                {item.issue && (
                  <>
                    (<span>{item.issue}</span>)
                  </>
                )}
                :<span>{item.pages?.join("–")}</span>.
              </>
            ) : (
              <>
                <span className="italic">{item.title}</span>.{" "}
                <span>{item.publisher}</span>.{" "}
                <span>{item.pageCount} pages.</span>
              </>
            )}{" "}
            {(item.doi || item.isbn13 || item.isbn10 || item.asin) && (
              <span className="italic">
                {item.doi && (
                  <a
                    href={`https://doi.org/${item.doi}`}
                    className="text-stone-700 underline decoration-stone-300 underline-offset-2 hover:decoration-stone-500"
                  >
                    DOI: {item.doi}
                  </a>
                )}
                {item.doi && (item.isbn13 || item.isbn10 || item.asin) && "; "}
                {item.isbn13 && <span>ISBN-13: {item.isbn13}</span>}
                {item.isbn13 && (item.isbn10 || item.asin) && "; "}
                {item.isbn10 && <span>ISBN-10: {item.isbn10}</span>}
                {item.isbn10 && item.asin && "; "}
                {item.asin && (
                  <a
                    href={`https://www.amazon.com/dp/${item.asin}`}
                    className="text-stone-700 underline decoration-stone-300 underline-offset-2 hover:decoration-stone-500"
                  >
                    ASIN: {item.asin}
                  </a>
                )}
              </span>
            )}
          </article>
        );
      })}
    </div>
  );
}
