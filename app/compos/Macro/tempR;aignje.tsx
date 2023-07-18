import dynamic from 'next/dynamic';
import React from 'react';
const ButtonDy = dynamic(() => import("../Micro/Button"), {ssr: false});

const Pricing: React.FC = () => {
  return (<>
    {/* Section: Design Block */}
    <section className="mb-32">
      <h2 className="mb-12 text-center text-3xl font-bold">Pricing</h2>
      {/* Pills navs */}
      <ul
        className="mb-12 flex list-none flex-col flex-wrap pl-0 md:flex-row"
        role="tablist"
        data-te-nav-ref=""
      >
        <li role="presentation" className="flex-grow basis-0 text-center">
          <a
            href="#pills-home02"
            className="my-2 block rounded bg-neutral-100 px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
            id="pills-home-tab02"
            data-te-toggle="pill"
            data-te-target="#pills-home02"
            data-te-nav-active=""
            role="tab"
            aria-controls="pills-home02"
            aria-selected="true"
          >
            Indyviduals
          </a>
        </li>
        <li role="profile" className="flex-grow basis-0 text-center">
          <a
            href="#pills-profile02"
            className="my-2 block rounded bg-neutral-100 px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
            id="pills-profile-tab02"
            data-te-toggle="pill"
            data-te-target="#pills-profile02"
            role="tab"
            aria-controls="pills-profile02"
            aria-selected="false"
          >
            Teams
          </a>
        </li>
      </ul>
      {/* Pills navs */}
      {/* Pills content */}
      <div className="mb-6">
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="pills-home02"
          role="tabpanel"
          aria-labelledby="pills-home-tab02"
          data-te-tab-active=""
        >
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
            <div className="mb-6 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase">
                    <strong>Basic</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 129</strong>
                    <small className="text-base text-neutral-500 dark:text-neutral-300">
                      /year
                    </small>
                  </h3>
                  <button
                    type="button"
                    className="inline-block w-full rounded bg-[hsl(0,0%,95%)] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-[hsl(0,0%,93%)] focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    Buy
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Unlimited updates
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Git repository
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      npm installation
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="mb-6 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase">
                    <strong>Advanced</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 299</strong>
                    <small className="text-base text-neutral-500 dark:text-neutral-300">
                      /year
                    </small>
                  </h3>
                  <button
                    type="button"
                    className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    Buy
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Unlimited updates
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Git repository
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      npm installation
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Code examples
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Premium snippets
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="mb-6 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase">
                    <strong>Enterprise</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 499</strong>
                    <small className="text-base text-neutral-500 dark:text-neutral-300">
                      /year
                    </small>
                  </h3>
                  <button
                    type="button"
                    className="inline-block w-full rounded bg-[hsl(0,0%,95%)] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-[hsl(0,0%,93%)] focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    Buy
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Unlimited updates
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Git repository
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      npm installation
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Code examples
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Premium snippets
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Premium support
                    </li>
                    <li className="mb-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Drag&amp;Drop builder
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="pills-profile02"
          role="tabpanel"
          aria-labelledby="pills-profile-tab02"
        >
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
            <div className="mb-6 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="p-6 pt-6 pb-10 text-center">
                  <p className="mb-4 text-sm uppercase">
                    <strong>3 users</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 799</strong>
                    <small className="text-base text-neutral-500 dark:text-neutral-300">
                      /year
                    </small>
                  </h3>
                  <button
                    type="button"
                    className="inline-block w-full rounded bg-[hsl(0,0%,95%)] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-[hsl(0,0%,93%)] focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-6 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="p-6 pt-6 pb-10 text-center">
                  <p className="mb-4 text-sm uppercase">
                    <strong>4 users</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 999</strong>
                    <small className="text-base text-neutral-500 dark:text-neutral-300">
                      /year
                    </small>
                  </h3>
                  <button
                    type="button"
                    className="inline-block w-full rounded bg-[hsl(0,0%,95%)] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-[hsl(0,0%,93%)] focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-6 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="p-6 pt-6 pb-10 text-center">
                  <p className="mb-4 text-sm uppercase">
                    <strong>More users</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>Custom offer</strong>
                  </h3>
                  <button
                    type="button"
                    className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init=""
                    data-te-ripple-color="light"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pills content */}
    </section>
    {/* Section: Design Block */}
    </>
  );
};

export default Pricing;
