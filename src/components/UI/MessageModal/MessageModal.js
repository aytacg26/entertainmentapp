import React from 'react';
import './messageModal.css';
import ErrorOutlinedIcon from '@material-ui/icons/ErrorOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

const MessageModal = ({ message, messageHeader, type }) => {
  const modalClass = !message ? 'modal-container' : 'modal-container active';
  const icon =
    type === 'error' ? (
      <ErrorOutlinedIcon fontSize='large' />
    ) : type === 'info' ? (
      <InfoOutlinedIcon fontSize='large' />
    ) : (
      <HelpOutlineOutlinedIcon fontSize='large' />
    );

  return (
    <div className={modalClass}>
      <div className='message-container'>
        <div className={`modal-header-${type}`}>
          {icon}
          <span className='header-text'>{messageHeader}</span>
        </div>
        <div className='message-area'>{message}</div>
      </div>
    </div>
  );
};

export default MessageModal;
