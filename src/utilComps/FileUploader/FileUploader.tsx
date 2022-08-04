import React, {FC, useState} from "react"
import "./FileUploader.css"

type FileUploaderProps = {
    onFileSelect: Function;
}


const FileUploader:FC<FileUploaderProps> = ({onFileSelect}) => {
    const [error, setError] = useState<string>("");
    const handleFileInput = (e: React.FormEvent<HTMLInputElement>) => {
        const eventTarget = e.target as HTMLInputElement;
        if(eventTarget.files)
        {
            const file = eventTarget.files[0]
            if(file.type !== "text/plain")
            {
                setError("Wrong file type")
                setTimeout(() => setError(""), 3000)
                return;
            }
            onFileSelect(file);
        }
    }
    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput}></input>
            {error &&
                <span>{error}</span>
            }
        </div>
    )
}


export default FileUploader; 