import '@uiw/github-corners';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/logo.svg';
import pageList from '../../utils/pageList';

const Header = () => {
  return (
    <header className="flex h-24 justify-center">
      <div className="flex w-256 items-center justify-between">
        <img src={logoImage} alt="Little Lemon logo" className="h-12" />
        <nav>
          <ul className="flex justify-between gap-x-8">
            {pageList.map(({ id, name, path }) => (
              <li key={id} className="text-xl">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'text-yellow' : '"hover:text-yellow"'
                  }
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
        target="__blank"
        href="https://github.com/jyboy/little-lemon-restaurant"
      />
    </header>
  );
};

export default Header;
