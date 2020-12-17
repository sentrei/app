import Image from "next/image";

export default function LandingTestimonial() {
  return (
    <section className="py-12 overflow-hidden bg-gray-100 md:py-16 dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:text-left md:text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Word from the creator
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
            An all-in-one backend solution for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 via-green-300 to-yellow-300">
              serverless era
            </span>
          </p>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <blockquote className="mt-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl font-medium leading-9 text-gray-600 dark:text-gray-400">
              &ldquo;I&apos;m personally a big fan of next.js and Vercel, and
              what they&apos;ve pioneered with the frontend space. However, as
              the frontend and backend space gets closer together, I thought
              that developers deserved a more scalable solution, tailored for
              edge computing in the serverless era in 2020.&rdquo;
            </p>
          </div>
          <div className="mt-8">
            <div className="md:flex md:items-center md:justify-center">
              <div className="flex justify-center md:flex-shrink-0">
                <Image
                  priority
                  src="/assets/shun.png"
                  height={48}
                  width={48}
                  layout="fixed"
                  alt="Logo"
                  className="inline object-cover w-12 h-12 rounded-full"
                />
              </div>
              <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <div className="text-base font-medium text-gray-900 dark:text-gray-300">
                  Shun Kakinoki
                </div>
                <svg
                  className="hidden w-5 h-5 mx-1 text-indigo-600 md:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>
                <div className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Founder, Sentrei
                </div>
              </div>
            </div>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
