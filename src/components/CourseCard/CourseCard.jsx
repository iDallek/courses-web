import React from 'react';
import PropTypes from 'prop-types';

const CourseCard = ({ content: { id, title, description } }) => (
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
);

export default CourseCard;

CourseCard.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
