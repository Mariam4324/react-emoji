export function unicalization(keywords) {
    const keywordsArr = keywords.split(" ");
    const unicValuesArr = [...new Set(keywordsArr)];
    const unicValues = unicValuesArr.join(" ");
    return unicValues;
}

