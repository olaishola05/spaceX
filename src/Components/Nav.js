import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  const { title } = props;

  return (
    <button type="button" className="nav-button ">
      {title}
    </button>
  );
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Nav;
