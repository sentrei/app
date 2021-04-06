import { DefaultSeo } from "next-seo";
import * as React from "react";

export default function SeoRoot(): JSX.Element {
  return (
    <DefaultSeo
      noindex={false}
      nofollow={false}
      title="Build apps fast."
      titleTemplate="Sentrei | %s"
      description="Jamstack backend on the edge."
      openGraph={{
        images: [
          {
            alt: "Sentrei Logo Image",
            height: 500,
            url: "https://www.sentrei.com/assets/logo.png",
            width: 500,
          },
        ],
        locale: "en_US",
        site_name: "sentrei.com",
        type: "website",
        url: "https://sentrei.com",
      }}
      twitter={{
        cardType: "summary_large_image",
        handle: "@sentrei_com",
        site: "@sentrei_com",
      }}
    />
  );
}
