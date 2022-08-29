import styles from './Success.module.css';

export interface ISuccess {
  message: string;
}

const Success: React.FC<ISuccess> = ({ message }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div
          className={styles.card_iconContainer}
          style={{
            borderRadius: '200px',
            height: '200px',
            width: '200px',
            background: '#F8FAF5',
            margin: '0 auto',
          }}
        >
          <i className={styles.checkmark}>✓</i>
        </div>
        <h1 className={styles.card_text}>Success</h1>
        <p className={styles.card_message}>{message}</p>
      </div>
    </div>
  );
};

export default Success;
