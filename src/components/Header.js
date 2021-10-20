import React from 'react'
import "../css/Header.css"
import logo from "../img/lincone_mini.png";
import { ReactComponent as SearchIcon } from "../icons/General/Search.svg";
import { ReactComponent as Notification } from "../icons/Code/Compiling.svg";
import { ReactComponent as QuickAction } from "../icons/Code/Equalizer.svg";
import { ReactComponent as Chat } from "../icons/Communication/Group-chat.svg";
import { ReactComponent as Update } from "../icons/General/Update.svg";
import { ReactComponent as QuickStart } from "../icons/Files/File-plus.svg";
import { ReactComponent as Heart } from "../icons/General/Heart.svg";
import { ReactComponent as Quick } from "../icons/General/Thunder-move.svg";
import { ReactComponent as User } from "../icons/General/User.svg";
import { ReactComponent as Test2 } from "../icons/General/Heart.svg";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header root">
      <div className="h-container">
        <div className="h-canvas cm-cvs">
          <div className="h-pc-group cm-fx-tr">
            <div className="h-pc-box cm-fx-base">
              <div className="h-pc-item cm-fx-base cm-mr-abs-sm"><img src={logo} alt="" className="h-logo" /></div>
              <div className="h-pc-item h-pc-search cm-fx-base abs-xs">
                <div className="h-pc-search-item1 cm-fx-tr svg-icon"><SearchIcon /></div>
                <div className="h-pc-search-item2">
                  <input
                    type="text"
                    size="20"
                    className="h-pc-search-text"
                    placeholder="검색"
                  />
                </div>
              </div>
              <div className="h-pc-item abs-xs"></div>
              <div className="h-pc-item ">
                <div className="h-pc-quick-box cm-fx-tr">
                  <div className="h-pc-quick-item cm-fx-tr svg-icon"><Notification /></div>
                  <div className="h-pc-quick-item cm-fx-tr svg-icon"><Quick /></div>
                  <div className="h-pc-quick-item cm-fx-tr svg-icon"><Update /></div>
                  <div className="h-pc-quick-item cm-fx-tr svg-icon"><Heart /></div>
                </div>
              </div>
              <div className="h-pc-item abs-tts">사용자</div>
              <div className="h-pc-item h-pc-avatar"><Avatar/></div>
            </div>
          </div>
          <div className="h-pc-sub-group cm-fx-tr">
            <div className="h-pc-sub-box cm-fx-tr">
              <div className="h-pc-sub-item">
                <div className="h-pc-sub-title-box">
                  <div className="h-pc-sub-title-item1 h-pc-sub-title-header cm-fx-tr"><p className="H4 FCB1">마이페이지</p></div>
                  <div className="h-pc-sub-title-item2 h-pc-sub-title-comment cm-fx-tr"><p className="T6 FCB2">내정보 / 내글 관리</p></div>
                </div>
              </div>
              <div className="h-pc-sub-dash"></div>
              <div className="h-pc-sub-item">
              <div className="h-pc-sub-title-box">
              <div className="h-pc-sub-title-item1 h-pc-sub-title-header cm-fx-tr"><p className="H4 FCB1">대쉬보드</p></div>
                  <div className="h-pc-sub-title-item2 h-pc-sub-title-comment cm-fx-tr"><p className="T6 FCB2">프로젝트 / 시스템알림</p></div>
                </div>
              </div>
              <div className="h-pc-sub-dash"></div>
              <div className="h-pc-sub-item">
              <div className="h-pc-sub-title-box">
              <div className="h-pc-sub-title-item1 h-pc-sub-title-header cm-fx-tr"><p className="H4 FCB1">프로젝트</p></div>
                  <div className="h-pc-sub-title-item2 h-pc-sub-title-comment cm-fx-tr"><p className="T6 FCB2">새프로젝트 / 프로젝트관리</p></div>
                </div>
              </div>
              <div className="h-pc-sub-dash"></div>
              <div className="h-pc-sub-item">
              <div className="h-pc-sub-title-box">
              <div className="h-pc-sub-title-item1 h-pc-sub-title-header cm-fx-tr"><p className="H4 FCB1">피드</p></div>
                  <div className="h-pc-sub-title-item2 h-pc-sub-title-comment cm-fx-tr"><p className="T6 FCB2">새로운 소식</p></div>
                </div>
              </div>
              <div className="h-pc-sub-dash2"></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header
