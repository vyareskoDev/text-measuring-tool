import React from "react";
import TextInfo from "../interfaces/TextInfo";
import InfoTable from "./InfoTable";
import "../styles/Main.css";
import Accordion from "../utilComps/Accordion/Accordion";


type MainProps = {
    text: string;
    setText: Function;
    textInfo: TextInfo;
    setShowFileInputPopup: Function;
    setShowFileExportPopup: Function;
}


const Main:React.FC<MainProps> = ({text, setText, textInfo, setShowFileInputPopup, setShowFileExportPopup}) => {
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
              </div>
              <div className="container__body">
                <textarea autoFocus value={text} onChange={e => setText(e.target.value)} className="body__textarea"></textarea>
                <section className="buttons">
                  <button className="btn clear-text-button" onClick={() => setText("")}>Clear text</button>
                  <button className="btn upload-file-button" onClick={() => setShowFileInputPopup(true)}>Import file</button>
                  <button className="btn" onClick={() => setShowFileExportPopup(true)}>Export file</button>
                </section>
                <InfoTable textInfo={textInfo} />
              </div>
            </div>
          </div>
        </main>
    )
}

export default Main;