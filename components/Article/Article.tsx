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
    <Alert type="info" heading="" headingLevel="h3" className="margin-y-2">
      This is an example of an embedded USWDS Trussworks component.
    </Alert>
    <section>
      {children}
    </section>
  </article>
);
