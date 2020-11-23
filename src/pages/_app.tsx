/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

import "@/styles/index.css";
import AppRoot from "@/components/AppRoot";
import SeoRoot from "@/components/SeoRoot";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <SeoRoot />
      <RecoilRoot />
      <SWRConfig
        value={{
          onError: (err, key) => {
            console.error(`err: ${err}, key: ${key}`);
          },
          onErrorRetry: (err, key) => {
            console.error(`err: ${err}, key: ${key}`);
          },
          onLoadingSlow: (key) => {
            console.log(`key:${key}`);
          },
          onSuccess: (data, key) => {
            console.log(`data: ${data}, key: ${key}`);
          },
        }}
      >
        <AppRoot>
          <Component {...pageProps} />
        </AppRoot>
      </SWRConfig>
    </>
  );
};

export default CustomApp;
