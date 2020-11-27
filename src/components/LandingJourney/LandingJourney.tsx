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
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-500">
                Lightspeed
              </span>{" "}
              at your fingertips
            </p>
            <p className="max-w-3xl mt-4 text-xl text-gray-500 lg:mx-auto dark:text-gray-400">
              Deploy your entire API + database to the edge in seconds. Develop
              locally, preview on the cloud, and deploy to production with
              confidence. All with batteries included.
            </p>
          </div>
        </div>
        <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Develop with confidence
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              We aim to provide the finest developer experience.
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
                  <dt className="text-lg font-medium leading-6 text-gray-900">
                    Built-in authentication
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Nothing new. All battereies included.
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
                  <dt className="text-lg font-medium leading-6 text-gray-900">
                    Custom developing environment in the cloud
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
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
                  <dt className="text-lg font-medium leading-6 text-gray-900">
                    Developer friendly interface
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We are obsessed with providing the best possible developer
                    experience.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
            {/* Section 2 */}
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
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Preview on the cloud
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                No more hustle to manage your own preview infrastructure.
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
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Custom preview domain
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
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
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Dedicated security features
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
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
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Seamless integration with CI/CD
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Deploy your entire backend infrastructure through code.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
            <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
              {/* Section 2 */}
            </div>
          </div>
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Deploy instantly around the globe
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                The entire infrastructure sits on the edge.
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
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Blazing fast, at scale
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
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
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Edge computing around the globe
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
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
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Zero cold starts
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
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
              {/* Section 3 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
