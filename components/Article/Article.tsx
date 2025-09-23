import React from 'react';
import { Alert } from '@trussworks/react-uswds';

export interface ArticleProps {
  title: string;
  author?: string;
  date?: string;
  children: React.ReactNode;
}

export const Article: React.FC<ArticleProps> = ({ title, author, date, children }) => (
  <article className="storybook-article">
    <Alert type="info" heading="Notice" headingLevel="h3">
      This is an example of a USWDS informational alert above the article header.
    </Alert>
    <header>
      <h1>{title}</h1>
      {(author || date) && (
        <p className="storybook-article-meta">
          {author && <span>By {author}</span>}
          {author && date && ' | '}
          {date && <span>{date}</span>}
        </p>
      )}
    </header>
    <section>
      {children}
    </section>
  </article>
);
