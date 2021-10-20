import React from "react";
import "../css/MembersInfo.css";
import { ReactComponent as Admin } from "../icons/General/Bookmark.svg";
import { ReactComponent as Position } from "../icons/Communication/Shield-user.svg";
import { ReactComponent as Mail } from "../icons/Communication/Mail.svg";
import { ReactComponent as Mobile } from "../icons/Devices/Android.svg";
import { ReactComponent as Location } from "../icons/Map/Marker1.svg";
import { ReactComponent as Work } from "../icons/Code/Git4.svg";
import { ReactComponent as Library } from "../icons/Home/Library.svg";
import { ReactComponent as Send } from "../icons/Communication/Send.svg";
import { ReactComponent as Reply } from "../icons/Communication/Reply.svg";

import axios from "axios";
import { useState, useEffect } from "react";
import MemberCard from "./MemberCard";

function MembersInfo() {
  const [userList, setUserList] = useState([]);
  const USER_API = "http://localhost:4500/users";

  axios
    .get(USER_API)
    .then(function (res) {
      //alert(res.data);
      setUserList(res.data);
      const arrUsers = JSON.stringify(userList);

      console.log(arrUsers);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="membersinfo">
      <div className="mi-container">
        <div className="mi-canvas">
          <div className="mi-btn-group"></div>
          <div className="mi-admin-group cm-cvs cm-fx-tr ">
            <div className="mi-admin-box cm-fx-base ">
              <div className="mi-admin-item cm-fx-base">
                <div className="mi-admin-top-box">
                  <div className="mi-admin-top-item mi-admin-top-lt ">
                    <div className="mi-admin-avatar">
                      <img
                        src="img/users/100_1.jpg"
                        alt=""
                        width="80"
                        height="80"
                        className="cm-avatar"
                      />
                    </div>
                  </div>
                  <div className="mi-admin-top-item mi-admin-top-rt ">
                    <div className="mi-admin-info-box ">
                      <div className="mi-admin-info-name ">
                        <span className="T6-B">김진배</span>
                        <div className="cm-fx-tr svg-icon-primary svg-icon-lg cm-ml-abs-ts">
                          <Admin />
                        </div>
                      </div>
                      <div className="mi-admin-info-content cm-fx-base">
                        <div className="mi-admin-info-item cm-fx-tr cm-mr-abs-sm">
                          <div className="cm-fx-tr svg-icon svg-icon-sm cm-mr-abs-ts">
                            <Position />
                          </div>
                          <span className="T8-B cm-mr-abs-md">대표/관리자</span>
                        </div>
                        <div className="mi-admin-info-item cm-fx-tr cm-mr-abs-sm">
                          <div className="cm-fx-tr svg-icon svg-icon-sm cm-mr-abs-ts">
                            <Mail />
                          </div>
                          <span className="T8-B cm-mr-abs-md">
                            jbkim@jncore.com
                          </span>
                        </div>
                        <div className="mi-admin-info-item cm-fx-tr cm-mr-abs-sm">
                          <div className="cm-fx-tr svg-icon svg-icon-sm cm-mr-abs-ts">
                            <Mobile />
                          </div>
                          <span className="T8-B cm-mr-abs-md">
                            010-4643-3464
                          </span>
                        </div>
                        <div className="mi-admin-info-item cm-fx-tr cm-mr-abs-sm">
                          <div className="cm-fx-tr svg-icon svg-icon-sm cm-mr-abs-ts">
                            <Location />
                          </div>
                          <span className="T8-B cm-mr-abs-md">본사</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mi-admin-item">
                <div className="mi-admin-bottom-box">
                  <div className="mi-admin-bottom-item">
                    <div className="mi-admin-badge cm-fx-tr">
                      <div className="mi-badge-icon svg-icon svg-icon-md">
                        <Work />
                      </div>
                      <div className="mi-badge-box cm-fx-tc">
                        <div className="mi-badge-title T8">
                          진행중인 프로젝트
                        </div>
                        <div className="mi-badge-content T8-B">15</div>
                      </div>
                    </div>
                    <div className="mi-admin-badge cm-fx-tr">
                      <div className="mi-badge-icon svg-icon svg-icon-md">
                        <Library />
                      </div>
                      <div className="mi-badge-box cm-fx-tc">
                        <div className="mi-badge-title T8 ">전체 프로젝트</div>
                        <div className="mi-badge-content T8-B">15</div>
                      </div>
                    </div>
                    <div className="mi-admin-badge cm-fx-tr">
                      <div className="mi-badge-icon svg-icon svg-icon-md">
                        <Send />
                      </div>
                      <div className="mi-badge-box cm-fx-tc">
                        <div className="mi-badge-title T8 ">피드</div>
                        <div className="mi-badge-content T8-B">15</div>
                      </div>
                    </div>
                    <div className="mi-admin-badge cm-fx-tr">
                      <div className="mi-badge-icon svg-icon svg-icon-md">
                        <Reply />
                      </div>
                      <div className="mi-badge-box cm-fx-tc">
                        <div className="mi-badge-title T8 ">코멘트</div>
                        <div className="mi-badge-content T8-B">15</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mi-body-group cm-mt-abs-xs">
            <div className="mi-body-box">
              {/* {userList.user.map((userName, userPosition, userEmail) => (
                <MemberCard />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembersInfo;
