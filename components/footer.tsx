import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t pt-5 pb-5">
      <div className="flex justify-center items-center h-full">
        <p className="text-center text-xs text-black">
          &copy; 2023 StoreName, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
