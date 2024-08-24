"use client";

import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

export const Search = () => {
  return (
    <>
      <DocSearch appId={""} apiKey={""} indexName={""} />
    </>
  );
};
