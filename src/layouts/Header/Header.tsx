import '@uiw/github-corners';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../../assets/logo.svg';
import pageList from '../../utils/pageList';

const Header = () => {
  return (
    <header className="flex h-24 justify-center">
      <div className="flex w-256 items-center justify-between">
        <Link to="/">
          <img
            src={logoImage}
            alt="Little Lemon, home"
            className="h-12"
            data-testid="header-logo"
          />
        </Link>
        <nav aria-label="Main">
          <ul className="flex justify-between gap-x-8">
            {pageList.map(({ id, name, path }) => (
              <li key={id} className="text-xl">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-bold text-olive underline decoration-yellow decoration-4 underline-offset-8'
                      : 'underline-offset-8 hover:underline hover:decoration-yellow hover:decoration-4'
                  }
                  data-testid={id}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <github-corners
        position="absolute"
        width={64}
        height={64}
        href="https://github.com/jyboy/little-lemon-restaurant"
        target="_blank"
      />
    </header>
  );
};

export default Header;
