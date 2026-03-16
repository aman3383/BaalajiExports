import React from 'react';
import type { IScriptTag } from '@/lib/utils/seo';

interface JsonLdScriptsProps {
  scriptTags: IScriptTag[];
}

/**
 * Renders JSON-LD script tags for structured data (SEO).
 * Only outputs tags with type application/ld+json and valid content.
 */
export default function JsonLdScripts({ scriptTags }: JsonLdScriptsProps) {
  if (!scriptTags?.length) return null;

  return (
    <>
      {scriptTags.map((tag, i) => {
        if (tag.type !== 'application/ld+json' || !tag.content?.trim()) return null;
        try {
          JSON.parse(tag.content);
        } catch {
          return null;
        }
        return (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: tag.content }}
          />
        );
      })}
    </>
  );
}
