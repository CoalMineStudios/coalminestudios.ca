import TopBar from '@/components/TopBar';
import type { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default Layout;
