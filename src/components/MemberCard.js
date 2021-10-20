import React, { forwardRef } from "react";
import "../css/MembersInfo.css";

const MemberCard = forwardRef(
  ({ userName, userPosition, userEmail, userTelNum }, ref) => {
    return (
      <div ref={ref}>
        <div className="mi-body-item">
          <div className="mi-body-user-box cm-cvs ">
            <div className="mi-user-header  cm-mt-abs-md cm-fx-tr">
              <div className="mi-user-header-box cm-fx-tr ">
                <div className="mi-user-avatar ">
                  <img
                    src="img/users/100_1.jpg"
                    alt=""
                    className="cm-avatar-sm"
                  />
                </div>
                <div className="mi-user-info-box cm-ml-abs-sm">
                  <div className="mi-user-name">
                    <span className="T7">{userName}</span>
                  </div>
                  <div className="mi-user-sub">
                    <span className="T8">{userPosition}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mi-user-body cm-mt-abs-sm cm-mb-abs-sm">
              <div className="mi-user-body-box cm-fx-tr ">
                <div className="mi-user-body-title ">
                  <span className="T8">등록일자: </span>
                </div>
                <div className="mi-user-body-content ">
                  <span className="T8 cm-ml-abs-ts">2021-09-30 23:55</span>
                </div>
              </div>
              <div className="mi-user-body-box cm-fx-tr ">
                <div className="mi-user-body-title">
                  <span className="T8">이메일: </span>
                </div>
                <div className="mi-user-body-content">
                  <span className="T8 cm-ml-abs-ts">jbkim@jncore.com</span>
                </div>
              </div>
              <div className="mi-user-body-box cm-fx-tr ">
                <div className="mi-user-body-title">
                  <span className="T8">연락처: </span>
                </div>
                <div className="mi-user-body-content">
                  <span className="T8 cm-ml-abs-ts">010-4643-3464</span>
                </div>
              </div>
            </div>
            <div className="mi-user-btn"></div>
          </div>
        </div>
      </div>
    );
  }
);

export default MemberCard;
