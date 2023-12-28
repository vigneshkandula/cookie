import React from "react";
import "./cookies.css";
import { COOKIES_DATA } from "./constants";

const Cookie: React.FC = () => {
  return (
    <>
      <div className="cookie-container">
        <h2>{COOKIES_DATA.HEADING}</h2>
        <p className="inline">{COOKIES_DATA.PARA_0}</p>
        <a href="https://www.stargleameducation.net " target="_blank">
          {COOKIES_DATA.WEBSITE}
        </a>
        <p className="inline">{COOKIES_DATA.PARA_1}</p>
        <p>{COOKIES_DATA.PARA_2}</p>
        <p className="inline">{COOKIES_DATA.PARA_01}</p>{" "}
        <a href="https://www.stargleameducation.net " target="_blank">
          {COOKIES_DATA.WEBSITE}
        </a>
        <p className="inline">{COOKIES_DATA.PARA_02}</p>
        <h3>{COOKIES_DATA.HEADING_2}</h3>
        <p>{COOKIES_DATA.PARA_4}</p>
        <p>{COOKIES_DATA.PARA_5}</p>
        <p>{COOKIES_DATA.PARA_6}</p>
        <p>{COOKIES_DATA.PARA_7}</p>
        <h3>{COOKIES_DATA.HEADING_3}</h3>
        <h4>{COOKIES_DATA.HEADING_4}</h4>
        <p>{COOKIES_DATA.PARA_8}</p>
        <p>{COOKIES_DATA.PARA_9}</p>
        <h4>{COOKIES_DATA.HEADING_5}</h4>
        <p>{COOKIES_DATA.PARA_10}</p>
        <p>{COOKIES_DATA.PARA_11}</p>
        <h4>{COOKIES_DATA.HEADING_6}</h4>
        <p>{COOKIES_DATA.PARA_12}</p>
        <p>{COOKIES_DATA.PARA_13}</p>
        <h3>{COOKIES_DATA.HEADING_7}</h3>
        <p>{COOKIES_DATA.PARA_14}</p>
        <p>{COOKIES_DATA.PARA_15}</p>
      </div>
    </>
  );
};

export default Cookie;
