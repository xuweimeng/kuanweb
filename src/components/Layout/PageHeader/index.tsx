import React from 'react';
import Link from 'next/link'
import styles from '../index.module.scss';

export default function PageHeader() {
  return (
    <div className={styles.pageHeader}>
     <div className={styles.main}>
      <Link href="/" className={styles.logoContainer}>酷安</Link>
      <ul className={styles.mainUl}>
        <li> <Link href="/">首页</Link></li>
        <li> <Link href="/about">关于</Link></li>
        <li> <Link href="/concat">联系我们</Link></li>
      </ul>
     </div>
    </div>
  );
}
