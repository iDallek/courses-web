import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ props: { title, links } }) => (
  <header className="flex flex-row justify-between mx-3 my-8 max-w-screen-xl m-auto">
    <h1 className="text-6xl font-bold text-neutral-800">
      { title }
    </h1>
    <div>
      { links && links.map((button) => (
        <Link
          key={button.label}
          className="px-7 hover:bg-amber-400 text-xl font-extralight rounded-3xl bg-amber-500 text-zinc-50"
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
