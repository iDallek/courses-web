import React from 'react';
import PropTypes from 'prop-types';

const CourseCard = ({ content: { id, title } }) => (
  <div role="article">
    <span role="heading" aria-level={2}>
      { `${id}` }
    </span>
    <h1>
      { title }
    </h1>
  </div>
);

export default CourseCard;

CourseCard.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};
