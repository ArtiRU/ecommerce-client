import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto pt-10">
        <p className="text-center text-xs text-black">
          &copy; 2023 StoreName, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;