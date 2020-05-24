import React from 'react';
import { btn } from './Button.module.css';
import MoonLoader from 'react-spinners/MoonLoader';
import { btnLoader } from '../../utils/overrideLoader';
import PropTypes from 'prop-types';

const Button = ({ onClick, isLoading }) => {
  return (
    <div>
      <button className={btn} type="submit" onClick={onClick}>
        {isLoading ? (
          <MoonLoader css={btnLoader} size={18} color={'#fff'} />
        ) : (
          'Load more...'
        )}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Button;
