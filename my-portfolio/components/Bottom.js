import { bottomData } from "../dummyData";
import { useState } from "react";
import * as styles from "../styles/_layout.module.css";
import getConfig from "next/config";
import Router from "next/router";
const { publicRuntimeConfig } = getConfig();

export const BottomBar = (props) => {
  const [extra, setExtra] = useState(0);
  const { bottomBarRef, screenIndex } = props;

  const ClickBottomBar = (index) => {
    switch (index) {
      case 0:
        Router.push("/");
        setExtra(extra + 1);
        break;
      case 1:
        Router.push("/Wishlist", "/wish-list");
        setExtra(extra + 1);
        break;
      case 2:
        Router.push("/MyDesigns", "my-designs");
        setExtra(extra + 1);
        break;
      case 3:
        Router.push("/ContactUs", "contact-us");
        setExtra(extra + 1);
        break;
      case 4:
        Router.push("/Menu", "menu");
        setExtra(extra + 1);
        break;
      default:
        console.log("hello");
        break;
    }
  };

  return (
    <div ref={bottomBarRef} className={styles.bottomBar}>
      {/* {bottomData.map((i, k) => {
        const Icon = i.svgIcon;
        return (
          <div
            key={"bottomRef" + k}
            onClick={() => ClickBottomBar(k)}
            className={styles.tabContainer}
          >
            {screenIndex == k ? (
              <div className={styles.redDot} />
            ) : (
              <div className={styles.transparentDot} />
            )}
            <Icon fill={screenIndex == k ? "#C6B486" : "#ffffff"} />
            <label
              style={{ color: screenIndex == k ? "#C6B486" : "#ffffff" }}
              className={styles.bottomBarTabName}
            >
              {i.name}
            </label>
          </div>
        );
      })} */}
      <div   className={styles.tabContainer}>

        <div>
        <a href="mailto:thapratik00@gmail.com" target="_blank"><img src="../images/gmail.png" alt="gmail" width={40} height={40}/></a>
          
        </div>
        <div>
        <a href="https://wa.me/9427352211" target="_blank"> <img src="../images/whatsapp.png" alt="whatsapp" width={40} height={40}/></a>
         
        </div>
        <div>
        <a href="https://linkedin.com/in/pratik-thakkar-203004185" target="_blank">          <img src="../images/linkedin.png" alt="linkedin" width={40} height={40}/></a>

        </div>
        <div>
        <a href="#"><img src="../images/phone-call.png" alt="call" width={40} height={40}/></a>
          
        </div>
      </div>
    </div>
  );
};