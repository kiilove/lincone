import React from "react";
import useForm from "../Functions/useFrom";
import validate from "../Functions/validate";
import "../css/MyUserInfo.css";
import axios from "axios";

function MyUserInfo() {
  const USER_API = "http://localhost:4500/users";

  const { values, err, submitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      userName: "",
      userEmail: "",
      userTelNum: "",
      userPosition: "",
      userGrade: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios
        .post(USER_API, JSON.stringify(values), {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          res.status === 204 && alert("수정완료");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validate,
  });
  return (
    <div className="myuserinfo">
      <form name="userInfo" onSubmit={handleSubmit} noValidate>
        <div className="mui-container">
          <div className="mui-canvas">
            <div className="mui-header-group cm-fx-base">
              <div className="mui-header-box cm-fx-tr">
                <div className="mui-header-item cm-fx-base cm-mb-abs-sm">
                  <div className="mui-header-text-box">
                    <p className="mui-text-title H5 cm-ta-l">
                      관리자 정보 변경
                    </p>
                    <p
                      className="mui-text-title T7 cm-ta-l"
                      style={{ color: "#ada5a5" }}
                    >
                      관리자 개인의 정보를 변경합니다.
                    </p>
                  </div>
                  <div className="mui-header-btn-box cm-fx-tr">
                    <div className="mui-header-btn-item ">
                      <button
                        type="submit"
                        className="mui-btn-save cm-btn btn btn-success"
                      >
                        저장
                      </button>
                    </div>
                    <div className="mui-header-btn-item ">
                      <div className="mui-btn-save cm-btn btn btn-secondary">
                        취소
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mui-dash-box cm-fx-base"></div>
            <div className="mui-body-group cm-fx-base cm-mb-abs-lg">
              <div className="mui-body-box cm-fx-tr">
                <div className="mui-body-item">
                  <div className="mui-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="mui-body-form-text T7">
                      <div className="mui-body-form-text-item cm-mt-abs-xs T7 ">
                        프로필사진
                      </div>
                    </div>
                    <div className="mui-body-form-input">
                      <div className="mui-body-form-input-item">
                        {" "}
                        <img src="img/users/100_1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="mui-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="mui-body-form-text T7">
                      <div className="mui-body-form-text-item cm-mt-abs-xs T7 ">
                        이름
                      </div>
                    </div>
                    <div className="mui-body-form-input ">
                      <input
                        type="text"
                        name="userName"
                        value={values.userName}
                        onChange={handleChange}
                        className="cm-tbx-std cm-bg-secondary"
                      />
                    </div>
                  </div>
                  <div className="mui-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="mui-body-form-text T7">
                      <div className="mui-body-form-text-item cm-mt-abs-xs T7 ">
                        이메일
                      </div>
                    </div>
                    <div className="mui-body-form-input ">
                      <input
                        type="text"
                        name="userEmail"
                        value={values.userEmail}
                        onChange={handleChange}
                        className="cm-tbx-std cm-bg-secondary"
                      />
                      {err.userEmail}
                    </div>
                  </div>
                  <div className="mui-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="mui-body-form-text T7">
                      <div className="mui-body-form-text-item cm-mt-abs-xs T7 ">
                        연락처
                      </div>
                    </div>
                    <div className="mui-body-form-input ">
                      <input
                        type="text"
                        name="userTelNum"
                        value={values.userTelNum}
                        onChange={handleChange}
                        className="cm-tbx-std cm-bg-secondary"
                      />
                    </div>
                  </div>
                  <div className="mui-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="mui-body-form-text T7">
                      <div className="mui-body-form-text-item cm-mt-abs-xs T7 ">
                        직급
                      </div>
                    </div>
                    <div className="mui-body-form-input ">
                      <input
                        type="text"
                        name="userPosition"
                        value={values.userPosition}
                        onChange={handleChange}
                        className="cm-tbx-std cm-bg-secondary"
                      />
                    </div>
                  </div>
                  <div className="mui-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="mui-body-form-text T7">
                      <div className="mui-body-form-text-item cm-mt-abs-xs T7 ">
                        등급
                      </div>
                    </div>
                    <div className="mui-body-form-input ">
                      <input
                        type="text"
                        name="userGrade"
                        value={values.userGrade}
                        onChange={handleChange}
                        className="cm-tbx-std cm-bg-secondary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyUserInfo;
