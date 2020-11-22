export default function LandingHero(): JSX.Element {
  return (
    <section className="max-w-7xl sm:mt-24 px-4 mx-auto mt-16">
      <div className="text-center">
        <h1 className="sm:text-5xl md:text-6xl text-4xl font-extrabold tracking-tight text-gray-900">
          <span className="xl:inline block">Data to enrich your</span>
          <span className="xl:inline block text-indigo-600">
            {" "}
            online business
          </span>
        </h1>
        <p className="sm:text-lg md:mt-5 md:text-xl md:max-w-3xl max-w-md mx-auto mt-3 text-base text-gray-500">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="max-w-lg mx-auto mt-8 text-center">
          <p className="text-base font-medium text-gray-900">
            Sign up to get notified when it’s ready.
          </p>
          <form action="#" method="POST" className="sm:flex mt-3">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 block w-full py-3 text-base placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto w-full px-6 py-3 mt-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm"
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
