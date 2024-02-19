import { object } from "prop-types";

const numberRow = (number ,elements, style = {}) => {
    let numberTemp = number;
    let spaceTemp = -1;
    while(parseInt(numberTemp) > 0) {
        numberTemp = numberTemp / 10;
        spaceTemp += 1;
    }
    return <div style={style}>
        <small style={{marginLeft: `calc(2rem - ${spaceTemp * 6}px)`}} className='number-row'>{number}</small>
        {elements}
    </div>
}

const searchData = (data, value) => {
    const searchResults = [];
    for (let i = 0; i < data.length; i++) {
        if(data[i].name.toLowerCase().includes(value.toLowerCase())) {
            searchResults.push({...data[i], found: "name"});
        } else {
            if (data[i].description) {
                for (let j = 0; j < data[i].description.length; j++) {
                    if(data[i].description[j].toLowerCase().includes(value.toLowerCase())) {
                        searchResults.push({...data[i], found: "description", index: j});
                    }
                }
            }
        }
    }
    return searchResults;
}

const createPath = (object, include_file = true) => {
    let path = [];
    // eslint-disable-next-line default-case
    switch (object.component) {
        case "academy":
            path.push("Education");
            path.push("Academy");
            break;
        case "skill":
            path.push("Skills");
            break;
        case "project":
            path.push("Projects");
            break;
        case "course":
            path.push("Education");
            path.push("Courses");
            break;
        case "experience":
            path.push("Experience");
            break;
        case "resume":
            path.push("Resumes");
            break;
    }
    if(include_file)
        path.push(object.name);
    return path;
}


export { numberRow, searchData, createPath };