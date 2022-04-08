import React from 'react';
import PropTypes from 'prop-types';

const CourseCard = ({
  content: {
    id, title, description, onClick,
  },
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div onClick={onClick} role="button" tabIndex="0">
    <div role="article">
      <span role="heading" aria-level={2}>
        { `${id}` }
      </span>
      <h1>
        { title }
      </h1>
      <p role="paragraph">
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
