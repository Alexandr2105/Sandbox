// Добавление параметра по умолчанию в операторы Switch
function switchOfStuff(val) {
    let answer;
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

switchOfStuff(1);