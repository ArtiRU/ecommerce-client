'use client';

import { priceFormatter } from '@/lib/utils';
import { FC, useEffect, useState } from 'react';

interface CurrencyProps {
  value: number | string;
}

const Currency: FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold">{priceFormatter.format(Number(value))}</div>
  );
};

export default Currency;
