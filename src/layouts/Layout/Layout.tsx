import type { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-24rem)]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
