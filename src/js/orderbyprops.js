export default function orderByProps(obj, order) {
    const startProps = [];
    
    order.forEach(key => {
        if (key in obj) {
            startProps.push({ key, value: obj[key] });
        }
    })
    
    const restProps = [];
    
    for (const key in obj) {
        if (!order.includes(key)) {
            restProps.push({ key, value: obj[key] });
        }
    }
    
    restProps.sort((a, b) => a.key.localeCompare(b.key));

    const result = startProps.concat(restProps);
    
    return result;
}