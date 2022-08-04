import React from "react";
import TextInfo from "../interfaces/TextInfo";
import "../styles/InfoTable.css"

type IntoTableProps = {
    textInfo: TextInfo;
}

const InfoTable:React.FC<IntoTableProps> = ({textInfo}) => {
    const {wordsCount, charCount, sentencesCount, averageReadingTime, averageSpeakingTime, theMostPopularWord, theMostPopularWordCount} = textInfo;
    return (
        <div className="table-container">
                  <table className="info-table">
                    <thead>
                      <tr>
                        <th>
                          Key
                        </th>
                        <th>
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Words count</td>
                        <td>{wordsCount || 0} words</td>
                      </tr>
                      <tr>
                        <td>Char count</td>
                        <td>{charCount || 0} chars</td>
                      </tr>
                      <tr>
                        <td>Sentences count</td>
                        <td>{sentencesCount || 0} sentences</td>
                      </tr>
                      <tr>
                        <td>Average reading time </td>
                        <td>{averageReadingTime || 0} s</td>
                      </tr>
                      <tr>
                        <td>Average speaking time</td>
                        <td>{averageSpeakingTime || 0} s</td>
                      </tr>
                      <tr>
                        <td>
                          The most popular word
                        </td>
                        <td>{theMostPopularWordCount > 1 ? theMostPopularWord : "None"}</td>
                      </tr>
                      <tr>
                        <td>
                          The most popular word count
                        </td>
                        <td>{theMostPopularWordCount > 1 ? theMostPopularWordCount : 0} times</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
    )
}

export default InfoTable;