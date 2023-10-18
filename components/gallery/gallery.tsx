'use client';

import GalleryTab from '@/components/gallery/gallery-tab';
import { Image as ImageType } from '@/types/types';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { FC } from 'react';

interface GalleryProps {
  images: ImageType[];
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab image={image} key={image.id} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                alt="Image"
                className="object-cover object-center"
                fill
                src={image.url}
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
