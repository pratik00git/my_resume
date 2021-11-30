import { useState, useRef, useEffect, Suspense } from "react";
import { Header, BottomBar } from "../components";
import { useWindowDimensions } from "../utils";
import * as styles from "../styles/_home.module.css";
import Slider from "react-slick";
import Router from "next/router";
import Cookies from "js-cookie";
import Lottie from "react-lottie";

export default function Index() {
  const { height } = useWindowDimensions();
  const bottomBarRef = useRef(null);
  const fullContainerRef = useRef(null);
  const headerRef = useRef(null);
  const [fullH, setFullH] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [HeaderH, setheaderH] = useState(0);
  const [bottomBaH, setbottomBaH] = useState(0);
  const [mode, setMode] = useState(false);
  const CalculateSize = () => {
    setFullH(fullContainerRef.current.clientHeight);
    setWindowHeight(window.innerHeight);
    setheaderH(headerRef.current.clientHeight);
    setbottomBaH(bottomBarRef.current.clientHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", CalculateSize());
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../downArrow1.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
  };
  return (
    <>
      <div
        ref={fullContainerRef}
        style={{ minHeight: height }}
        className={"fullContainer"}
      >
        <div className={"responsiveContainer"}>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <Header headerRef={headerRef} onPressMode={() => setMode(!mode)} />

          <div className="bodyContainer">
            <Slider
              {...settings}
              className={styles.sliderContainer}
              cancelable={false}
              infinite={false}
              vertical={true}
              verticalSwiping={true}
              arrows={false}
              swipe={true}
              adaptiveHeight
              touchThreshold={20}
              initialSlide={
                Cookies.get("toInitial") ? Cookies.get("toInitial") : 0
              }
              beforeChange={(e) => {
                if (e == 0) {
                  Cookies.set("toInitial", 1);
                } else {
                  Cookies.set("toInitial", 0);
                }
              }}
            >
              <div className={styles.homeCon}>
                <div
                  className={styles.slideFrame}
                  style={{
                    height: height - HeaderH - bottomBaH - 1,
                    backgroundColor: mode ? "grey" : "black",
                    color: mode ? "black" : "white",
                  }}
                >
                  <div>
                    <img
                      src="../images/pp.jpeg"
                      alt="pp"
                      className={styles.imgDes}
                      style={{ borderColor: mode ? "black" : "white" }}
                    />
                  </div>
                  <div>
                    <label className={styles.lblDes}>
                      Hello, I'm <span className={styles.nameDes}>Pratik</span>{" "}
                      <br />
                      Welcome to my
                      <br />
                      World
                    </label>
                  </div>

                  <div className={styles.lottieCon}>
                    <Lottie options={defaultOptions} width={50} height={70} />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={styles.slideFrame}
                  style={{
                    height: height - HeaderH - bottomBaH - 1,
                    backgroundColor: mode ? "grey" : "black",
                    color: mode ? "black" : "white",
                  }}
                >
                  <div
                    className={styles.listDes}
                    onClick={() => Router.push("/Education", "/education")}
                  >
                    <img src="../images/svg/Vector.svg" />
                    <label>Educations</label>
                  </div>
                  <div
                    className={styles.listDes}
                    onClick={() => Router.push("/Skills", "/skills")}
                  >
                    <img src="../images/svg/fa-solid_tools.svg" />
                    <label>Skills</label>
                  </div>
                  <div
                    className={styles.listDes}
                    onClick={() => Router.push("/Work", "/work-experience")}
                  >
                    <img src="../images/svg/Vector1.svg" />
                    <label>Work Experience</label>
                  </div>
                  <div
                    className={styles.listDes}
                    onClick={() => Router.push("/Profile", "/profile")}
                  >
                    <img src="../images/svg/personal.svg" />
                    <label>Personal Details</label>
                  </div>
                  <div
                    className={styles.listDes}
                    onClick={() => Router.push("/Certi", "/achievements")}
                  >
                    <img src="../images/svg/ri_award-fill.svg" />
                    <label>Achievements</label>
                  </div>
                  <div
                    className={styles.listDes}
                    onClick={() => Router.push("/Hobbies", "/hobbies")}
                  >
                    <img src="../images/svg/hobbies.svg" />
                    <label>Hobbies</label>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <BottomBar bottomBarRef={bottomBarRef} />
      </div>
    </>
  );
}
