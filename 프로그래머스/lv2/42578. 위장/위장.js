const solution = (clothes) => {
    let count = 1;
    const obj = {};
    
    clothes.forEach((cloth, idx) => {
        const [name, category] = cloth;
        if (obj[category]) obj[category].push(name);
        else obj[category] = [name];
    });
    
    for (const [key, value] of Object.entries(obj)) {
        count *= (value.length + 1)
    }

    return (count - 1);
}