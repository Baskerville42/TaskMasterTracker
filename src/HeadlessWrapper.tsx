import * as React from 'react';

import App from './App';

const HeadlessWrapper: React.FC<{isHeadless: boolean}> = ({isHeadless}) => {
  if (isHeadless) {
    return null;
  }
  return <App />;
};

export default HeadlessWrapper;
