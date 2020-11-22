import clsx from "clsx";
import { useTheme } from "next-themes";

export default function DarkModeSwitch(): JSX.Element {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {resolvedTheme !== undefined && (
        <svg
          className={clsx(
            "w-10 h-10 cursor-pointer text-gray-500",
            resolvedTheme === "dark" && "text-gray-300",
            resolvedTheme === "light" && "text-gray-700"
          )}
          fill={resolvedTheme === "dark" ? "none" : "currentColor"}
          stroke={resolvedTheme === "dark" ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggle}
        >
          {resolvedTheme === "dark" && (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          )}
          {resolvedTheme === "light" && (
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          )}
        </svg>
      )}
    </>
  );
}
