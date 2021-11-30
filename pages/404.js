import { useState, useRef, useEffect, Suspense } from "react";

import { SecondaryHeader, BottomBar } from "../components";
import { useWindowDimensions } from "../utils";
import * as styles from "../styles/_error.module.css";
import  Router  from "next/router";

export default function Error  () {
  
    return (
        <div className={"fullContainer"}>
          <div
            style={{ backgroundColor: "#272727" }}
            className={"responsiveContainer"}
          >
        
               <div
                className={styles.appDiv}
           
              >
        
                    <div><label>404 (PAGE NOT FOUND)</label></div>
                    <div onClick={()=> Router.push("/","/")}><label>Back To Home Page</label></div>

             
              </div>
           
          </div>
        </div>
      );
    };