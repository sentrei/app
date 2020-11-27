export default function LandingStats(): JSX.Element {
  return (
    <section className="bg-white dark:bg-black">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:text-left md:text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Strength in numbers
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
            Setting the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              standard
            </span>
          </p>
          <p className="max-w-3xl mt-4 text-xl text-gray-500 lg:mx-auto dark:text-gray-400">
            We hope to empower developers all around the world through providing
            a one-stop solution for an infinitely scalable backend
            infrastructure - without the hassle.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <dl className="rounded-lg shadow-xl sm:grid sm:grid-cols-3">
              <div className="flex flex-col p-6 text-center border-b border-gray-200 sm:border-0 sm:border-r dark:border-gray-600">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Edge Data Centers
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                  200
                </dd>
              </div>
              <div className="flex flex-col p-6 text-center border-t border-b border-gray-200 sm:border-0 sm:border-l sm:border-r dark:border-gray-600">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Delivery
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                  24/7
                </dd>
              </div>
              <div className="flex flex-col p-6 text-center border-t border-gray-200 sm:border-0 sm:border-l dark:border-gray-600">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Function cold starts
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                  0 sec.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
