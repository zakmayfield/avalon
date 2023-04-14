import type { V2_MetaFunction } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Discord Navigation Clone' }];
};

export default function Index() {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center'>Hello there, General Kenobi.</h1>
    </div>
  );
}
