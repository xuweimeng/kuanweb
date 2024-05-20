"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../index.module.scss";
import coolapklogo from "../../../../public/images/jililogo.png";
import { appRouterList } from "./constant";

export default function PageHeader() {
  const [activeTab, setActiveTab] = useState("home");

  const onClickNavvItem = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.pageHeader}>

      <div className={styles.main}>

        <Link href="/" className={styles.logoContainer}>
          <div className={styles.logoapk}>
            <Image
              src={coolapklogo}
              alt="coolapklogo"
              className={styles.coolapklogo}
            />
          </div>
        </Link>

        <ul className={styles.mainUl}>
          {appRouterList.map((item) => (
            <li
              key={item.key}
              onClick={() => onClickNavvItem(item.key)}
            >
              <Link 
                href={item.path} 
                className={activeTab === item.key ? styles.navActive : undefined}
              >{item.navTitle}</Link>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
}
