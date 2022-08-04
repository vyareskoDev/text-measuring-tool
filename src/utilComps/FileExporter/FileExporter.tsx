import React, {useState} from "react";
import "./FileExporter.css";

type FileExporterProps = {
    fileText: string;
}

const FileExporter:React.FC<FileExporterProps> = ({fileText}) => {
    const [fileName, setFileName] = useState<string>("untitled");
    const downloadFile = () => {
        const element = document.createElement("a");
        const fileToDownload = new Blob([fileText || ""], {type: "text/plain"});
        element.href = URL.createObjectURL(fileToDownload);
        element.download = (fileName || "untitled") + ".txt";
        document.body.appendChild(element);
        element.click();
    }



    return (
        <div className="file-exporter">
            <form>
                <label>
                    File name:
                    <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)}name="fileName"></input> .txt
                </label>
            </form>
            <button onClick={downloadFile}>Download {(fileName || "untitled") + ".txt"}</button>
        </div>
    )
}

export default FileExporter;