import type { V2_MetaFunction } from '@remix-run/react';
import SideBar from '~/components/SideBar';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Discord Navigation Clone' }];
};

export default function Index() {
  return (
    <div>
      <SideBar />
    </div>
  );
}
