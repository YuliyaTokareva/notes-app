import React from 'react';

import './btnCustom.scss';

const BtnCustom = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default BtnCustom;
