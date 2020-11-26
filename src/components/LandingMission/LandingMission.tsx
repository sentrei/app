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
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
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
            <div className="mt-5">
              <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                Scale infinitely
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Think globally from the start. Never worry about the underlying
                infrastructure. We take care of the rest.
              </dd>
            </div>
          </div>
          <div>
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
            <div className="mt-5">
              <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                No hidden fees
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                You only get for what you use. We also provide a generous free
                tier for all developers to try out.
              </dd>
            </div>
          </div>
          <div>
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
            <div className="mt-5">
              <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                Blazing fast
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                We are obsessed with performance, for both the customer and
                developer.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}
