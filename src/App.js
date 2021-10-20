

import "./css/style.css";
import "./App.css";
import "./css/svg.css";
import "./css/btn.css";
import Header from "./components/Header";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className="App root ">
      <div className="a-container ">
        <div className="a-canvas cm-fx-tc">
          <div className="a-header-group">
            <div className="a-header-box">
              <div className="a-header-item">
                <Header />
              </div>
            </div>
          </div>
          <div className="a-body-group">
            <div className="a-body-box">
              <div className="a-body-item ">
                <MyPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
