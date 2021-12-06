import { useState, useRef, useEffect, Suspense } from "react";

import { SecondaryHeader, BottomBar } from "../components";

import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { useWindowDimensions } from "../utils";
import * as styles from "../styles/_profile.module.css";

export default function Profile  () {
    const { height } = useWindowDimensions();
    const bottomBarRef = useRef(null);
    const headerRef = useRef(null);
  
    const [windowHeight, setWindowHeight] = useState(0);
    const [HeaderH, setheaderH] = useState(0);
    const [bottomBaH, setbottomBaH] = useState(0);
    const CalculateSize = () => {
      setWindowHeight(window.innerHeight);
      setheaderH(headerRef.current.clientHeight);
      setbottomBaH(bottomBarRef.current.clientHeight);
    };
    useEffect(() => {
      window.addEventListener("resize", CalculateSize());
    });
    return (
        <div className={"fullContainer"}>
          <div
            style={{ backgroundColor: "#272727" }}
            className={"responsiveContainer"}
          >
              <SecondaryHeader
                headerRef={headerRef}
                title={"Personal Details"}
                onPressBack={() => window.history.back()}
              />
               <div
                className={styles.appDiv}
                style={{ height: height - 40 - bottomBaH }}
              >
                    <div className={styles.info}>
                      <label className={styles.title}>
                        Full Name : 
                      </label>
                      <label className={styles.title1}>
                        Thakkar Pratik Dipakbhai 
                      </label>
                    </div>
                    <div className={styles.info}>
                      <label className={styles.title}>
                        Gender : 
                      </label>
                      <label className={styles.title1}>
                        Male
                      </label>
                    </div>
                    <div className={styles.info}>
                      <label className={styles.title}>
                        Date Of Birth : 
                      </label>
                      <label className={styles.title1}>
                        24/02/1997
                      </label>
                    </div>
                    <div className={styles.info}>
                      <label className={styles.title}>
                        Nationality :
                      </label>
                      <label className={styles.title1}>
                        Indian
                      </label>
                    </div>

                    <div className={styles.info}>
                      <label className={styles.title}>
                        Languages : 
                      </label>
                      <label className={styles.title1}>
                        English, Hindi, Gujarati
                      </label>
                    </div>
                    <div className={styles.info}>
                      <label className={styles.title}>
                        Mobile Number : 
                      </label>
                      <label className={styles.title1}>
                        0000000000
                      </label>
                    </div>
                    <div className={styles.info}>
                      <label className={styles.title}>
                        Email Id : 
                      </label>
                      <label className={styles.title1}>
                        thapratik00@gmail.com
                      </label>
                    </div>
                    {/* <div className={styles.info1}>
                     
                     <div><a href="http://www.instagram.com/thakkarpratik00" target="_blank" ><img src="../images/instagram.png" alt="insta" width={50} height={50}/></a></div>
                    <div><a href="http://www.facebook.com/pratik.thakkar.52" target="_blank" ><img src="../images/facebook.png" alt="fb" width={50} height={50}/></a></div> 
                    </div> */}
                  
              </div>
            <BottomBar bottomBarRef={bottomBarRef} screenIndex={4} />
          </div>
        </div>
      );
    };