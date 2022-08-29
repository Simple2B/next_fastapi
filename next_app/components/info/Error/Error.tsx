import styles from './Error.module.css';

export interface IError {
  message: string;
  subText: string;
}

const Error: React.FC<IError> = ({ message, subText }) => {
  return (
    <div className={styles.container}>
      {/* <h1>{errorPage}</h1> */}
      <p className={styles.zoomArea}>
        <b>{subText}</b> {message}{' '}
      </p>
      <section className={styles.errorContainer}>
        <span>4</span>
        <span>
          <span className={styles.screenReaderText}>0</span>
        </span>
        <span>4</span>
      </section>
      <div className={styles.linkContainer}></div>
    </div>
  );
};

export default Error;
