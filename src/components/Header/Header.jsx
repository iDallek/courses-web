import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ props: { title, buttons } }) => (
  <header className="flex flex-row justify-between mx-3 my-8 max-w-screen-xl m-auto">
    <h1 className="text-6xl font-bold text-neutral-800">
      { title }
    </h1>
    <div>
      { buttons && buttons.map((button) => (
        <button
          key={button.label}
          className="px-7 hover:bg-amber-400 text-xl font-extralight rounded-3xl bg-amber-500 text-zinc-50"
          type="button"
          onClick={button.onClick}
          data-testid="HeaderButton"
        >
          {button.label}
        </button>
      ))}
    </div>
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
