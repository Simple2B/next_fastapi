import arrowBack from '@iconify/icons-bx/arrow-back';
import searchIcon from '@iconify/icons-bx/search';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {}

const sidebarItems = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/about',
    name: 'About',
  },
  {
    href: '/service',
    name: 'Service',
  },
  {
    href: '/project',
    name: 'Project',
  },
  {
    href: '/support',
    name: 'Support',
  },
  // {
  //   href: '/login',
  //   name: 'login',
  // },
];

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveSearch, setIsActiveSearch] = useState(false);

  const toggleBurgerMenu = () => {
    setIsActive(!isActive);
  };

  const closeBurgerMenu = () => {
    setIsActive(false);
  };

  const openSearch = () => {
    setIsActiveSearch(true);
  };

  const closeSearch = () => {
    setIsActiveSearch(false);
  };

  return (
    <header className={styles.header} id="header">
      <nav className={`${styles.navbar} ${styles.container}`}>
        <Link href="/">
          <a className={styles.brand}>Brand</a>
        </Link>
        <div className={styles.burger} id="burger" onClick={toggleBurgerMenu}>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </div>
        <span
          className={
            isActive
              ? `${styles.overlay} ${styles.isActive}`
              : `${styles.overlay}`
          }
          onClick={toggleBurgerMenu}
        ></span>
        <div
          className={
            isActive ? `${styles.menu} ${styles.isActive}` : `${styles.menu}`
          }
          // id="menu"
        >
          <ul className={styles.menuInner}>
            {sidebarItems.map((item, index) => {
              return (
                <li
                  className={styles.menuItem}
                  onClick={closeBurgerMenu}
                  key={index}
                >
                  <Link href={item.href}>
                    <a className={styles.menuLink}>{item.name}</a>
                  </Link>
                </li>
              );
            })}
            <li className={styles.menuItem} onClick={closeBurgerMenu}>
              <Link href={'/user/login'}>
                <a className={styles.menuLogin}>
                  <Icon
                    className={styles.iconSize}
                    icon="ri:login-circle-line"
                  />
                  {/* <Icon
                    className={styles.iconSize}
                    icon="ri:account-circle-line"
                  /> */}
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <span>
          <Icon
            icon={searchIcon}
            className={styles.searchToggle}
            onClick={openSearch}
          />
        </span>
        <div
          className={
            isActiveSearch
              ? `${styles.searchBlock} ${styles.isActive}`
              : `${styles.searchBlock}`
          }
        >
          <div className={styles.searchForm}>
            <span>
              <Icon
                icon={arrowBack}
                className={styles.searchCancel}
                onClick={closeSearch}
              />
            </span>
            <input
              type="search"
              name="search"
              className={styles.searchInput}
              placeholder="Search here..."
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SidebarLayout;
