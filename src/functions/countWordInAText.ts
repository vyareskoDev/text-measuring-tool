export default function countWordInAText(word: string, text: string)
{
    if(!word) return 0;
    let wordCount = 0;
    const normalisedText = text.trim().toLowerCase().split(" ");
    const normalisedWord = word.trim().toLowerCase();

    for(let i = 0; i < normalisedText.length; i++)
    {   
        if(normalisedText[i] === normalisedWord)
        {
            wordCount++;
        }
    }

    return wordCount;
}
