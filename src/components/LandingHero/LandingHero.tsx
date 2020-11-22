export default function LandingHero(): JSX.Element {
  return (
    <section className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Data to enrich your</span>
          <span className="block text-indigo-600 xl:inline">
            {" "}
            online business
          </span>
        </h1>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="max-w-lg mx-auto mt-8 text-center">
          <p className="text-base font-medium text-gray-900">
            Sign up to get notified when it’s ready.
          </p>
          <form action="#" method="POST" className="mt-3 sm:flex">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="block w-full py-3 text-base placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 mt-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
            >
              Notify me
            </button>
          </form>
          {/* <p className="mt-3 text-sm text-gray-500">
            We care about the protection of your data. Read our{" "}
            <a href="#" className="font-medium text-gray-900 underline">
              Privacy Policy
            </a>
            .
          </p> */}
        </div>
      </div>
    </section>
  );
}
