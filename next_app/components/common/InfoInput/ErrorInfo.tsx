import styles from './InfoInput.module.css';

export interface IErrorInfo {
  infoError: string;
}

const ErrorInfo: React.FC<IErrorInfo> = ({ infoError }) => {
  return <div className={styles.errorInfo}>{infoError}</div>;
};

export default ErrorInfo;
