import LandingHeroForm from "@/components/LandingHeroForm";

export default function LandingHero(): JSX.Element {
  return (
    <section className="relative py-3 overflow-hidden md:pb-6 dark:bg-black">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div className="relative h-full max-w-screen-xl mx-auto">
          <svg
            className="absolute transform right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"
                  className="text-gray-200 dark:text-gray-800"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"
                  className="text-gray-200 dark:text-gray-800"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 mx-auto mt-10 sm:px-6">
        <div className="sm:text-left md:text-center">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl sm:leading-none md:text-6xl">
            The all-in-one serverless <br className="hidden sm:block" />{" "}
            fullstack platform
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              of your dreams
            </span>
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-6 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl md:max-w-3xl lg:max-w-4xl dark:text-gray-300">
            Sentrei combines the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              cutting-edge
            </span>{" "}
            serverless technology with a global database infrastructure.
            <br className="hidden lg:block" /> We abstract away the boilerplate
            to provide the best{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              developer experience
            </span>
            .
            <br className="hidden lg:block" /> We aim to do much better, how
            developers deserve in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
              2020
            </span>
            .
          </p>
        </div>
        <div className="max-w-lg mx-auto mt-8 text-center">
          <p className="text-base font-medium text-gray-900 dark:text-gray-400">
            Sign up to get notified when it’s ready.
          </p>
          <LandingHeroForm />
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
