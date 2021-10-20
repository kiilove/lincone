import React from "react";
import MySummary from "../components/MySummary";
import CompInfo from "../components/CompInfo";
import "../css/MyPage.css";
import MembersInfo from "../components/MembersInfo";

function Mypage() {
  return (
    <div className="mypage root">
      <div className="mp-container cm-fx-tr">
        <div className="mp-canvas cm-fx-tr">
          <div className="mp-left-group">
            <div className="mp-left-box">
              <div className="mp-left-item">
                <MySummary />
              </div>
            </div>
          </div>
          <div className="mp-blank-group">
            <div className="mp-blank-box">
              <div className="mp-blank-item"></div>
            </div>
          </div>
          <div className="mp-main-group">
            <div className="mp-main-box">
              <div className="mp-main-item">
                <MembersInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
