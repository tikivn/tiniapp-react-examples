import * as React from 'react';
import { Button } from '@tiki-miniapp/remax/ali';
import './index.css';

const LoginButton = ({ login, children }) => {
  return (
    <Button className="login-button" hoverClassName="none" onClick={login}>
      {children}
    </Button>
  );
};

export default LoginButton;
