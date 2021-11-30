import { useState } from "react";
import getConfig from "next/config";
import Cookies from "js-cookie";
const { publicRuntimeConfig } = getConfig();
import * as styles from "../styles/_secondaryHeader.module.css";

export const SecondaryHeader = (props) => {
  const { onPressBack, headerRef } = props;
  const { title } = props;
  return (
    <div ref={headerRef} className={styles.MainHeader}>
      <div className={styles.subHeader}>
        <div
          onClick={() => {
            onPressBack();
          }}
          className={styles.headerLeft}
        >
          <img
            alt={"back"}
            className={styles.BackImg}
            src={"../images/IcBack.png"}
          />
          <label className={styles.BackText}>Back</label>
        </div>
        <label className={styles.titleText}>{title}</label>
        <div className={styles.headerRight} />
      </div>
    </div>
  );
};
