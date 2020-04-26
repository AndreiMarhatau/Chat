import React from 'react';
import styles from './AuthContainer.scss';
import { styleNames } from '../../services/styleNames';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const sn = styleNames(styles);

interface AuthProps {
  isSignIn: boolean;
}

const AuthContainer: React.FC<AuthProps> = (props: AuthProps) => {
  
  let component;
  if(props.isSignIn === true){
    component = <SignIn/>;
  }
  else{
    component = <SignUp/>;
  }

  return (
    <div className={sn('auth-container')}>
      {component}
    </div>
  );
}

export default AuthContainer;