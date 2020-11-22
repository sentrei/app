import { useTheme } from "next-themes";

export default function FooterRootForm(): JSX.Element {
  const { theme, setTheme } = useTheme();

  return (
    <form className="mt-4 sm:max-w-xs sm:mt-4">
      <fieldset className="w-full">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="mode" className="sr-only">
          Mode
        </label>
        <div className="relative">
          {theme !== undefined && (
            <select
              id="mode"
              className="block w-full py-2 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md appearance-none bg-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-black dark:text-gray-300 dark:border-gray-600"
              value={theme}
              onBlur={(e) => setTheme(e.target.value)}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="system">System</option>
            </select>
          )}
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
