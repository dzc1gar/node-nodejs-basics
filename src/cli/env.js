const parseEnv = () => {
    const result = []
    for (const e of Object.keys(process.env)) {
        if (e.startsWith('RSS_')) {
            result.push(`${e}=${process.env[e]}`)
        }
    }
    if (result.length > 0) {
        console.log(result.join('; '))
    }
};

parseEnv();