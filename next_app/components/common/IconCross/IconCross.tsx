import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import styles from './IconCross.module.css';

export interface IIconCross {}

const IconCross: React.FC<IIconCross> = () => {
  const { push } = useRouter();

  return (
    <Icon
      icon="emojione-monotone:cross-mark"
      color="#64c3f0"
      className={styles.iconStyle}
      onClick={() => push('/')}
    />
  );
};

export default IconCross;
