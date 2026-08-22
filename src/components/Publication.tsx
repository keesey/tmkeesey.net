import type { Publication as PublicationType } from "@/types/cv";
import { HtmlContent } from "@/components/ui";

interface PublicationProps {
  publication: PublicationType;
  nested?: boolean;
}

function PublicationIdentifiers({ item }: { item: PublicationType }) {
  if (!item.doi && !item.isbn13 && !item.isbn10 && !item.asin) {
    return null;
  }

  return (
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
  );
}

export function Publication({
  publication: item,
  nested = false,
}: PublicationProps) {
  const Tag = nested ? "span" : "article";

  return (
    <Tag
      className={nested ? undefined : "text-sm leading-relaxed text-stone-700"}
    >
      {!nested && (item.authors || item.year != null) && (
        <>
          {item.authors && (
            <HtmlContent
              html={item.authors}
              className="font-medium tracking-wide text-stone-800 uppercase"
            />
          )}
          {item.authors && item.year != null && " "}
          {item.year != null && (
            <>
              (<span>{item.year}</span>).{" "}
            </>
          )}
        </>
      )}
      {item.journal ? (
        <>
          {item.title && (
            <>
              <span className="font-medium text-stone-900">{item.title}</span>
              .{" "}
            </>
          )}
          <span className="italic">{item.journal}</span>{" "}
          <span className="font-semibold">{item.volume}</span>
          {item.issue && (
            <>
              (<span>{item.issue}</span>)
            </>
          )}
          :<span>{item.pages?.join("–")}</span>.
        </>
      ) : item.in ? (
        <>
          {item.title && (
            <>
              <span className="font-medium text-stone-900">{item.title}</span>
              .{" "}
            </>
          )}
          {item.pages && (
            <>
              <span>Pages {item.pages.join("–")} in{" "}</span>
            </>
          )}
          <Publication publication={item.in} nested />
        </>
      ) : (
        <>
          {item.title && (
            <>
              <span className="italic">{item.title}</span>.{" "}
            </>
          )}
          {item.publisher && (
            <>
              <span>{item.publisher}</span>.{" "}
            </>
          )}
          {item.pageCount && (
            <>
              <span>{item.pageCount} pages.</span>{" "}
            </>
          )}
        </>
      )}{" "}
      <PublicationIdentifiers item={item} />
    </Tag>
  );
}
