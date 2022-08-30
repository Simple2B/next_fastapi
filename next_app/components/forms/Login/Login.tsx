import CustomInput from 'components/common/CustomInput/CustomInput';
import SvgIcon from 'components/common/SvgIcons/SvgIcons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { userApiServices } from 'redux/services/UserServices';
import IconCross from '../../common/IconCross/IconCross';
import styles from '../RegisterLogin.module.css';
import { socialBtns } from '../socialBtnsData';

export interface ILogin {}

const Login: React.FC<ILogin> = () => {
  const { push } = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');

  const [loginUser, result] = userApiServices.useLoginUserMutation();
  // console.log(user);

  const toggShowPassword = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  const login = async () => {
    const data = {
      username: username,
      password: password,
    };

    loginUser(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.asmForm}>
        <IconCross />
        <div className={styles.asmForm__header}>
          <h2>Sign In</h2>
        </div>
        <div className={styles.asmForm__body}>
          <div className={styles.asmForm__socialNetworks}>
            {socialBtns.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.asmForm__socialBtn} ${item.style}`}
                >
                  {item.svg}
                </div>
              );
            })}
          </div>

          <div className={styles.asmForm__inputbox}>
            <SvgIcon
              viewBox={'0 0 448 512'}
              path={
                <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
              }
              style={`${styles.asmForm__icon} ${styles.prepend}`}
            />
            <CustomInput
              value={username}
              setValue={setUsername}
              type={'text'}
              placeholder={'user name'}
            />
            <div className={styles.asmForm__error}>
              Username must be [6,20] symbols and contain only small letters and
              numbers
            </div>
          </div>
          <div className={styles.asmForm__inputbox}>
            <SvgIcon
              viewBox={'0 0 512 512'}
              path={
                <path d="M320 48c79.529 0 144 64.471 144 144s-64.471 144-144 144c-18.968 0-37.076-3.675-53.66-10.339L224 368h-32v48h-48v48H48v-96l134.177-134.177A143.96 143.96 0 0 1 176 192c0-79.529 64.471-144 144-144m0-48C213.965 0 128 85.954 128 192c0 8.832.602 17.623 1.799 26.318L7.029 341.088A24.005 24.005 0 0 0 0 358.059V488c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24v-24h24c13.255 0 24-10.745 24-24v-20l40.049-40.167C293.106 382.604 306.461 384 320 384c106.035 0 192-85.954 192-192C512 85.965 426.046 0 320 0zm0 144c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z" />
              }
              style={`${styles.asmForm__icon} ${styles.prepend}`}
            />
            <CustomInput
              value={password}
              setValue={setPassword}
              type={type}
              placeholder={'password'}
            />
            <SvgIcon
              viewBox={'0 0 576 512'}
              path={
                <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
              }
              style={`${styles.asmForm__icon} ${styles.append}`}
              handleClick={toggShowPassword}
            />
            <div className={styles.asmForm__error}>
              Password must be more than 6 symbols
            </div>
          </div>
          <div className={styles.asmForm__leverbox}>
            <label className={styles.asmForm__leverlabel}>
              <input
                className={styles.asmForm__lever}
                type="checkbox"
                name="remember"
              />
              <span className={styles.asmForm__leverText}>Remember me</span>
            </label>
            <div
              className={styles.asmForm__link}
              onClick={() => push('/user/forgot_password')}
            >
              Forgot password
            </div>
          </div>
          <div className={styles.asmForm__linkbox}>
            Not a member?{' '}
            <div
              className={styles.asmForm__link}
              onClick={() => push('/user/registration')}
            >
              Register
            </div>
          </div>
        </div>
        <div className={styles.asmForm__footer}>
          <button className={styles.asmForm__btn} onClick={login}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
