import { useState, useMemo, useEffect} from "react";
import "./App.css";
import measureText from "./functions/measureText";
import TextInfo from "./interfaces/TextInfo";
import FileUploader from "./utilComps/FileUploader/FileUploader";
import Popup from "./utilComps/Popup/Popup";
import Main from "./comps/Main";
import FileExporter from "./utilComps/FileExporter/FileExporter";



function App() {
  const [text, setText] = useState<string>("");
  const textInfo = useMemo<TextInfo>(() => measureText(text), [text]);
  const [file, setFile] = useState<File>();
  const [showFileInputPopup, setShowFileInputPopup] = useState<boolean>(false);
  const [showFileExportPopup, setShowFileExportPopup] = useState<boolean>(false);


  useEffect(() => {
    if(file)
    {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if(typeof fileReader.result === "string")
        {
          setText(fileReader.result);
        }
      }
      fileReader.readAsText(file);
    }
  }, [file])

  

  return (  
      <div className="App">
        <Main text={text} setText={setText} textInfo={textInfo} setShowFileInputPopup={setShowFileInputPopup} setShowFileExportPopup={setShowFileExportPopup} />
        {showFileInputPopup &&
          <Popup headerText={"Input file"} showPopup={showFileInputPopup} onClose={setShowFileInputPopup}>
            <FileUploader onFileSelect={setFile}></FileUploader>
          </Popup>
        }
        {showFileExportPopup &&
          <Popup headerText="Input file" showPopup={showFileExportPopup} onClose={setShowFileExportPopup}>
            <FileExporter fileText={text}/>
          </Popup>
        }

        
      </div>
  );
}

export default App;
