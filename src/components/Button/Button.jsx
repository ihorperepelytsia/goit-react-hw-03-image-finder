import React from 'react';
import { btn } from './Button.module.css';
import BarLoader from 'react-spinners/BarLoader';
import { btnLoader } from '../../utils/overrideLoader';
import PropTypes from 'prop-types';

const Button = ({ onClick, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <BarLoader
          css={btnLoader}
          height={'6px'}
          width={'180px'}
          color={'#3f51b5'}
        />
      ) : (
        <button className={btn} type="submit" onClick={onClick}>
          Load more...
        </button>
      )}
    </div>
  );
};
// const Button = ({ onClick, isLoading }) => {
//   return (
//     <div>
//       <button className={btn} type="submit" onClick={onClick}>
//         {isLoading ? (
//           <MoonLoader css={btnLoader} size={18} color={'#fff'} />
//         ) : (
//           'Load more...'
//         )}
//       </button>
//     </div>
//   );
// };
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Button;
