import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export function Loading() {
  return (
    <>
      <FontAwesomeIcon icon={faSpinner} className="load" spin rotation={360} />
    </>
  );
}

export default Loading;
