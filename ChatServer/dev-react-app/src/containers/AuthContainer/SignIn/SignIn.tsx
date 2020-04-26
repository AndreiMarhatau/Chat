import React, { useState } from 'react';
import styles from './SignIn.scss';
import { styleNames } from '../../../services/styleNames';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../../actions/sign-in-user.action';

const sn = styleNames(styles);

const SignIn: React.FC = () => {

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
    setState(event.target.value);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(signInUser({Login: login, Password: pass}));
    e.preventDefault();
  }

  return (
    <div className={sn('sign-in')}>
      <form className={sn('sign-in form')} onSubmit={(e) => handleSubmit(e)}>
        <input placeholder='Логин' onChange={e => handleChange(e, setLogin)} />
        <input type='password' placeholder='Пароль' onChange={e => handleChange(e, setPass)} />
        <input type='submit' value='Войти'/>
      </form>
    </div>
  );
}

export default SignIn;