function printOddLetter(word){
    let array = word.split('');
    let middleIndex = Math.floor(array.length/2);
    let outputArray = [];
    for(let i=1;i<=array.length-middleIndex;i++){
        outputArray.push(array.slice(middleIndex,middleIndex+i));
    }
    let lastLine = outputArray.slice(-1)[0];
    for(let j=1;j<=middleIndex;j++){
        outputArray.push(lastLine.concat(array.slice(0,j)));
    }
    outputArray.forEach(el => {
        if(el.length != word.length){
            el = Array(word.length-el.length).fill(' ').concat(el);
        }
        console.log(el.join(''))
    })
}

printOddLetter("WATE")