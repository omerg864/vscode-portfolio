
const numbers = (limit) => {
    const lines = []
    let limitTemp = limit;
    let space = 0;
    while(parseInt(limitTemp) > 0) {
        limitTemp = limitTemp / 10;
        space += 1;
    }
    let reduce = 10;
    for (let i = 1; i <= limit; i++) {
        if(i === reduce) {
            reduce *= 10;
            space--;
        }
        let number = <small key={i} style={{top: `${i * 20}px`, textIndent: `${space * 5}px`}} className='number-row'>{i}</small>;
        lines.push(number)
    }
    lines.push(<small key={limit + 1} style={{top: `${(limit + 1) * 20}px`}} className='number-row'>&nbsp;</small>)
    return lines;
}

const numberRow = (number ,elements) => {
    let numberTemp = number;
    let spaceTemp = -1;
    while(parseInt(numberTemp) > 0) {
        numberTemp = numberTemp / 10;
        spaceTemp += 1;
    }
    return <div>
        <small style={{marginLeft: `calc(2rem - ${spaceTemp * 6}px)`}} className='number-row'>{number}</small>
        {elements}
    </div>
}


export { numbers, numberRow };