'use client';

import { getRoutes } from '@/components/navbar/menuRoutes';
import { cn } from '@/lib/utils';
import { Category } from '@/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface NavbarProps {
  categories: Category[];
}

const Navbar: FC<NavbarProps> = ({ categories }) => {
  const pathname = usePathname();

  const routes = getRoutes(categories, pathname);

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500',
          )}
          href={route.href}
          key={route.href}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
