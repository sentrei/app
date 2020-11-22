export default function LandingHeroForm() {
  return (
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
  );
}
