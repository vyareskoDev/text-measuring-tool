import React, {useState} from "react";
import "./Popup.css";

type PopupProps = {
    headerText: string;
    onClose: Function;
    showPopup: boolean;
    children: JSX.Element;
}

const Popup:React.FC<PopupProps> = ({onClose, showPopup, headerText, children}) => {
    return (
        <div className="popup">
            <div className="popup__inner">
                <div className="popup__header">
                    <span>{headerText}</span>
                    <button onClick={() => onClose(!showPopup)}>x</button>
                </div>
                <div className="popup__body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Popup;