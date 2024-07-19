function signalOrStringValue(value) {
    if (typeof value === 'number') {
        return `Signal: ${value}`;
    } else if (typeof value === 'string') {
        return `String: ${value}`;
    } else {
        return 'Unknown';
    }
}

const rangeMin = 10;
const rMin = signalOrStringValue(rangeMin);

console.log(rMin); // Output: "Signal: 10"
