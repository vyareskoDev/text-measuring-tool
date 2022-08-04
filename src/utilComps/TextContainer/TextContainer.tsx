import React, {FC} from "react";


type Props = {
    children: JSX.Element;
}

const TextContainer:FC<Props> = ({children}) => {
    return (
        <div className="text-container">
            {children}
        </div>
    )
}

export default Text;