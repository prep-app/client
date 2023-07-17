'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Header() {
  const pathName = usePathname()
  return (
    <header className="flex justify-between items-center w-100 border-b border-gray-200 p-3">
      <div className="pe-7 font-extrabold uppercase">PREPP</div>
      <nav className="flex items-center">
        {NAV_ITEMS.map(({ label, href }, index) => {
          if (href) {
            const isActive = href == pathName || href.length > 1 && pathName.startsWith(href)
            return (
              <div
                key={index}
                className={`pe-5 py-2 hover:text-purple-600 hover:underline ${
                  isActive ? 'text-purple-400' : 'text-black'
                }`}
              >
                <Link href={href}>{label} </Link>
              </div>
            )
          }
        })}
      </nav>
      <div>
        <button className="border border-gray-700 hover:bg-purple-400 hover:text-purple-50 hover:border-purple-400 px-7 py-2 rounded-sm">
          login
        </button>
      </div>
    </header>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Stacks',
    href: '/stack',
  },
  {
    label: 'Roles',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
]
