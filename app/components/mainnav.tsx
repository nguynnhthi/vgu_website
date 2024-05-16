import Link from 'next/link';
import { sans } from '../ui/fonts';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { notFound } from 'next/navigation';

async function getNavigationItems(type: string) {
	try {
		const navItems = await directus.request(
			readItems('navigation', {
				filter: {
          type: {
            _eq: type
          }
        },
        fields: ['name', 'path'],
        sort: ['order'],
			})
		);

		return navItems;
	} catch (error) {
		notFound();
	}
}

export default async function MainNav() {
  const mainnav = await getNavigationItems("main-nav");
  return (
    <div className={`${sans.className} align-middle text-xl`}>
      <ul className="hidden md:flex">
        {mainnav.map(({ name, path }) => (
          <Link href={path}>
            <li
              key={name}
              className="nav-links link-underline align-items-middle text-vgu-darkblue hover:text-vgu-orange flex cursor-pointer px-4 font-medium capitalize duration-200 hover:scale-105"
            >
              {name}

              <div className="content-center">
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
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
