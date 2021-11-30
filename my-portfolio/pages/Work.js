import { useState, useRef, useEffect, Suspense } from "react";

import { SecondaryHeader, BottomBar } from "../components";

import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { useWindowDimensions } from "../utils";
import * as styles from "../styles/_work.module.css";

export default function Work  () {
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
                title={"Work Experince"}
                onPressBack={() => window.history.back()}
              />
               <div
                className={styles.appDiv}
                style={{ height: height - 40 - bottomBaH }}
              >
              <div className={styles.lblDes}>
                COMING SOON
              </div>
              </div>
            <BottomBar bottomBarRef={bottomBarRef} screenIndex={4} />
          </div>
        </div>
      );
    };