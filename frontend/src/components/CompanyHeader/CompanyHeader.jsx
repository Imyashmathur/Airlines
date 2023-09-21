import React from "react";
import "./CompanyHeader.scss";
import logo from "./logo.png";
const CompanyHeader = () => {
  return (
    <div
      className="company-heading color-change "
    
    >
      <img src={logo} alt="" />
      YASH Airlines
    </div>
  );
};

export default CompanyHeader;
