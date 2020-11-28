export default function LandingMission(): JSX.Element {
  return (
    <div className="py-12 bg-white dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="pb-12 sm:text-left md:text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Our mission
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
            Accelerating the transition to the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              edge
            </span>
          </p>
          <p className="max-w-3xl mt-4 text-xl text-gray-500 lg:mx-auto dark:text-gray-400">
            We believe the future lies in the edge. We want to provide an
            instant backend infrastructure that lives near everyone in the
            world.
          </p>
        </div>
      </div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                Scale infinitely
              </dt>
              <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Think globally from the start. Never worry about the underlying
                infrastructure. We take care of the rest.
              </dd>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                No hidden fees
              </dt>
              <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                You only get for what you use. We also provide a generous free
                tier for all developers to try out.
              </dd>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                Blazing fast
              </dt>
              <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                We are obsessed with performance, for both the customer and
                developer.
              </dd>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                Dedicated analytics
              </dt>
              <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Get insight on what you use. Built-in analytics features on the
                backend.
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
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
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
                Make use of built-in authentication system that integrates
                seamlessly with the underlying backend infrastructure.
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
                  aria-hidden="true"
                >
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                Distributed database
              </dt>
              <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                We are powered by a cross region sub-second scalable database
                with automatic failure recovery.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}
