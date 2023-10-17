import { cn } from '@/lib/utils';
import { FC, MouseEventHandler, ReactElement } from 'react';

interface IconButtonProps {
  className?: string;
  icon: ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconButton: FC<IconButtonProps> = ({ className, icon, onClick }) => {
  return (
    <button
      className={cn(
        'rounded-full flex items-center justify-center ' +
          'bg-white border shadow-md p-2 hover:scale-110 transition',
        className,
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
