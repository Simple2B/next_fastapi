import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './RegisterLogin.module.css';
export interface IRegisterLogin {}

const RegisterLogin: React.FC<IRegisterLogin> = () => {
  const { push } = useRouter();
  const backHomeBtn = (
    <Icon
      icon="emojione-monotone:cross-mark"
      color="#64c3f0"
      className={styles.iconStyle}
      onClick={() => push('/')}
    />
  );

  const [typeInput, setTypeInput] = useState([
    {
      nameInput: 'loginInput',
      type: 'password',
    },
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

  const [formName, setFormName] = useState('frmSignIn');

  const showForm = (name: string) => setFormName(name);

  return (
    <div className={styles.container}>
      <form
        action="#"
        className={
          formName === 'frmSignIn'
            ? `${styles.asmForm} ${styles.active}`
            : `${styles.asmForm}`
        }
        id="frmSignIn"
        noValidate
        onSubmit={() => 'return validateForm(this)'}
      >
        {backHomeBtn}
        <div className={styles.asmForm__header}>
          <h2>Sign In</h2>
        </div>
        <div className={styles.asmForm__body}>
          <div className={styles.asmForm__socialNetworks}>
            <button
              className={`${styles.asmForm__socialBtn} ${styles.facebook}`}
              data-action="social-login"
              data-network="facebook"
              type="button"
            >
              <svg
                className={styles.asmForm__socialIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  className={styles.inner}
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </button>
            <button
              className={`${styles.asmForm__socialBtn} ${styles.twitter}`}
              data-action="social-login"
              data-network="twitter"
              type="button"
            >
              <svg
                className={styles.asmForm__socialIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  className={styles.inner}
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </button>
            <button
              className={`${styles.asmForm__socialBtn} ${styles.google}`}
              data-action="social-login"
              data-network="google"
              type="button"
            >
              <svg
                className={styles.asmForm__socialIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  className={styles.inner}
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                />
              </svg>
            </button>
            <button
              className={`${styles.asmForm__socialBtn} ${styles.linkedin}`}
              data-action="social-login"
              data-network="linkedin"
              type="button"
            >
              <svg
                className={styles.asmForm__socialIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  className={styles.inner}
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </button>
          </div>
          <div className={styles.asmForm__inputbox}>
            <svg
              className={`${styles.asmForm__icon} ${styles.prepend}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
            </svg>
            <input
              className={`${styles.asmForm__input} ${styles.validate}`}
              data-validation="regex"
              data-regex="^[a-z0-9]{6,20}$"
              type="text"
              name="username"
              id="signinUsername"
              required
              placeholder="username"
            />

            <div className={styles.asmForm__error}>
              Username must be [6,20] symbols and contain only small letters and
              numbers
            </div>
          </div>
          <div className={styles.asmForm__inputbox}>
            <svg
              className={`${styles.asmForm__icon} ${styles.prepend}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M320 48c79.529 0 144 64.471 144 144s-64.471 144-144 144c-18.968 0-37.076-3.675-53.66-10.339L224 368h-32v48h-48v48H48v-96l134.177-134.177A143.96 143.96 0 0 1 176 192c0-79.529 64.471-144 144-144m0-48C213.965 0 128 85.954 128 192c0 8.832.602 17.623 1.799 26.318L7.029 341.088A24.005 24.005 0 0 0 0 358.059V488c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24v-24h24c13.255 0 24-10.745 24-24v-20l40.049-40.167C293.106 382.604 306.461 384 320 384c106.035 0 192-85.954 192-192C512 85.965 426.046 0 320 0zm0 144c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z" />
            </svg>
            <input
              className={`${styles.asmForm__input} ${styles.validate}`}
              data-validation="regex"
              data-regex=".{6,}"
              type={typeInput[0].type}
              name="password"
              id="signinPassword"
              required
              placeholder="password"
            />

            <svg
              className={`${styles.asmForm__icon} ${styles.append}`}
              data-action="toggle-show-password"
              data-input="#signinPassword"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              onClick={() => toggShowPassword('loginInput')}
            >
              <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
            </svg>
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
                id="signinRemember"
              />
              <span className={styles.asmForm__leverText}>Remember me</span>
            </label>
            <button
              type="button"
              className={styles.asmForm__link}
              data-action="show-form"
              onClick={() => showForm('frmForget')}
              data-target="#frmForget"
            >
              Forgot password
            </button>
          </div>
          <div className={styles.asmForm__linkbox}>
            Not a member?{' '}
            <button
              type="button"
              className="asm-form__link"
              data-action="show-form"
              data-target="#frmRegister"
              onClick={() => showForm('frmRegister')}
            >
              Register
            </button>
          </div>
        </div>

        <div className={styles.asmForm__footer}>
          <button className={styles.asmForm__btn} id="signinSubmit">
            Sign In
          </button>
        </div>
      </form>

      <form
        action="#"
        className={
          formName === 'frmForget'
            ? `${styles.asmForm} ${styles.active}`
            : `${styles.asmForm}`
        }
        id="frmForget"
        noValidate
        onSubmit={() => 'return validateForm(this)'}
      >
        {backHomeBtn}
        <div className={styles.asmForm__header}>
          <h2>Forget Password</h2>
        </div>
        <div className={styles.asmForm__body}>
          <div className={styles.asmForm__linkbox}>
            <button
              type="button"
              className={styles.asmForm__link}
              data-action="show-form"
              onClick={() => showForm('frmSignIn')}
              data-target="#frmSignIn"
            >
              Sign in
            </button>
          </div>
          <div className={styles.asmForm__inputbox}>
            <svg
              className={`${styles.asmForm__icon} ${styles.prepend}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
            </svg>
            <input
              className={`${styles.asmForm__input} ${styles.validate}`}
              data-validation="regex"
              data-regex="\S+@\S+\.\S+"
              type="email"
              name="email"
              id="forgetEmail"
              required
              placeholder="email"
            />
            <label className={styles.asmForm__inputlabel} htmlFor="forgetEmail">
              email
            </label>
            <div className={styles.asmForm__error}>Invalid Email</div>
          </div>
          <div className={styles.asmForm__linkbox}>
            Not a member?{' '}
            <button
              type="button"
              className={styles.asmForm__link}
              data-action="show-form"
              data-target="#frmRegister"
              onClick={() => showForm('frmRegister')}
            >
              Register
            </button>
          </div>
        </div>

        <div className={styles.asmForm__footer}>
          <button className={styles.asmForm__btn} id="forgetSubmit">
            Send
          </button>
        </div>
      </form>

      <form
        action="#"
        className={
          formName === 'frmRegister'
            ? `${styles.asmForm} ${styles.active}`
            : `${styles.asmForm}`
        }
        id="frmRegister"
        noValidate
        onSubmit={() => 'return validateForm(this)'}
      >
        {backHomeBtn}
        <div className={styles.asmForm__header}>
          <h2>Register</h2>
        </div>
        <div className={styles.asmForm__body}>
          <div className={styles.asmForm__linkbox}>
            Already member?{' '}
            <button
              type="button"
              className={styles.asmForm__link}
              data-action="show-form"
              data-target="#frmSignIn"
              onClick={() => showForm('frmSignIn')}
            >
              Sign in
            </button>
          </div>
          <div className={styles.asmForm__socialNetworks}>
            <button
              className={`${styles.asmForm__socialBtn} ${styles.facebook}`}
              data-action="social-login"
              data-network="facebook"
              type="button"
            >
              <svg
                className={styles.asmForm__socialIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  className={styles.inner}
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </button>
            <button
              className={`${styles.asmForm__socialBtn} ${styles.twitter}`}
              data-action="social-login"
              data-network="twitter"
              type="button"
            >
              <svg
                className={styles.asmForm__socialIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  className={styles.inner}
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </button>
            <button
              className={`${styles.asmForm__socialBtn} ${styles.google}`}
              data-action="social-login"
              data-network="google"
              type="button"
            >
              <svg
                className={styles.asmForm__socialIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  className={styles.inner}
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                />
              </svg>
            </button>
            <button
              className={`${styles.asmForm__socialBtn} ${styles.linkedin}`}
              data-action="social-login"
              data-network="linkedin"
              type="button"
            >
              <svg
                className={styles.asmForm__socialIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  className={styles.inner}
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </button>
          </div>
          <div className={styles.asmForm__inputbox}>
            <svg
              className={`${styles.asmForm__icon} ${styles.prepend}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
            </svg>
            <input
              className={`${styles.asmForm__input} ${styles.validate}`}
              data-validation="regex"
              data-regex="^[a-z0-9]{6,20}$"
              type="text"
              name="username"
              id="registerUsername"
              required
              placeholder="username"
            />

            <div className={styles.asmForm__error}>
              Username must be [6,20] symbols and contain only small letters and
              numbers
            </div>
          </div>
          <div className={styles.asmForm__inputbox}>
            <svg
              className={`${styles.asmForm__icon} ${styles.prepend}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
            </svg>
            <input
              className={`${styles.asmForm__input} ${styles.validate}`}
              data-validation="regex"
              data-regex="\S+@\S+\.\S+"
              type="email"
              name="email"
              id="registerEmail"
              required
              placeholder="email"
            />

            <div className={styles.asmForm__error}>Invalid Email</div>
          </div>
          <div className={styles.asmForm__inputbox}>
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
              id="registerPhone"
              required
              placeholder="phone"
            />

            <div className={styles.asmForm__error}>
              Please enter phone in valid international format +XXXXXXXXXXXX
            </div>
          </div>
          <div className={styles.asmForm__inputbox}>
            <svg
              className={`${styles.asmForm__icon} ${styles.prepend}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M320 48c79.529 0 144 64.471 144 144s-64.471 144-144 144c-18.968 0-37.076-3.675-53.66-10.339L224 368h-32v48h-48v48H48v-96l134.177-134.177A143.96 143.96 0 0 1 176 192c0-79.529 64.471-144 144-144m0-48C213.965 0 128 85.954 128 192c0 8.832.602 17.623 1.799 26.318L7.029 341.088A24.005 24.005 0 0 0 0 358.059V488c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24v-24h24c13.255 0 24-10.745 24-24v-20l40.049-40.167C293.106 382.604 306.461 384 320 384c106.035 0 192-85.954 192-192C512 85.965 426.046 0 320 0zm0 144c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z" />
            </svg>
            <input
              className={`${styles.asmForm__input} ${styles.validate}`}
              data-validation="regex"
              data-regex=".{6,}"
              type={typeInput[1].type}
              name="password"
              id="registerPassword"
              required
              placeholder="password"
            />

            <svg
              className={`${styles.asmForm__icon}  ${styles.positionIcon}`}
              data-action="toggle-show-password"
              data-input="#registerPassword"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              onClick={() => toggShowPassword('reqInput')}
            >
              <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
            </svg>
            <div className={styles.asmForm__error}>
              Password must be more than 6 symbols
            </div>
          </div>
          <div className={styles.asmForm__inputbox}>
            <svg
              className={`${styles.asmForm__icon} ${styles.prepend}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M320 48c79.529 0 144 64.471 144 144s-64.471 144-144 144c-18.968 0-37.076-3.675-53.66-10.339L224 368h-32v48h-48v48H48v-96l134.177-134.177A143.96 143.96 0 0 1 176 192c0-79.529 64.471-144 144-144m0-48C213.965 0 128 85.954 128 192c0 8.832.602 17.623 1.799 26.318L7.029 341.088A24.005 24.005 0 0 0 0 358.059V488c0 13.255 10.745 24 24 24h144c13.255 0 24-10.745 24-24v-24h24c13.255 0 24-10.745 24-24v-20l40.049-40.167C293.106 382.604 306.461 384 320 384c106.035 0 192-85.954 192-192C512 85.965 426.046 0 320 0zm0 144c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z" />
            </svg>
            <input
              className={`${styles.asmForm__input} ${styles.validate}`}
              data-validation="match"
              data-target="#registerPassword"
              type={typeInput[2].type}
              name="password"
              id="registerPasswordRetry"
              required
              placeholder="repeat password"
            />
            <svg
              className={`${styles.asmForm__icon} ${styles.positionIcon}`}
              data-action="toggle-show-password"
              data-input="#registerPasswordRetry"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              onClick={() => toggShowPassword('reqInputConfirm')}
            >
              <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
            </svg>
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
          <button className={styles.asmForm__btn} id="registerSubmit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterLogin;
