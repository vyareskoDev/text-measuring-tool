import React, {useState} from "react";
import "./Accordion.css";

type AccordionProps = {
    title: string;
    body: string;
}


const Accordion:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div className="accordion">
            <div className="item">
                <div className="item__title">
                    <span className="title">
                        Description
                    </span>
                    <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close..." : "Open..."}</button>
                </div>
                {isOpen&&
                    <div className="item__body">
                        <div className="text-block">
                            <div className="text-block__heading">
                                <span className="small-heading">
                                    What is this?
                                </span>
                            </div>
                            <div className="text-block__body">
                                <span className="plain-text">
                                This is Text Measuring Tool, that can be used in many cases. I think that everyone had problems with analysis of their essay or any other kind of text work.
                                My tool is a perfect solution for everyone, because it can do everything you need to measure and analyse your text!
                                </span>
                            </div>
                        </div>

                        <div className="text-block">
                            <div className="text-block__heading">
                                <span className="small-heading">
                                    What it can do?
                                </span>
                            </div>
                            <div className="text-block__body">
                                <span className="plain-text">
                                    This tool can:
                                </span>
                                <ul>
                                        <li>Count words in the text</li>
                                        <li>Count chars in the text</li>
                                        <li>Count sentences in the text</li>
                                        <li>Calculate average speaking and reading time</li>
                                        <li>Find the most popular word in the text</li>
                                        <li>Find the most popular word count</li>
                                        <li>Import text from the .txt file</li>
                                        <li>Export text into the .txt file</li>
                                    </ul>
                            </div>
                        </div>
                        
                        
                    </div>
                }
            </div>
        </div>
    )
}


export default Accordion;