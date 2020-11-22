import LandingHeroForm from "@/components/LandingHeroForm";

export default function LandingHero(): JSX.Element {
  return (
    <section className="md:pb-6 relative py-3 overflow-hidden">
      <div className="sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full hidden">
        <div className="relative h-full max-w-screen-xl mx-auto">
          <svg
            className="right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2 absolute transform"
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
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
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
            className="left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2 absolute transform"
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
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
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
      <div className="sm:px-6 relative px-4 mx-auto mt-10">
        <div className="sm:text-left md:text-center">
          <h2 className="sm:text-5xl sm:leading-none md:text-6xl text-4xl font-extrabold leading-10 tracking-tight text-gray-900">
            The all-in-one serverless <br className="sm:block hidden" /> backend
            infrastructure <br />
            <span className="bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent">
              of your dreams
            </span>
          </h2>
          <p className="sm:mt-6 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl md:max-w-3xl lg:max-w-4xl mt-3 text-base text-gray-500">
            Sentrei combines the cutting-edge serverless technology with a
            global database{" "}
            <span className="bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent">
              infrastructure
            </span>
            .
            <br className="lg:block hidden" /> We abstract away the boilerplate
            to provide the best{" "}
            <span className="bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent">
              developer experience
            </span>
            .
            <br className="lg:block hidden" /> We aim to do much better, how
            developers deserve in{" "}
            <span className="bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-transparent">
              2020
            </span>
            .
          </p>
        </div>
        <div className="max-w-lg mx-auto mt-8 text-center">
          <p className="text-base font-medium text-gray-900">
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
