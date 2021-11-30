import Router from "next/router";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import * as styles from "../styles/_header.module.css";

export const Header = ({
  isBack,
  onPressBack,
  onClickFilter,
  headerRef,
  onClickGrid,
  onClickProfile,
  isGrid,
  isFilter,
  isLayoutChange,
  isProfile,
  onPressMode
}) => {
  return (
    <div ref={headerRef} className={styles.MainHeader}>
      <div className={styles.HeaderLeft}>
  <label>Pratik Thakkar</label>
  <label style={{fontSize:'12px'}}>Web Developer</label>
  
      </div>
      <div onClick={() => onPressMode()}>
   <img src="../images/mode.png" alt="mode" width={25} height={25}/>
      </div>
    </div>
  );
};