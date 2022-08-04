import React from "react";
import TextInfo from "../interfaces/TextInfo";
import InfoTable from "./InfoTable";
import "../styles/Main.css";

type MainProps = {
    text: string;
    setText: Function;
    textInfo: TextInfo;
    setShowPopup: Function;
}


const Main:React.FC<MainProps> = ({text, setText, textInfo, setShowPopup}) => {
    return (
        <main>
          <div className="central-column">
            <div className="container">
              <div className="container__header">
                <section className="title">
                  <span>
                    Text <span className="special-gradient-text">Measuring tool</span>
                  </span>
                </section>
                <section className="buttons">
                  <button className="btn clear-text-button" onClick={() => setText("")}>Clear text</button>
                  <button className="btn upload-file-button" onClick={() => setShowPopup(true)}>Import file</button>
                  <button className="btn">Export file</button>
                </section>
              </div>
              <div className="container__body">
                <textarea autoFocus value={text} onChange={e => setText(e.target.value)} className="body__textarea"></textarea>
                <InfoTable textInfo={textInfo} />
              </div>
            </div>
          </div>
        </main>
    )
}

export default Main;