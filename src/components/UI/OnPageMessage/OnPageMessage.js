import React from 'react';
import nomovie from '../../../images/nomovie.png';
import SignalCellularConnectedNoInternet0BarIcon from '@material-ui/icons/SignalCellularConnectedNoInternet0Bar';
import './onpagemessage.css';
import PropTypes from 'prop-types';

const OnPageMessage = ({ message }) => {
  const image =
    message === 'No Internet Connection...' ? (
      <SignalCellularConnectedNoInternet0BarIcon
        fontSize='large'
        color='error'
      />
    ) : (
      <img src={nomovie} alt={message} title={message} />
    );

  return (
    <div className='onpage-message'>
      {image}
      <span>{message}</span>
    </div>
  );
};

OnPageMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default OnPageMessage;
