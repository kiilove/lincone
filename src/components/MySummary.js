import { Avatar } from "@material-ui/core";
import { ReactComponent as User } from "../icons/General/User.svg";
import { ReactComponent as Office } from "../icons/Home/Building.svg";
import { ReactComponent as Library } from "../icons/Home/Library.svg";
import { ReactComponent as Write } from "../icons/Communication/Write.svg";
import { ReactComponent as Group } from "../icons/Communication/Group.svg";
// import { ReactComponent as Lock } from "../icons/General/Lock.svg";
import { ReactComponent as Setting } from "../icons/Tools/Tools.svg";
import React from "react";
import "../css/MySummary.css";

function MySummary() {
  return (
    <div className="mysummary">
      <div className="ms-container">
        <div className="ms-canvas cm-cvs">
          <div className="ms-top-group cm-mb-abs-lg ">
            <div className="ms-top-box cm-fx-tr">
              <div className="ms-top-item ">
                <div className="ms-top-avatar-box cm-fx-base cm-mb-abs-lg">
                  <div className="ms-top-pic-item cm-fx-tr ">
                    <Avatar />
                  </div>
                  <div className="ms-top-name-item cm-fx-tc">
                    <p className="H4 ">제이앤코어</p>
                    <p className="T6">다재다능 전문가 집단</p>
                  </div>
                </div>
                <div className="ms-top-info-box cm-fx-base">
                  <div className="ms-top-info-title T7-B cm-ta-l">담당자:</div>
                  <div className="ms-top-info-content T7 cm-ta-r">김진배</div>
                </div>
                <div className="ms-top-info-box cm-fx-base">
                  <div className="ms-top-info-title T7-B cm-ta-l">Email:</div>
                  <div className="ms-top-info-content T7 cm-ta-r">
                    jbkim@jncore.com
                  </div>
                </div>
                <div className="ms-top-info-box cm-fx-base">
                  <div className="ms-top-info-title T7-B cm-ta-l">연락처:</div>
                  <div className="ms-top-info-content T7 cm-ta-r">
                    010-4643-3464
                  </div>
                </div>
                <div className="ms-top-info-box cm-fx-base">
                  <div className="ms-top-info-title T7-B cm-ta-l">
                    직위/등급:
                  </div>
                  <div className="ms-top-info-content T7 cm-ta-r">
                    대표/관리자
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ms-menu-group">
            <div className="ms-menu-box cm-fx-tr ">
              <div className="ms-menu-item cm-mt-abs-xs cm-mb-abs-lg">
                <div className="ms-menu-item-box cm-fx-base ">
                  <div className="ms-menu-item-icon cm-fx-tr cm-ml-abs-xs svg-icon svg-icon-lg">
                    <Office />
                  </div>
                  <div className="ms-menu-item-title cm-fx-base cm-ta-l cm-ml-abs-sm T7">
                    회사정보 관리
                  </div>
                </div>
                <div className="ms-menu-item-box cm-fx-base ">
                  <div className="ms-menu-item-icon cm-fx-tr cm-ml-abs-xs svg-icon svg-icon-lg">
                    <User />
                  </div>
                  <div className="ms-menu-item-title cm-fx-base cm-ta-l cm-ml-abs-sm T7">
                    구성원 관리
                  </div>
                </div>
                <div className="ms-menu-item-box cm-fx-base ">
                  <div className="ms-menu-item-icon cm-fx-tr cm-ml-abs-xs svg-icon svg-icon-lg">
                    <Group />
                  </div>
                  <div className="ms-menu-item-title cm-fx-base cm-ta-l cm-ml-abs-sm T7">
                    고객사 관리
                  </div>
                </div>
                <div className="ms-menu-item-box cm-fx-base ">
                  <div className="ms-menu-item-icon cm-fx-tr cm-ml-abs-xs svg-icon svg-icon-lg">
                    <Write />
                  </div>
                  <div className="ms-menu-item-title cm-fx-base cm-ta-l cm-ml-abs-sm T7">
                    사내서류 관리
                  </div>
                </div>
                <div className="ms-menu-item-box cm-fx-base ">
                  <div className="ms-menu-item-icon cm-fx-tr cm-ml-abs-xs svg-icon svg-icon-lg">
                    <Library />
                  </div>
                  <div className="ms-menu-item-title cm-fx-base cm-ta-l cm-ml-abs-sm T7">
                    문서양식 관리
                  </div>
                </div>
                <div className="ms-menu-item-box cm-fx-base ">
                  <div className="ms-menu-item-icon cm-fx-tr cm-ml-abs-xs svg-icon svg-icon-lg">
                    <Setting />
                  </div>
                  <div className="ms-menu-item-title cm-fx-base cm-ta-l cm-ml-abs-sm T7">
                    임시
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySummary;
