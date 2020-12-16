import clsx from "clsx";
import Image from "next/image";

import Pulse from "@/styles/pulse.module.css";

export default function LandingJourney() {
  return (
    <div className="py-12 overflow-hidden bg-white dark:bg-black">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200 dark:text-gray-800"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>
        <div className="relative">
          <div className="sm:text-left md:text-center">
            <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
              Start your Sentrei journey
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 via-red-300 to-yellow-400">
                Lightspeed
              </span>{" "}
              at your fingertips
            </p>
            <p className="max-w-3xl mt-4 text-xl text-gray-500 lg:mx-auto dark:text-gray-400">
              Deploy your entire backend + frontend to the edge in seconds.
              Develop locally, preview on the cloud, and deploy to production
              with confidence. All with batteries included.
            </p>
          </div>
        </div>
        <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-300">
              <span className="text-indigo-500">1.&nbsp;&nbsp;&nbsp;</span>
              Develop with confidence
            </h3>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
              We aim to provide the finest developer experience. We provide a
              dedicated dev environment in the cloud, so that everything is
              managed perfectly. Transition seamlessly from dev to prod.
            </p>
            <dl className="mt-10 space-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                    Built-in authentication
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Nothing new. All batteries included.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                    Custom developing environment in the cloud
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Develop locally while on the cloud.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                    Developer friendly interface
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    We are obsessed with providing the best possible developer
                    experience.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
            <div className="w-4/5 mx-auto transition duration-300 ease-in-out transform bg-gray-600 rounded-md shadow-lg dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-3 lg:mx-0">
              <div className="px-4 py-3 sm:px-6">
                <p className="font-medium leading-6 text-gray-300 text-md dark:text-gray-500">
                  # Install sentrei, and login to your account
                </p>
                <p className="text-gray-100 text-md dark:text-gray-300">
                  <span className="text-yellow-400">~/ $</span> npm install
                  sentrei
                </p>
                <p className="text-gray-100 text-md dark:text-gray-300">
                  <span className="text-yellow-400">~/ $</span> sentrei login
                </p>
                <br />
                <p className="font-medium leading-6 text-gray-300 text-md dark:text-gray-500">
                  # Develop directly from a dev environment in the cloud
                </p>
                <p className="text-gray-100 text-md dark:text-gray-300">
                  <span className="text-yellow-400">~/ $</span> sentrei dev
                </p>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
          width="404"
          height="392"
          fill="none"
          viewBox="0 0 404 392"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200 dark:text-gray-800"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="392"
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-300">
                <span className="text-indigo-500">2.&nbsp;&nbsp;&nbsp;</span>
                Preview on the cloud
              </h3>
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
                No more hustle to manage your own preview environment. Integrate
                seamlessly with your development flow that follows your best
                practices. Develop blazing fast, like 2020.
              </p>
              <dl className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                      Custom preview domain
                    </dt>
                    <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      Sweet. It&apos;s 2020. This should be the norm.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                      Dedicated security features
                    </dt>
                    <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      We do not comprimise with security.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                      Seamless integration with CI/CD
                    </dt>
                    <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      Deploy your entire backend infrastructure through code.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
            <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
              <div className="w-4/5 mx-auto transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-3 lg:mx-0">
                <div className="px-4 py-3 border-b border-gray-200 sm:px-6 dark:border-gray-400">
                  <h3 className="font-medium leading-6 text-gray-900 text-md dark:text-gray-100">
                    Sentrei{" "}
                    <span className="inline-flex px-2 py-1 text-xs tracking-tight text-black bg-gray-300 rounded-md dark:text-white dark:bg-gray-700">
                      bot
                    </span>{" "}
                    <span className="text-sm font-medium tracking-tight text-gray-500 dark:text-gray-300">
                      commented 30 minutes ago
                    </span>
                  </h3>
                </div>
                <div className="px-5 py-5 text-sm tracking-tight text-gray-700 dark:text-gray-400">
                  <div className="tracking-tight">
                    This pull request is being automatically deployed with
                    Sentrei. To see the status of your deployment, click below:
                  </div>
                  <div className="mt-3 leading-relaxed text-black">
                    <span
                      className="text-sm tracking-tight"
                      role="img"
                      aria-label="inspect"
                    >
                      🔍{" "}
                      <b className="font-bold text-black dark:text-gray-200">
                        Inspect:{" "}
                      </b>
                      <span className="text-blue-600 underline">
                        https://sentrei.com/shunkakinoki/website/krgj1n5
                      </span>
                    </span>
                    <br />
                    <span
                      className="text-sm tracking-tight"
                      role="img"
                      aria-label="frontend"
                    >
                      💅{" "}
                      <b className="font-bold text-black dark:text-gray-200">
                        Frontend:{" "}
                      </b>
                      <span className="text-blue-600 underline">
                        https://awesome-new-feature.sentrei.app
                      </span>
                    </span>
                    <br />
                    <span
                      className="text-sm tracking-tight"
                      role="img"
                      aria-label="backend"
                    >
                      📊{" "}
                      <b className="font-bold text-black dark:text-gray-200">
                        Backend:{" "}
                      </b>
                      <span className="text-blue-600 underline">
                        https://preview.sentrei.app
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-300">
                <span className="text-indigo-500">3.&nbsp;&nbsp;&nbsp;</span>
                Deploy instantly around the globe
              </h3>
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
                The entire infrastructure sits on the edge. The database and
                serverless functions are distributed accross data centers all
                accross the globe. To put it simply, it works like magic.
              </p>
              <dl className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                      Blazing fast, at scale
                    </dt>
                    <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      Infinitely scalabe infrastructure from zero to beyond.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                      Edge computing around the globe
                    </dt>
                    <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      Deploy to the edge in over 200 data centers around the
                      world.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                      Zero cold starts
                    </dt>
                    <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      Cold starts will be a thing of the past.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
            <svg
              className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
              width="404"
              height="392"
              fill="none"
              viewBox="0 0 404 392"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200 dark:text-gray-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="392"
                fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
              />
            </svg>
            <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
              <div className="flex flex-col items-center pt-3">
                <div className="relative">
                  <svg
                    className="absolute inset-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 top-1/2"
                    width="800"
                    height="800"
                    viewBox="0 0 800 800"
                    style={{ maxWidth: "200%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="text-gray-400 opacity-75 fill-current">
                      <circle
                        className={clsx(Pulse.pulse)}
                        cx="400"
                        cy="400"
                        r="200"
                      />
                      <circle
                        className={clsx(Pulse.pulse, Pulse.pulse1)}
                        cx="400"
                        cy="400"
                        r="200"
                      />
                      <circle
                        className={clsx(Pulse.pulse, Pulse.pulse2)}
                        cx="400"
                        cy="400"
                        r="200"
                      />
                    </g>
                  </svg>
                  <Image
                    unoptimized
                    priority
                    className="relative rounded-full "
                    src="/assets/globe.png"
                    layout="fixed"
                    width={400}
                    height={400}
                    alt="Globe"
                  />
                  <svg
                    className="absolute top-0 w-full h-auto"
                    viewBox="0 0 400 400"
                    style={{ left: "12%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <filter
                        x="-41.7%"
                        y="-34.2%"
                        width="183.3%"
                        height="185.6%"
                        filterUnits="objectBoundingBox"
                        id="globe-ill-a"
                      >
                        <feOffset
                          dy="4"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />
                        <feGaussianBlur
                          stdDeviation="6"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                          in="shadowBlurOuter1"
                        />
                      </filter>
                      <filter
                        x="-83.3%"
                        y="-68.5%"
                        width="266.7%"
                        height="271.2%"
                        filterUnits="objectBoundingBox"
                        id="globe-ill-c"
                      >
                        <feOffset
                          dy="4"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />
                        <feGaussianBlur
                          stdDeviation="6"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0"
                          in="shadowBlurOuter1"
                        />
                      </filter>
                      <filter
                        x="-7.3%"
                        y="-23.8%"
                        width="114.5%"
                        height="147.6%"
                        filterUnits="objectBoundingBox"
                        id="globe-ill-e"
                      >
                        <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                      </filter>
                      <ellipse
                        id="globe-ill-b"
                        cx="51"
                        cy="175.402"
                        rx="24"
                        ry="23.364"
                      />
                      <ellipse
                        id="globe-ill-d"
                        cx="246"
                        cy="256.201"
                        rx="12"
                        ry="11.682"
                      />
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="globe-ill-f"
                      >
                        <stop stopColor="#4F46E5" stopOpacity="0" offset="0%" />
                        <stop
                          stopColor="#4F46E5"
                          stopOpacity=".64"
                          offset="52.449%"
                        />
                        <stop
                          stopColor="#4F46E5"
                          stopOpacity="0"
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      transform="translate(0 -.818)"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <use
                        fill="#000"
                        filter="url(#globe-ill-a)"
                        xlinkHref="#globe-ill-b"
                      />
                      <use fill="#2563EB" xlinkHref="#globe-ill-b" />
                      <use
                        fill="#000"
                        filter="url(#globe-ill-c)"
                        xlinkHref="#globe-ill-d"
                      />
                      <use fill="#2563EB" xlinkHref="#globe-ill-d" />
                      <ellipse
                        fillOpacity=".32"
                        fill="#4F46E5"
                        cx="293"
                        cy="142.303"
                        rx="8"
                        ry="7.788"
                      />
                      <ellipse
                        fillOpacity=".64"
                        fill="#4F46E5"
                        cx="250"
                        cy="187.083"
                        rx="6"
                        ry="5.841"
                      />
                      <ellipse
                        fillOpacity=".64"
                        fill="#4F46E5"
                        cx="13"
                        cy="233.811"
                        rx="2"
                        ry="1.947"
                      />
                      <ellipse
                        fill="#4F46E5"
                        cx="29"
                        cy="114.072"
                        rx="2"
                        ry="1.947"
                      />
                      <path
                        d="M258 256.2l87-29.204"
                        stroke="#666"
                        strokeWidth="2"
                        opacity=".16"
                        filter="url(#globe-ill-e)"
                      />
                      <path
                        d="M258 251.333c111.333-40.237 141-75.282 89-105.136M136 103.364c66.667 4.543 104.667 32.45 114 83.72"
                        stroke="url(#globe-ill-f)"
                        strokeWidth="2"
                        strokeDasharray="2"
                      />
                    </g>
                  </svg>
                  <svg
                    className="absolute max-w-full"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    style={{ left: "50%", top: "45%", width: "12%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="text-indigo-600 fill-current">
                      <circle
                        className={clsx(
                          Pulse.pulse,
                          Pulse.pulseMini,
                          Pulse.pulse1
                        )}
                        cx="24"
                        cy="24"
                        r="8"
                      />
                      <circle
                        className={clsx(
                          Pulse.pulse,
                          Pulse.pulseMini,
                          Pulse.pulse2
                        )}
                        cx="24"
                        cy="24"
                        r="8"
                      />
                      <circle cx="24" cy="24" r="8" />
                    </g>
                  </svg>
                  <svg
                    className="absolute max-w-full"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    style={{ left: "46%", top: "19%", width: "12%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="text-indigo-600 fill-current">
                      <circle
                        className={clsx(Pulse.pulse, Pulse.pulseMini)}
                        cx="24"
                        cy="24"
                        r="8"
                      />
                      <circle
                        className={clsx(
                          Pulse.pulse,
                          Pulse.pulseMini,
                          Pulse.pulse2
                        )}
                        cx="24"
                        cy="24"
                        r="8"
                      />
                      <circle cx="24" cy="24" r="8" />
                    </g>
                  </svg>
                  <svg
                    className="absolute top-0 w-20 h-auto max-w-full rounded-full shadow-xl"
                    viewBox="0 0 80 80"
                    style={{ width: "20%", left: "6%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="text-gray-800 fill-current dark:text-gray-600"
                      cx="40"
                      cy="40"
                      r="40"
                    />
                    <path
                      className="text-white stroke-current dark:text-gray-200"
                      d="M30.19 41.221c7.074 3.299 12.957-4.7 20.03-1.401l1.769.824-1.419-3.883M43.988 50.877l3.887-1.41-1.769-.824c-2.19-1.021-3.475-2.651-4.42-4.512M38.724 36.91c-.944-1.86-2.23-3.49-4.42-4.512"
                      strokeLinecap="square"
                      strokeWidth="2"
                    />
                  </svg>
                  <svg
                    className="absolute w-16 h-auto max-w-full rounded-full shadow-xl"
                    viewBox="0 0 64 64"
                    style={{ left: "-27%", top: "32%", width: "16%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="text-indigo-600 fill-current"
                      cx="32"
                      cy="32"
                      r="32"
                    />
                    <path
                      className="text-white stroke-current"
                      d="M20.733 31.416l18.127-8.452M43.039 31.926L24.913 40.38"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      className="text-white stroke-current"
                      strokeLinecap="square"
                      d="M32.238 20.595l6.622 2.369-2.442 6.594M31.534 42.747l-6.621-2.368 2.442-6.595"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <svg
                    className="absolute w-16 h-auto max-w-full rounded-full shadow-xl"
                    viewBox="0 0 64 64"
                    style={{ right: "-16%", top: "55%", width: "16%" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="text-gray-100 fill-current dark:text-gray-800"
                      cx="32"
                      cy="32"
                      r="32"
                    />
                    <path
                      className="text-gray-700 fill-current dark:text-gray-300"
                      d="M37.11 32.44l-1.69 4.646-8.458-3.078.676-1.859-4.773 1.42 2.744 4.156.677-1.858 9.396 3.42a.994.994 0 001.278-.587l2.03-5.576-1.88-.684zM27.037 30.878l1.691-4.646 8.457 3.078-.676 1.858 4.773-1.42-2.744-4.155-.676 1.858-9.397-3.42a.994.994 0 00-1.278.587l-2.03 5.576 1.88.684z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
