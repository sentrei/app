import Image from "next/image";

export default function LandingDemoWindow() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <nav className="flex-shrink-0 bg-indigo-600 dark:bg-indigo-700">
        <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center px-2 lg:px-0 xl:w-64">
              <div className="flex-shrink-0" />
            </div>
            <div className="flex justify-center flex-1 lg:justify-end">
              <div className="w-full px-2 lg:px-6">
                <div className="relative text-indigo-200 focus-within:text-gray-400 dark:text-indigo-100">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full py-2 pl-10 pr-3 leading-5 text-indigo-100 placeholder-indigo-200 bg-indigo-400 bg-opacity-25 border border-transparent rounded-md focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                    placeholder="Search projects"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              <div
                className="inline-flex items-center justify-center p-2 text-indigo-400 bg-indigo-600 rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                aria-expanded="false"
              >
                <svg
                  className="block w-6 h-6"
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <div className="hidden lg:block lg:w-80">
              <div className="flex items-center justify-end">
                <div className="flex">
                  <p className="px-3 py-2 text-sm font-medium text-indigo-200 rounded-md hover:text-white dark:text-indigo-100 dark:hover:text-white">
                    Documentation
                  </p>
                  <span className="px-3 py-2 text-sm font-medium text-indigo-200 rounded-md hover:text-white dark:text-indigo-100 dark:hover:text-white">
                    Support
                  </span>
                </div>
                <div className="relative flex-shrink-0 ml-4">
                  <div>
                    <div
                      className="flex text-sm text-white bg-indigo-700 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                      id="user-menu"
                    >
                      <Image
                        priority
                        src="/assets/shun.png"
                        height={36}
                        width={36}
                        layout="fixed"
                        alt="Logo"
                        className="inline object-cover w-8 h-8 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex-grow w-full mx-auto bg-white max-w-7xl lg:flex dark:bg-gray-900">
        <div className="flex-1 min-w-0 xl:flex xl:pl-3">
          <div className="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 dark:border-gray-800">
            <div className="py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-8">
                  <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-12 h-12">
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
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          Shun Kakinoki
                        </div>
                        <span className="group flex items-center space-x-2.5">
                          <svg
                            className="w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-600">
                            shunkakinoki
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row xl:flex-col">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full dark:bg-indigo-700 dark:hover:bg-indigo-800"
                      >
                        New Project
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center px-4 py-2 mt-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full dark:hover:bg-gray-500 dark:bg-gray-800 dark:text-gray-200"
                      >
                        Invite Team
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-gray-400 dark:text-gray-100"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-200">
                        Pro Member
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-gray-400 dark:text-gray-100"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-200">
                        3 projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white lg:min-w-0 lg:flex-1 dark:bg-gray-900">
            <div className="pt-4 pb-4 pl-4 pr-6 border-t border-b border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0 dark:border-gray-800">
              <div className="flex items-center">
                <h1 className="flex-1 text-lg font-medium text-black dark:text-white">
                  Projects
                </h1>
                <div className="relative">
                  <button
                    id="sort-menu"
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-gray-400 dark:text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
                    </svg>
                    Sort
                    <svg
                      className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-200"
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
                  </button>
                </div>
              </div>
            </div>
            <ul className="relative z-0 border-b border-gray-200 divide-y divide-gray-200 dark:border-gray-800 dark:divide-gray-800">
              <li className="relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6 dark:hover:bg-gray-800">
                <div className="flex items-center justify-between space-x-4">
                  <div className="min-w-0 space-y-3">
                    <div className="flex items-center space-x-3">
                      <span
                        className="flex items-center justify-center w-4 h-4 bg-green-100 rounded-full"
                        aria-hidden="true"
                      >
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                      </span>
                      <span className="block">
                        <h2 className="text-sm font-medium text-black dark:text-white">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          sentrei <span className="sr-only">Running</span>
                        </h2>
                      </span>
                    </div>
                    <span className="relative group flex items-center space-x-2.5">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-100 dark:group-hover:text-gray-200"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917 0Z"
                          fill="currentcolor"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-500 truncate group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-500">
                        shunkakinoki/sentrei
                      </span>
                    </span>
                  </div>
                  <div className="sm:hidden">
                    <svg
                      className="w-5 h-5 text-gray-400 dark:text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-col items-end flex-shrink-0 hidden space-y-3 sm:flex">
                    <p className="flex items-center space-x-4">
                      <span className="relative text-sm font-medium text-gray-500 hover:text-gray-200 dark:text-gray-300 dark:hover:text-gray-600">
                        Visit site
                      </span>
                      <button
                        className="relative bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-600"
                        type="button"
                      >
                        <span className="sr-only">Add to favorites</span>
                        <svg
                          className="w-5 h-5 text-yellow-300 hover:text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    </p>
                    <p className="flex space-x-2 text-sm text-gray-500 dark:text-gray-300">
                      <span>React</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>Last deploy 3h ago</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>United states</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pr-4 bg-gray-50 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="pl-6 lg:w-80">
            <div className="pt-6 pb-2">
              <h2 className="text-sm font-semibold text-black dark:text-white">
                Activity
              </h2>
            </div>
            <div>
              <ul className="divide-y divide-gray-200 dark:divide-gray-800">
                <li className="py-4">
                  <div className="flex space-x-3">
                    <Image
                      priority
                      src="/assets/shun.png"
                      height={24}
                      width={24}
                      layout="fixed"
                      alt="Logo"
                      className="inline object-cover w-6 h-6 rounded-full"
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-black dark:text-white">
                          You
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-200">
                          1h
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-200">
                        Deployed sentrei (2d89f0c8 in main) to production
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="py-4 text-sm border-t border-gray-200 dark:border-gray-800">
                <span className="font-semibold text-indigo-600 hover:text-indigo-900 dark:text-indigo-500 dark:hover:text-indigo-200">
                  View all activity <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
