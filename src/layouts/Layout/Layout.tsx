import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import getPageTitle from '../../utils/getPageTitle';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    document.title = getPageTitle(pathname);

    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    const heading = mainRef.current?.querySelector('h1');
    if (heading) {
      heading.tabIndex = -1;
      heading.focus();
    }
  }, [pathname]);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-100 bg-yellow px-4 py-2 text-olive focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Header />
      <main
        id="main"
        ref={mainRef}
        tabIndex={-1}
        className="min-h-[calc(100vh-24rem)] focus:outline-none [&_h1:focus]:outline-none"
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
