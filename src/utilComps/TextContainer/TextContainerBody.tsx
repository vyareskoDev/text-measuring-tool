import React, {FC} from "react";

type Props = {
    children: JSX.Element;
}

const TextContainerBody: FC<Props> = ({children}) => {
    return (
        <div className="text-container__header">
            {children}
        </div>
    )
}

export default TextContainerBody;