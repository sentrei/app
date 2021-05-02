import clsx from "clsx";
import { useState, useRef, useEffect } from "react";

export interface Props {
  active?: boolean;
  children: string;
  title: string;
}

export function Accordion({
  active = false,
  children,
  title,
}: Props): JSX.Element {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordion = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAccordionOpen(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accordion]);

  return (
    <div className="pt-6">
      <dt className="text-lg">
        <button
          type="button"
          className="flex items-start justify-between w-full text-left text-gray-400 dark:text-gray-200"
          aria-expanded={accordionOpen}
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
        >
          <span className="font-medium text-gray-900 dark:text-gray-300">
            {title}
          </span>
          <span className="flex items-center ml-6 h-7">
            <svg
              className={clsx(
                "w-6 h-6 transform",
                accordionOpen && "-rotate-180",
                !accordionOpen && "rotate-0"
              )}
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </dt>
      <dd className="pr-12 mt-2 overflow-hidden">
        <p
          className="text-base text-gray-500 transition-all duration-300 ease-in-out dark:text-gray-400"
          style={
            accordionOpen
              ? { maxHeight: 90, opacity: 1 }
              : { maxHeight: 0, opacity: 0 }
          }
        >
          {children}
        </p>
      </dd>
    </div>
  );
}

export default function LandingFaq() {
  return (
    <div className="py-12 bg-gray-50 dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="pb-6 sm:text-left md:text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            FAQ
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
            Frequently Asked Questions
          </p>
          <p className="max-w-3xl mt-4 text-xl text-gray-500 lg:mx-auto dark:text-gray-400">
            Feel free to ask us about anything!
          </p>
        </div>
        <dl className="max-w-3xl mx-auto space-y-6 divide-y divide-gray-200">
          <Accordion title="When will you begin beta testing?">
            We are currently targeting for end of 2021! Subscribe to the
            newsletter for further information!
          </Accordion>
          <Accordion title="Will Sentrei be open source?">
            Yes, we are planning our core offering to be fully open source. We
            heavily support and believe in open source for the future of the
            world.
          </Accordion>
          <Accordion title="Will there be a plan for personal use?">
            Absolutely! We are currently planning to be completely free forever
            for all personal use-cases.
          </Accordion>
        </dl>
      </div>
    </div>
  );
}
