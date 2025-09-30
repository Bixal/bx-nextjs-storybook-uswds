import React from "react";
import { Link } from "@trussworks/react-uswds";

export interface ArticleProps {
  title: string;
  link: string;
  author?: string;
  date?: string;
  children: React.ReactNode;
}

export const Article: React.FC<ArticleProps> = ({
  title,
  link,
  author,
  date,
  children,
}) => (
  <article className="storybook-article margin-y-4">
    <header>
      <h2>
        <Link href={link} className="no-underline">
          {title}
        </Link>
      </h2>
      {(author || date) && (
        <p className="storybook-article-meta">
          {author && <span>By {author}</span>}
          {author && date && " | "}
          {date && <span>{date}</span>}
        </p>
      )}
    </header>
    <section>{children}</section>
  </article>
);
