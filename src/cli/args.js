const parseArgs = () => {
    const result = [];
    let tmpStr = "";
    process.argv.slice(2).forEach((val, indx) => {
        if (indx % 2 === 0) {
            tmpStr = val.substring(2)
        } else {
            tmpStr += ` is ${val}`
            result.push(tmpStr)
        }
    })
    if (result.length > 0){
        console.log(result.join(', '))
    }
};

parseArgs();