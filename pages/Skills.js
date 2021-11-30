import { useState, useRef, useEffect, Suspense } from "react";

import { SecondaryHeader, BottomBar } from "../components";

import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { useWindowDimensions } from "../utils";
import * as styles from "../styles/_skills.module.css";

export default function Skills  () {
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
                title={"Skills"}
                onPressBack={() => window.history.back()}
              />
               <div
                className={styles.appDiv}
                style={{ height: height - 40 - bottomBaH }}
              >
                <div className={styles.main}>
              <div className={styles.lblDes}>
                <label>Programming Languages</label>
                
              </div>
              <div className={styles.imgCon}>
                <Row>
                  <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                  <img src="../images/react.png" alt="react" width={60} height={60} />
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                    <img src="../images/js-format.png" alt="js"  width={60} height={60}/>
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                    <img src="../images/cpp.png" alt="cpp"  width={60} height={60}/>
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                    <img src="../images/html.png" alt="html"  width={60} height={60}/>
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                    <img src="../images/css.png" alt="css"  width={60} height={60}/>
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                      
                <img src="../images/bootstrap.png" alt="boot"  width={60} height={60}/>
                    </Col> 
               
                  </Row>
               
         
             
                  </div>
                   
            
              </div>
              <div className={styles.main}>
              <div className={styles.lblDes}>
                <label>Database</label>
                
              </div>
              <div className={styles.imgCon}>
                <Row>
                  <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                  <img src="../images/mysql.png" alt="react" width={60} height={60} />
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                    <img src="../images/oracle.png" alt="js"  width={60} height={60}/>
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                    <img src="../images/pg1.png" alt="js"  width={60} height={60}/>
                    </Col> 
             
               
                  </Row>
               
         
             
                  </div>
                   
            
              </div>
              <div className={styles.main}>
              <div className={styles.lblDes}>
                <label>Operating System</label>
                
              </div>
              <div className={styles.imgCon}>
                <Row>
                  <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                  <img src="../images/mac.png" alt="mac" width={60} height={60} />
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                    <img src="../images/windows.png" alt="js"  width={60} height={60}/>
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                    <img src="../images/ubantu.png" alt="ubantu"  width={60} height={60}/>
                    </Col> 
             
               
                  </Row>
               
         
             
                  </div>
                   
            
              </div>
              <div className={styles.main}>
              <div className={styles.lblDes}>
                <label>Design</label>
                
              </div>
              <div className={styles.imgCon}>
                <Row>
                  <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                  <img src="../images/photoshop.png" alt="mac" width={60} height={60} />
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                  <img src="../images/power.png" alt="mac" width={60} height={60} />
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                  <img src="../images/word.png" alt="mac" width={60} height={60} />
                    </Col> 
             
               
                  </Row>
               
         
             
                  </div>
                   
            
              </div>
              <div className={styles.main}>
              <div className={styles.lblDes}>
                <label>Tools</label>
                
              </div>
              <div className={styles.imgCon}>
                <Row>
                  <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                  <img src="../images/vscode.png" alt="mac" width={60} height={60} />
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                  <img src="../images/notepad.png" alt="mac" width={60} height={60} />
                    </Col> 
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                  <img src="../images/excelsheet.png" alt="mac" width={60} height={60} />
                    </Col> 
             
                    <Col sm={4} xs={4} md={4} lg={4} className={styles.imgSiz}>
                  <img src="../images/subline.png" alt="mac" width={60} height={60} />
                    </Col> 
               
                  </Row>
               
         
             
                  </div>
                   
            
              </div>
              </div>
            <BottomBar bottomBarRef={bottomBarRef} screenIndex={4} />
          </div>
        </div>
      );
    };