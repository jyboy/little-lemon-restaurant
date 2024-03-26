import { Link } from 'react-router-dom';
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
              <li key={id}>
                <Link to={path} className="text-xl hover:text-yellow">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
