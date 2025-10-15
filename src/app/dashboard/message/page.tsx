'use client';
import React, { FC, useState } from 'react';
import { Button } from '@/components/primitives/Button';

type TypeKey = 'newest' | 'oldest' | 'unknown';
export const Message = () => {
  const dataNew = [1, 2, 3];
  const dataOld = [1, 2, 3, 4, 5, 6];
  const dataUnknown = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [type, setType] = useState<TypeKey>('newest');
  return (
    <div className='p-4 min-w-[300px] max-w-[300px]'>
      <div className='flex items-center gap-3'>
        <Button
          variant={type === 'newest' ? 'primary' : 'ghost'}
          className='w-fit'
          onClick={() => setType('newest')}
        >
          Newest
        </Button>
        <Button
          variant={type === 'oldest' ? 'primary' : 'ghost'}
          className='w-fit'
          onClick={() => setType('oldest')}
        >
          Oldest
        </Button>
        <Button
          variant={type === 'unknown' ? 'primary' : 'ghost'}
          className='w-fit'
          onClick={() => setType('unknown')}
        >
          Unknown
        </Button>
      </div>
      {type === 'newest' ? (
        <TabData title='Newest Data' list={dataNew} type='newest' />
      ) : type === 'oldest' ? (
        <TabData title='Oldest Data' list={dataOld} type='oldest' />
      ) : (
        <TabData title='Unknown Data' list={dataUnknown} type='unknown' />
      )}
    </div>
  );
};

type TastDataProps = {
  title: string;
  list: number[];
  type: 'newest' | 'oldest' | 'unknown';
};
const TabData: FC<TastDataProps> = ({ title, list, type }) => {
  if (type === 'newest') {
    return (
      <div>
        <h2 className='text-lg font-bold mb-4'>{title}</h2>
        <ul>
          {list.map((item, index) => (
            <li key={index} className='mb-2 p-2 border rounded'>
              New Item {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (type === 'oldest') {
    return (
      <div>
        <h2 className='text-lg font-bold mb-4'>{title}</h2>
        <ul>
          {list.map((item, index) => (
            <li key={index} className='mb-2 p-2 border rounded'>
              Old Item {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <h2 className='text-lg font-bold mb-4'>{title}</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index} className='mb-2 p-2 border rounded'>
            Unknown Item {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
