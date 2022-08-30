import CustomInput from 'components/common/CustomInput/CustomInput';
import SvgIcon from 'components/common/SvgIcons/SvgIcons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import IconCross from '../../common/IconCross/IconCross';
import styles from '../RegisterLogin.module.css';

export interface IForgotPassword {}

const ForgotPassword: React.FC<IForgotPassword> = () => {
  const { push } = useRouter();

  const [email, setEmail] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.asmForm}>
        <IconCross />
        <div className={styles.asmForm__header}>
          <h2>Forget Password</h2>
        </div>
        <div className={styles.asmForm__body}>
          <div className={styles.asmForm__linkbox}>
            <button
              className={styles.asmForm__link}
              onClick={() => push('/user/login')}
            >
              Sign in
            </button>
          </div>
          <div className={styles.asmForm__inputbox}>
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
            />
            <label className={styles.asmForm__inputlabel} htmlFor="forgetEmail">
              email
            </label>
            <div className={styles.asmForm__error}>Invalid Email</div>
          </div>
          <div className={styles.asmForm__linkbox}>
            Not a member?{' '}
            <button
              className={styles.asmForm__link}
              onClick={() => push('/user/registration')}
            >
              Register
            </button>
          </div>
        </div>

        <div className={styles.asmForm__footer}>
          <button
            className={styles.asmForm__btn}
            // id="forgetSubmit"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
