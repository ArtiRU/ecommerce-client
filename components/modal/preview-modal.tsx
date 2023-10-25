'use client';

import Gallery from '@/components/gallery/gallery';
import Info from '@/components/info';
import Modal from '@/components/modal';
import { useModalStore } from '@/hooks/useModalStore';
import { FC } from 'react';

interface PreviewModalProps {}

const PreviewModal: FC<PreviewModalProps> = () => {
  const { data: product, isOpen, onClose } = useModalStore();

  if (!product) {
    return null;
  }
  return (
    <Modal onClose={onClose} open={isOpen}>
      <div className="grid w-full grid-cols-1 items-start gapx-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-4">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info product={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
