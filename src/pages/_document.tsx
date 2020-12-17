import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

import { renderSnippet } from "@/utils/segment";

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* eslint-disable-next-line react/no-danger */}
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
        </Head>
        <body className="text-white bg-white dark:bg-black dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
