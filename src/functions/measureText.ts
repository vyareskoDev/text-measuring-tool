import countWordInAText from "./countWordInAText";

const AVERAGE_READING_SPEED = 275, AVERAGE_SPEAKING_SPEED = 180;



export default function measureText(text: string)
{
    const textInfo = {
        wordsCount: 0,
        charCount: 0,
        sentencesCount: 0,
        averageReadingTime: 0,
        averageSpeakingTime: 0,
        theMostPopularWord: "None",
        theMostPopularWordCount: 0
    }
    if(text.length === 0) return textInfo;
    const normalisedTextArray = text.trim().toLowerCase().split(" ");
    normalisedTextArray.forEach(elem => elem.trim());
    textInfo.wordsCount = normalisedTextArray.length;
    textInfo.charCount = text.length;

    for(let word of normalisedTextArray)
    {
        const wordCount = countWordInAText(word, text);
        if(wordCount > textInfo.theMostPopularWordCount)
        {
            textInfo.theMostPopularWord = word;
            textInfo.theMostPopularWordCount = wordCount;
        }
        for(let char of word) 
        {
            const indexOfChar = word.indexOf(char);
            if(char === "." || char === "!" || char === "?")
            {
                if(char === ".")
                {
                    if((word[indexOfChar + 1] === "." && word[indexOfChar + 2] === ".") || word[indexOfChar + 1] === ".")
                    {
                        textInfo.sentencesCount++;
                    }
                    else if(word.at(-1) === char)
                    {
                        textInfo.sentencesCount++;
                    }
                }
                else if(char === "!")
                {
                    if(word[indexOfChar + 1] === "?")
                    {
                        textInfo.sentencesCount++;
                    }
                    else if(word.at(-1) === char)
                    {
                        textInfo.sentencesCount++;
                    }
                }
            }
        }
    }
    textInfo.averageReadingTime = Math.round((textInfo.wordsCount * 60) / AVERAGE_READING_SPEED);
    textInfo.averageSpeakingTime = Math.round((textInfo.wordsCount * 60) / AVERAGE_SPEAKING_SPEED);
    return textInfo;
}