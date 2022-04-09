import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ props: { title, links } }) => (
  <header className="flex flex-row justify-between mx-6 my-8 min-w-[80%]">
    <h1 className="text-5xl mt-2 font-bold text-neutral-800 sm:text-6xl sm:mt-0">
      { title }
    </h1>
    <div>
      { links && links.map((button) => (
        <Link
          key={button.label}
          className="block px-5 py-2 mt-2 hover:bg-amber-600 text-lg font-extralight rounded-2xl bg-amber-500 text-zinc-50 sm:text-xl sm:px-7"
          to={button.href}
        >
          {button.label}
        </Link>
      ))}
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })),
  }).isRequired,
};
