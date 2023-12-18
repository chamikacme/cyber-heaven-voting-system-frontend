const VoteCard = () => {
  return (
    <>
      <div className="bg-[#14452F] flex flex-col items-center justify-center">
        <div className="w-full max-w-md p-4 shadow sm:p-6 ">
          <h5 className="flex flex-col items-center justify-center mb-3 text-base font-semibold text-white md:text-xl">
            Voting King of the Sanmark
          </h5>
          {/* <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Connect with one of our available wallet providers or create a new
          one.
        </p> */}
          <ul className="my-4 space-y-3">
            <li>
              <a
                href="#"
                className="flex items-center p-5 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div className="flex w-16 h-16 bg-blue-600 rounded-full"></div>

                <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
                <div className="">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Select
                  </button>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-5 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div className="flex w-16 h-16 bg-blue-600 rounded-full"></div>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Coinbase Wallet
                </span>
                <div className="">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 rounded-lg bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800">
                    Select
                  </button>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-5 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div className="flex w-16 h-16 bg-blue-600 rounded-full"></div>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Opera Wallet
                </span>
                <div className="">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Select
                  </button>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-5 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div className="flex w-16 h-16 bg-blue-600 rounded-full"></div>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  WalletConnect
                </span>
                <div className="">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Select
                  </button>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-5 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div className="flex w-16 h-16 bg-blue-600 rounded-full"></div>

                <span className="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
                <div className="">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Select
                  </button>
                </div>
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex items-center p-5 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div className="flex w-16 h-16 bg-blue-600 rounded-full"></div>

                <span className="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
                <div className="">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Select
                  </button>
                </div>
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex items-center p-5 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div className="flex w-16 h-16 bg-blue-600 rounded-full"></div>

                <span className="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
                <div className="">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Select
                  </button>
                </div>
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex items-center p-5 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div className="flex w-16 h-16 bg-blue-600 rounded-full"></div>

                <span className="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
                <div className="">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Select
                  </button>
                </div>
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex items-center p-5 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div className="flex w-16 h-16 bg-blue-600 rounded-full"></div>

                <span className="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
                <div className="">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Select
                  </button>
                </div>
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex items-center p-5 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div className="flex w-16 h-16 bg-blue-600 rounded-full"></div>

                <span className="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
                <div className="">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Select
                  </button>
                </div>
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex items-center p-5 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <div className="flex w-16 h-16 bg-blue-600 rounded-full"></div>

                <span className="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
                <div className="">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Select
                  </button>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="flex flex-row items-center justify-around bg-[#14452F] w-screen h-screen">
        <div className="box-border flex flex-row items-center justify-around w-full max-w-sm p-2 mx-2 bg-white rounded-lg">
          <div className="flex w-16 h-16 bg-blue-600 rounded-full"></div>
          <div className="">
            <h5 className="mb-1 text-xl font-medium text-left text-gray-900 ms-1 dark:text-dark pe-7">
              Bonnie Green
            </h5>
          </div>
          <div className="">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Vote
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default VoteCard;
