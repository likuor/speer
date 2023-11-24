import React from 'react';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

const switchIcon = (direction, callType) => {
  if (direction === 'outbound') {
    if (callType === 'missed') {
      return <PhoneForwardedIcon />;
    }

    // no icon for answered
    if (callType === 'answered') {
      return;
    }
  }

  if (direction === 'inbound') {
    if (callType === 'missed') {
      return <PhoneMissedIcon style={{ color: 'red' }} />;
    }

    // no icon for answered
    if (callType === 'answered') {
      return;
    }

    if (callType === 'voicemail') {
      return <PermPhoneMsgIcon style={{ color: 'red' }} />;
    }
  }
};

export default switchIcon;
