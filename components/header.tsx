import Navbar from '@/components/navbar/navbar';
import NavbarActions from '@/components/navbar/navbar-actions';
import Container from '@/components/ui/container';
import getCategories from '@/services/get-categories';
import Link from 'next/link';
import { FC } from 'react';

export const revalidate = 0;

const Header: FC = async () => {
  const categories = await getCategories();

  return (
    <header className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link className="flex ml-4 lg:ml-0 gapx-2" href="/">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <Navbar categories={categories} />
          <NavbarActions />
        </div>
      </Container>
    </header>
  );
};

export default Header;
