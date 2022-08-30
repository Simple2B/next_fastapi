import styles from './InfoInput.module.css';

export interface IInfoInput {
  info: string;
}

const InfoInput: React.FC<IInfoInput> = ({ info }) => {
  return <div className={styles.infoInput}>{info}</div>;
};

export default InfoInput;
