import { useRouter } from 'next/router';
import { useState } from 'react';
import IconCross from '../../common/IconCross/IconCross';
import styles from '../RegisterLogin.module.css';
import { useRegistrationUserMutation } from '../../../redux/services/UserServices';
import { IReqInfoUser } from 'redux/store/reducers/userTypes';
import { socialBtns } from '../socialBtnsData';
import SvgIcon from 'components/common/SvgIcons/SvgIcons';
import CustomInput from 'components/common/CustomInput/CustomInput';
import { userApi } from 'pages/api/backend_fastapi/userInstanse';
import InfoInput from 'components/common/InfoInput/InfoInput';
import Loader from 'components/common/Loader/Loader';
import ErrorInfo from 'components/common/InfoInput/ErrorInfo';

export interface IRegister {}

const Register: React.FC<IRegister> = () => {
  const { push } = useRouter();
  const [typeInput, setTypeInput] = useState([
    {
      nameInput: 'reqInput',
      type: 'password',
    },
    {
      nameInput: 'reqInputConfirm',
      type: 'password',
    },
  ]);

  const toggShowPassword = (name: string) => {
    const modifyTypeInput = typeInput.map((item) => {
      if (item.nameInput === name) {
        if (item.type === 'password') {
          item.type = 'text';
        } else {
          item.type = 'password';
        }
      }
      return item;
    });
    setTypeInput(modifyTypeInput);
  };

  // RTK Query
  const [
    regUser,
    {
      data: registrationData,
      isLoading: isRegistrationLoading,
      isSuccess: isRegistrationSuccess,
      isError: isRegistrationError,
    },
  ] = useRegistrationUserMutation();

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  // TODO: can add param phon if need
  // const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userEmailInfo, setUserEmailInfo] = useState('');

  const registrationUser = async () => {
    console.log(' == REGISTRATION == ');
    console.log(
      'registrationUser: from env => URI ',
      process.env.NEXT_PUBLIC_API_URL
    );

    // TODO: add validations for inputs
    if (password !== confirmPassword || userEmailInfo.length > 0) {
      return;
    }
    const reqUserInfoData: IReqInfoUser = {
      username: username,
      email: email,
      // TODO: can add param phon if need
      // phone: phone,
      password: password,
    };

    regUser(reqUserInfoData);
  };

  const checkEmail = async (value: string) => {
    const data = {
      email: value,
    };
    const info = await userApi.checkEmail(data);
    // TODO: from db we can get two variant of info! This logic can change
    if (info === 'user is already registered') {
      setUserEmailInfo(info);
    } else {
      setUserEmailInfo('');
    }
  };

  if (isRegistrationSuccess) push('/user/login');

  console.log('registrationData => ', registrationData);
  console.log('isRegistrationLoading => ', isRegistrationLoading);
  console.log('isRegistrationError => ', isRegistrationError);

  return (
    <div className={styles.container}>
      {isRegistrationLoading && <Loader />}
      {isRegistrationError && <ErrorInfo infoError={'Error ...'} />}
      <div className={styles.asmForm}>
        <IconCross />
        <div className={styles.asmForm__header}>
          <h2>Register</h2>
        </div>
        <div className={styles.asmForm__body}>
          <div className={styles.asmForm__linkbox}>
            Already member?{' '}
            <div
              className={styles.asmForm__link}
              onClick={() => push('/user/login')}
            >
              Sign in
            </div>
          </div>

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
              setValue={setUserName}
              type={'text'}
              placeholder={'user name'}
              complete={'off'}
            />
            <div className={styles.asmForm__error}>
              Username must be [6,20] symbols and contain only small letters and
              numbers
            </div>
          </div>
          <div className={styles.asmForm__inputbox}>
            {userEmailInfo.length > 0 && <InfoInput info={userEmailInfo} />}
            <SvgIcon
              viewBox={'0 0 512 512'}
              path={
                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
              }
              style={`${styles.asmForm__icon} ${styles.prepend}`}
            />
            <CustomInput
              value={email}
              setValue={setEmail}
              type={'email'}
              placeholder={'email'}
              handleFunction={checkEmail}
              complete={'off'}
            />
            <div className={styles.asmForm__error}>Invalid Email</div>
          </div>
          {/* TODO: can add input for phon if need */}
          {/* <div className={styles.asmForm__inputbox}>
            <svg
              className={`${styles.asmForm__icon} ${styles.prepend}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M476.5 22.9L382.3 1.2c-21.6-5-43.6 6.2-52.3 26.6l-43.5 101.5c-8 18.6-2.6 40.6 13.1 53.4l40 32.7C311 267.8 267.8 311 215.4 339.5l-32.7-40c-12.8-15.7-34.8-21.1-53.4-13.1L27.7 329.9c-20.4 8.7-31.5 30.7-26.6 52.3l21.7 94.2c4.8 20.9 23.2 35.5 44.6 35.5C312.3 512 512 313.7 512 67.5c0-21.4-14.6-39.8-35.5-44.6zM69.3 464l-20.9-90.7 98.2-42.1 55.7 68.1c98.8-46.4 150.6-98 197-197l-68.1-55.7 42.1-98.2L464 69.3C463 286.9 286.9 463 69.3 464z" />
            </svg>
            <input
              className={`${styles.asmForm__input} ${styles.validate}`}
              data-validation="regex"
              data-regex="^[+]{1}[0-9]{9,12}"
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="registerPhone"
              required
              placeholder="phone"
            />

            <div className={styles.asmForm__error}>
              Please enter phone in valid international format +XXXXXXXXXXXX
            </div>
          </div> */}
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
              type={typeInput[0].type}
              placeholder={'password'}
              complete={'off'}
            />
            <SvgIcon
              viewBox={'0 0 576 512'}
              path={
                <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
              }
              style={`${styles.asmForm__icon}  ${styles.positionIcon}`}
              handleClick={toggShowPassword}
              param={'reqInput'}
            />
            <div className={styles.asmForm__error}>
              Password must be more than 6 symbols
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
              value={confirmPassword}
              setValue={setConfirmPassword}
              type={typeInput[1].type}
              placeholder={'repeat password'}
              complete={'off'}
            />
            <SvgIcon
              viewBox={'0 0 576 512'}
              path={
                <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
              }
              style={`${styles.asmForm__icon}  ${styles.positionIcon}`}
              handleClick={toggShowPassword}
              param={'reqInputConfirm'}
            />
            <div className={styles.asmForm__error}>Passwords are mismatch</div>
          </div>
          {/* <div className={styles.asmForm__textbox}>
            <span>
              By clicking register you agree to our{' '}
              <a
                href="./eula.html"
                className={styles.asmForm__link}
                target="_blank"
              >
                terms of service
              </a>
            </span>
          </div> */}
        </div>

        <div className={styles.asmForm__footer}>
          <button className={styles.asmForm__btn} onClick={registrationUser}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
