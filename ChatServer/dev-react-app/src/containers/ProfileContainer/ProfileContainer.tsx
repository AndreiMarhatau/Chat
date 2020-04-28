import React, { useState } from 'react';
import styles from './ProfileContainer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { styleNames } from '../../services/styleNames';
import { useConfirm } from '../../hooks/useConfirm';
import { changePassword } from '../../actions/change-password.action';
import { changedPasswordStatusSelector, ChangedPasswordStatus } from '../../selectors/changed-password-status.selector';

const sn = styleNames(styles);

const ProfileContainer: React.FC = () => {

  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [repeatNewPass, setRepeatNewPass] = useState('');
  const newRepeatEquals = useConfirm(newPass, repeatNewPass);
  const oldNewEquals = useConfirm(oldPass, newPass);
  const status = useSelector(changedPasswordStatusSelector);

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
    setState(event.target.value);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(changePassword({oldPassword: oldPass, newPassword: newPass}, 5000));
    e.preventDefault();
  }

  return (
    <div className={sn('profile')}>
      <form className={sn('change-password-form')} onSubmit={(e) => handleSubmit(e)}>
        <input placeholder='Старый пароль' onChange={e => handleChange(e, setOldPass)} />
        {status === ChangedPasswordStatus.failed && <p>Неверно введен старый пароль</p>}
        <input type='password' placeholder='Новый пароль' onChange={e => handleChange(e, setNewPass)} />
        <input type='password' placeholder='Подтвердите пароль' onChange={e => handleChange(e, setRepeatNewPass)} />
        {!newRepeatEquals.isMatchAndFilled && !newRepeatEquals.isEmptySecondField && <p>Пароли не совпадают</p>}
        {oldNewEquals.isMatchAndFilled && <p>Новый пароль совпадает со старым</p>}
        <input type='submit' value='Изменить' disabled={!newRepeatEquals.isMatchAndFilled || oldNewEquals.isMatchAndFilled}/>
        {status === ChangedPasswordStatus.success && <p>Пароль успешно изменен!</p>}
      </form>
    </div>
  );
}

export default ProfileContainer;