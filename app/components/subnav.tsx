import Link from 'next/link';
import { sans } from '../ui/fonts';
import { getNavigationItems } from '../lib/utils';



export default async function SubNav() {
  const subnav = await getNavigationItems("sub-nav");
  return (
    <div
      className={`${sans.className} bg-vgu-orange mb-2 flex items-center justify-between rounded-l-lg py-1`}
    >
      <div className="pr-4">
        <ul className="hidden text-white md:flex">
          {subnav.map(({ name, path }) => (
            <Link href={path}>
              <li
                key={name}
                className="nav-links link-underline align-items-middle capitalizetext-white flex cursor-pointer px-4 font-medium duration-200 hover:scale-105"
              >
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="pr-4">
        <form className="align-center flex">
          <input
            type="search"
            id="default-search"
            className="text-vgu-darkblue focus:border-vgu-darkblue block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm focus:ring-blue-500 "
            placeholder="Search"
            required
          />
          {/* <button
            type="submit"
            className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button> */}

          {/* <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>{' '}
          </div> */}
        </form>
      </div>

      <div className="pr-4">
        {' '}
        <form className="mx-auto max-w-sm">
          <select
            id="countries"
            className="w-150 focus:border-vgu-darkblue rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:ring-blue-500 "
          >
            <option value="EN">English</option>
            <option value="VIE">Vietnamese</option>
            <option value="DE">German</option>
          </select>
        </form>
      </div>
    </div>
  );
}
