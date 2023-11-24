import handleDuration from './handleDuration';

const handleDetail = (direction, callType, duration) => {
  if (direction === 'outbound') {
    if (callType === 'missed') {
      return "Didn't answer your call";
    }

    // no icon for answered
    if (callType === 'answered') {
      return `Chatted for ${handleDuration(duration)}`;
    }
  }

  if (direction === 'inbound') {
    if (callType === 'missed') {
      return 'Missed this call';
    }

    // no icon for answered
    if (callType === 'answered') {
      return `Chatted for ${handleDuration(duration)}`;
    }

    if (callType === 'voicemail') {
      return 'Got a voicemail';
    }
  }
};

export default handleDetail;
