export default function Carousel() {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* <div className="relative h-96 overflow-hidden md:h-96">
      
        <div className=" duration-700 ease-in-out" data-carousel-item>
          <img
            src="/vgu_0.png"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/public/vgu_0.png"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
 
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/public/vgu_0.png"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/public/vgu_0.png"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
     
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="./../../public/vgu_0.png"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
      </div> */}

      {/* <div className=" relative h-96 overflow-hidden md:h-96"> */}
      <div className="md:h-200">
        {/* <!-- Item 1 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src="/vgu_0.jpeg"
            // className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            className=" block w-full"
            alt="..."
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/vgu_1.jpeg"
            // className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            className=" block w-full"
            alt="..."
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="/vgu_2.jpeg" className="block w-full " alt="..." />
        </div>
      </div>

      {/* <!-- Slider indicators --> */}
      {/* <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div> */}
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}