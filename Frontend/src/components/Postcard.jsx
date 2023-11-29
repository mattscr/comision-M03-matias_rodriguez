const Postcard = () => {
  return (
    <>
      <div className="overflow-x-hidden bg-gray-300">
        <div className="px-6 py-8">
          <div className="container flex justify-between mx-auto">
            <div className="w-full lg:w-8/12">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                  Post
                </h1>
              </div>
              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex-none w-48 relative">
                    <img
                      src="https://picsum.photos/200/300"
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                      Jun 1, 2020
                    </span>
                    <a
                      href="#"
                      className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      Laravel
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-2xl font-bold text-gray-700 hover:underline"
                    >
                      Build Your New Idea with Laravel Freamwork.
                    </a>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempora expedita dicta totam aspernatur doloremque.
                      Excepturi iste iusto eos enim reprehenderit nisi,
                      accusamus delectus nihil quis facere in modi ratione
                      libero!
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <a href="#" className="text-blue-500 hover:underline">
                      Read more
                    </a>
                    <div>
                      <a href="#" className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                          alt="avatar"
                          className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                        />
                        <h1 className="font-bold text-gray-700 hover:underline">
                          Alex John
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                      mar 4, 2019
                    </span>
                    <a
                      href="#"
                      className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      Design
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-2xl font-bold text-gray-700 hover:underline"
                    >
                      Accessibility tools for designers and developers
                    </a>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempora expedita dicta totam aspernatur doloremque.
                      Excepturi iste iusto eos enim reprehenderit nisi,
                      accusamus delectus nihil quis facere in modi ratione
                      libero!
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <a href="#" className="text-blue-500 hover:underline">
                      Read more
                    </a>
                    <div>
                      <a href="#" className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
                          alt="avatar"
                          className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                        />
                        <h1 className="font-bold text-gray-700 hover:underline">
                          Jane Doe
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden w-4/12 -mx-8 lg:block">
              <div className="px-8">
                <h1 className="mb-4 text-xl font-bold text-gray-700">
                  Authors
                </h1>
                <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                  <ul className="-mx-4">
                    <li className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Alex John
                        </a>
                        <span className="text-sm font-light text-gray-700">
                          Created 23 Posts
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mt-6">
                      <img
                        src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Jane Doe
                        </a>
                        <span className="text-sm font-light text-gray-700">
                          Created 52 Posts
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mt-6">
                      <img
                        src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80"
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Lisa Way
                        </a>
                        <span className="text-sm font-light text-gray-700">
                          Created 73 Posts
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mt-6">
                      <img
                        src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80"
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Steve Matt
                        </a>
                        <span className="text-sm font-light text-gray-700">
                          Created 245 Posts
                        </span>
                      </p>
                    </li>
                    <li className="flex items-center mt-6">
                      <img
                        src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                        alt="avatar"
                        className="object-cover w-10 h-10 mx-4 rounded-full"
                      />
                      <p>
                        <a
                          href="#"
                          className="mx-1 font-bold text-gray-700 hover:underline"
                        >
                          Khatab Wedaa
                        </a>
                        <span className="text-sm font-light text-gray-700">
                          Created 332 Posts
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-8 mt-10">
                <h1 className="mb-4 text-xl font-bold text-gray-700">
                  Categories
                </h1>
                <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - AWS
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - Laravel
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - Vue
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - Design
                      </a>
                    </li>
                    <li className="flex items-center mt-2">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - Django
                      </a>
                    </li>
                    <li className="flex items-center mt-2">
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                      >
                        - PHP
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-8 mt-10">
                <h1 className="mb-4 text-xl font-bold text-gray-700">
                  Recent Post
                </h1>
                <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-center">
                    <a
                      href="#"
                      className="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      Laravel
                    </a>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 hover:underline"
                    >
                      Build Your New Idea with Laravel Freamwork.
                    </a>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                        alt="avatar"
                        className="object-cover w-8 h-8 rounded-full"
                      />
                      <a
                        href="#"
                        className="mx-3 text-sm text-gray-700 hover:underline"
                      >
                        Alex John
                      </a>
                    </div>
                    <span className="text-sm font-light text-gray-600">
                      Jun 1, 2020
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="px-6 py-2 text-gray-100 bg-gray-800">
          <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
            <p className="mt-2 md:mt-0">Rodriguez Matias.</p>
            <div className="flex mt-4 mb-2 -mx-2 md:mt-0 md:mb-0">
              <a href="#" className="mx-2 text-gray-100 hover:text-gray-400">
                <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                  <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path>
                </svg>
              </a>
              <a href="#" className="mx-2 text-gray-100 hover:text-gray-400">
                <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                  <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                </svg>
              </a>
              <a href="#" className="mx-2 text-gray-100 hover:text-gray-400">
                <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                  <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Postcard;