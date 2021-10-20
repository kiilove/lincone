import React from "react";
import axios from "axios";

import useForm from "../Functions/useForm";
import validate from "../Functions/validate";
import "../css/CompInfo.css";

function CompInfo() {
  const COMP_API = "http://localhost:4500/comp";

  const { values, err, submitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      compName: "",
      compMessage: "",
      compBoss: "",
      compBusinessNum: "",
      compAddr: "",
      compBirth: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios
        .post(COMP_API, JSON.stringify(values), {
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
    <div className="compInfo">
      <form name="compInfo" onSubmit={handleSubmit} noValidate>
        <div className="ci-container">
          <div className="ci-canvas">
            <div className="ci-header-group cm-fx-base">
              <div className="ci-header-box cm-fx-tr">
                <div className="ci-header-item cm-fx-base cm-mb-abs-sm">
                  <div className="ci-header-text-box">
                    <p className="ci-text-title H5 cm-ta-l">회사정보 관리</p>
                    <p
                      className="ci-text-title T7 cm-ta-l"
                      style={{ color: "#ada5a5" }}
                    >
                      다른 유저들에게 노출되는 정보입니다. 정확히 입력해주세요.
                    </p>
                  </div>
                  <div className="ci-header-btn-box cm-fx-tr">
                    <div className="ci-header-btn-item ">
                      <button
                        type="submit"
                        className="ci-btn-save cm-btn btn btn-success"
                      >
                        저장
                      </button>
                    </div>
                    <div className="ci-header-btn-item ">
                      <div className="ci-btn-save cm-btn btn btn-secondary">
                        초기화
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ci-dash-box cm-fx-base"></div>
            <div className="ci-body-group cm-fx-base cm-mb-abs-lg">
              <div className="ci-body-box cm-fx-tr">
                <div className="ci-body-item">
                  <div className="ci-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="ci-body-form-text T7">
                      <div className="ci-body-form-text-item cm-mt-abs-xs T7 ">
                        회사로고
                      </div>
                    </div>
                    <div className="ci-body-form-input">
                      <div className="ci-body-form-input-item">
                        {" "}
                        <img src="img/users/100_1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="ci-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="ci-body-form-text T7">
                      <div className="ci-body-form-text-item cm-mt-abs-xs T7 ">
                        상호(회사명)
                      </div>
                    </div>
                    <div className="ci-body-form-input ">
                      <input
                        type="text"
                        name="compName"
                        value={values.compName}
                        onChange={handleChange}
                        className="cm-tbx-std cm-bg-secondary"
                      />
                    </div>
                  </div>
                  <div className="ci-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="ci-body-form-text T7">
                      <div className="ci-body-form-text-item cm-mt-abs-xs T7 ">
                        회사소개
                      </div>
                    </div>
                    <div className="ci-body-form-input ">
                      <input
                        type="text"
                        name="compMessage"
                        value={values.compMessage}
                        onChange={handleChange}
                        className="cm-tbx-std cm-bg-secondary"
                      />
                    </div>
                  </div>
                  <div className="ci-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="ci-body-form-text T7">
                      <div className="ci-body-form-text-item cm-mt-abs-xs T7 ">
                        대표자
                      </div>
                    </div>
                    <div className="ci-body-form-input ">
                      <input
                        type="text"
                        name="compBoss"
                        value={values.compBoss}
                        onChange={handleChange}
                        className="cm-tbx-std cm-bg-secondary"
                      />
                    </div>
                  </div>
                  <div className="ci-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="ci-body-form-text T7">
                      <div className="ci-body-form-text-item cm-mt-abs-xs T7 ">
                        사업자등록번호
                      </div>
                    </div>
                    <div className="ci-body-form-input ">
                      <input
                        type="text"
                        name="compBusinessNum"
                        value={values.compBusinessNum}
                        onChange={handleChange}
                        className="cm-tbx-std cm-bg-secondary"
                      />
                    </div>
                  </div>
                  <div className="ci-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="ci-body-form-text T7">
                      <div className="ci-body-form-text-item cm-mt-abs-xs T7 ">
                        주소
                      </div>
                    </div>
                    <div className="ci-body-form-input ">
                      <input
                        type="text"
                        name="compAddr"
                        value={values.compAddr}
                        onChange={handleChange}
                        className="cm-tbx-std cm-bg-secondary"
                      />
                    </div>
                  </div>
                  <div className="ci-body-form-box cm-fx-base cm-mb-abs-md">
                    <div className="ci-body-form-text T7">
                      <div className="ci-body-form-text-item cm-mt-abs-xs T7 ">
                        창립일
                      </div>
                    </div>
                    <div className="ci-body-form-input ">
                      <input
                        type="text"
                        name="compBirth"
                        value={values.compBirth}
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

export default CompInfo;
