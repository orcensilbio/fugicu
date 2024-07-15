function concatenateStrings(strings: string[]): string {
    let aggregator = '';
    for (let str of strings) {
        aggregator += str + ' ';
    }
    return aggregator.trim();
}

const words = ['Hello', 'world', 'this', 'is', 'an', 'example'];
console.log(concatenateStrings(words)); // Output: "Hello world this is an example"
