import { useState, ChangeEvent, FormEvent } from "react";

import { postNewsletter } from "@/utils";

export default function LandingNewsletter(): JSX.Element {
  const [email, setEmail] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(email);
    if (email) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      postNewsletter(email);
    }
  };

  return (
    <section className="pt-6 pb-12 bg-white lg:py-16 dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-6 py-6 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl dark:text-gray-200">
              Want products news and updates?
            </h2>
            <p className="max-w-3xl mt-3 text-lg leading-6 text-indigo-200 dark:text-indigo-100">
              Sign up for our newsletter to stay up to date.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form className="sm:flex" onSubmit={handleSubmit}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                required
                id="email"
                type="email"
                value={email}
                className="w-full px-5 py-3 text-black placeholder-gray-500 bg-white border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-300 dark:text-gray-100"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 dark:hover:bg-indigo-600"
              >
                Notify me
              </button>
            </form>
            {/* <p className="mt-3 text-sm text-indigo-200">
              We care about the protection of your data. Read our
              <a href="#" className="font-medium text-white underline">
                Privacy Policy.
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
