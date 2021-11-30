import { useState, useRef, useEffect, Suspense } from "react";

import { SecondaryHeader, BottomBar } from "../components";

import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { useWindowDimensions } from "../utils";
import * as styles from "../styles/_education.module.css";

export default function Education  () {
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
            title={"Education"}
            onPressBack={() => window.history.back()}
          />
           <div
            className={styles.appDiv}
            style={{ height: height - 40 - bottomBaH }}
          >
            <div className={styles.divDesign}>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className={styles.rowDesign}>
                  <Col sm={3} md={3} xs={3} className={styles.colDes}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first" className={styles.name}>
                          SSC
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={3} md={3} xs={3} className={styles.colDes}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="second" className={styles.name}>
                          HSC
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={3} md={3} xs={3} className={styles.colDes}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="third" className={styles.name}>
                          UG
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={3} md={3} xs={3} className={styles.colDes}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="fourth" className={styles.name}>
                          PG
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} className={styles.colDe}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                      <div className={styles.tabDes}>
                        <div className={styles.tabD}>
                          <label className={styles.name1}>Course</label>
                          <label className={styles.lbl}>SSC</label>
                          </div>
                          <div className={styles.tabD}>
                          <label className={styles.name1}>Institute/University</label>
                          <label className={styles.lbl}>Gnanyagna Vidhyalaya, Mogri</label>
                          </div>
                          <div className={styles.tabD}>
                          <label className={styles.name1}>  Year Of Passing</label>
                          <label className={styles.lbl}>2013</label>
                          </div>
                          <div className={styles.tabD}>
                          <label className={styles.name1}>Cgpa/Percentage</label>
                          <label className={styles.lbl}>87%</label>
                          </div>
                      </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                      <div className={styles.tabDes}>
                        <div className={styles.tabD}>
                          <label className={styles.name1}>Course</label>
                          <label className={styles.lbl}>HSC</label>
                          </div>
                          <div className={styles.tabD}>
                          <label className={styles.name1}>Institute/University</label>
                          <label className={styles.lbl}>Gnanyagna Vidhyalaya, Mogri</label>
                          </div>
                          <div className={styles.tabD}>
                          <label className={styles.name1}>  Year Of Passing</label>
                          <label className={styles.lbl}>2015</label>
                          </div>
                          <div className={styles.tabD}>
                          <label className={styles.name1}>Cgpa/Percentage</label>
                          <label className={styles.lbl}>60%</label>
                          </div>
                      </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <div className={styles.tabDes}>
                        <div className={styles.tabD}>
                          <label className={styles.name1}>Course</label>
                          <label className={styles.lbl}>BCA</label>
                          </div>
                          <div className={styles.tabD}>
                          <label className={styles.name1}>Institute/University</label>
                          <label className={styles.lbl}>Semcom, Spu University</label>
                          </div>
                          <div className={styles.tabD}>
                          <label className={styles.name1}>  Year Of Passing</label>
                          <label className={styles.lbl}>2019</label>
                          </div>
                          <div className={styles.tabD}>
                          <label className={styles.name1}>Cgpa/Percentage</label>
                          <label className={styles.lbl}>7.73 CGPA</label>
                          </div>
                      </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                      <div className={styles.tabDes}>
                        <div className={styles.tabD}>
                          <label className={styles.name1}>Course</label>
                          <label className={styles.lbl}>M.Sc.(IT)</label>
                          </div>
                          <div className={styles.tabD}>
                          <label className={styles.name1}>Institute/University</label>
                          <label className={styles.lbl}>Istar Spu University</label>
                          </div>
                          <div className={styles.tabD}>
                          <label className={styles.name1}>  Year Of Passing</label>
                          <label className={styles.lbl}>2021</label>
                          </div>
                          <div className={styles.tabD}>
                          <label className={styles.name1}>Cgpa/Percentage</label>
                          <label className={styles.lbl}>8.24 CGPA</label>
                          </div>
                      </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        <BottomBar bottomBarRef={bottomBarRef} screenIndex={4} />
      </div>
    </div>
  );
};