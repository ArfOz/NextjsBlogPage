export function CapitalizeFirstLetter(words: string) {
    const arr = words.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(' ');

    return str2;
}
