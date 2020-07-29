export function findTheFirstIndexDot(textArr) {
    let number;
    for(let i = 0; i < textArr.length; i++) {
        if(textArr[i] === '.') {
            number = i+1;
            break;
        }
    }
    return number;
}