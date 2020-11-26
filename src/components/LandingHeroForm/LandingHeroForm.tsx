/* eslint-disable @typescript-eslint/no-floating-promises */

import { useState, ChangeEvent, FormEvent } from "react";

import { postNewsletter } from "@/utils";

export default function LandingHeroForm(): JSX.Element {
  const [email, setEmail] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
    if (email) {
      postNewsletter(email);
    }
  };

  return (
    <form className="mt-3 sm:flex" onSubmit={handleSubmit}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="text"
        id="email"
        value={email}
        className="block w-full py-3 text-base placeholder-gray-500 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 dark:bg-black dark:text-gray-300"
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="flex items-center justify-center w-full px-6 py-3 mt-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-400 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto dark:hover:bg-gray-600"
      >
        Notify me
        <svg
          className="w-5 h-5 ml-1 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </form>
  );
}
