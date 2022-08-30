import styles from './Loader.module.css';

export interface ILoader {}

const Loader: React.FC<ILoader> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
