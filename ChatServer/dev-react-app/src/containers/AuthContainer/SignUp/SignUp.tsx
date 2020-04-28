import React, { useState } from 'react';
import styles from './SignUp.scss';
import { styleNames } from '../../../services/styleNames';
import { useDispatch } from 'react-redux';
import { registerNewUser } from '../../../actions/register-new-user.action';
import { useConfirm } from '../../../hooks/useConfirm';

const sn = styleNames(styles);

const SignUp: React.FC = () => {

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const confirm = useConfirm(pass, repeatPass);
  const dispatch = useDispatch();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
    setState(event.target.value);
  }

  const handleRepeatPassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event, setRepeatPass);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(registerNewUser({Login: login, Password: pass}));
    e.preventDefault();
  }

  return (
    <div className={sn('sign-up')}>
      <form className={sn('sign-up form')} onSubmit={(e) => handleSubmit(e)}>
        <input placeholder='Логин' onChange={e => handleChange(e, setLogin)} />
        <input type='password' placeholder='Пароль' onChange={e => handleChange(e, setPass)} />
        <input type='password' placeholder='Подтвердите пароль' onChange={e => handleRepeatPassChange(e)} />
        {!confirm.isMatchAndFilled && !confirm.isEmptySecondField && <p>Пароли не совпадают</p>}
        <input type='submit' value='Зарегистрироваться' disabled={!confirm.isMatchAndFilled}/>
      </form>
    </div>
  );
}

export default SignUp;