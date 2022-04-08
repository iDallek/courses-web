import React from 'react';
import PropTypes from 'prop-types';

const CourseCard = ({ content: { id } }) => (
  <div role="article">
    <span role="heading" aria-level={2}>
      { `${id}` }
    </span>
  </div>
);

export default CourseCard;

CourseCard.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
