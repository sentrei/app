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
    postNewsletter(email);
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
        className="w-full px-6 py-3 mt-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto dark:hover:bg-gray-600"
      >
        Notify me
      </button>
    </form>
  );
}
