'use client';

import Filter from '@/app/(routes)/category/[categoryId]/component/filter';
import Button from '@/components/ui/button';
import IconButton from '@/components/ui/icon-button';
import { Color, Size } from '@/types/types';
import { Dialog } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import { FC, useState } from 'react';

interface MobileFiltersProps {
  colors: Color[];
  sizes: Size[];
}

const MobileFilters: FC<MobileFiltersProps> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button className="flex items-center gapx-x-2 lg:hidden" onClick={onOpen}>
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
        open={open}
      >
        <div className="fexid inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className="p-4">
              <Filter data={sizes} name="Sizes" valueKey="sizeId" />
              <Filter data={colors} name="Colors" valueKey="colorId" />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
