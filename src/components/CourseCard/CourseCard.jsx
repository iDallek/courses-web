import React from 'react';
import PropTypes from 'prop-types';

const CourseCard = ({
  content: {
    id, title, description, onClick,
  },
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div
    onClick={onClick}
    role="button"
    tabIndex="0"
    className="relative m-6 w-80 h-60 bg-white shadow-lg rounded-xl hover:shadow-xl"
  >
    <i
      className="absolute -left-4 top-8 w-72 h-12 bg-amber-500 rounded-3xl rounded-bl-none before:content-[''] before:absolute before:w-4 before:h-8 before:bg-amber-600 before:top-12 before:rounded-l-2xl before:z-10 after:content-[''] after:absolute after:w-4 after:h-4 after:top-12 after:bg-amber-500"
    />
    <div
      role="article"
      className="absolute w-full h-full top-5 left-0"
    >
      <span
        role="heading"
        aria-level={2}
        className="text-2xl font-black absolute -top-4 right-2 text-gray-300"
      >
        { `# ${id}` }
      </span>
      <h1
        className="text-3xl font-extralight text-white absolute top-5 left-4"
      >
        { title }
      </h1>
      <p
        role="paragraph"
        className="absolute top-1/2 -mt-4 mx-5 font-light text-gray-400"
      >
        { description }
      </p>
    </div>
  </div>
);

export default CourseCard;

CourseCard.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func,
  }).isRequired,
};
