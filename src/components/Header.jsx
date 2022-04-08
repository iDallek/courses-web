import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Header = ({ props: { title, buttons } }) => (
  <header className="flex flex-row justify-between mx-3 my-8 max-w-screen-xl m-auto">
    <h1 className="text-6xl font-bold text-neutral-800">
      { title }
    </h1>
  </header>
);

export default Header;

Header.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func,
    })),
  }).isRequired,
};
