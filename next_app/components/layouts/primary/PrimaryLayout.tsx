import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: any;
  link?: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, link }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
        {link}
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
