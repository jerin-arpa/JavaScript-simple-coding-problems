const lyrics = 'Ismat Jerin arpa';

const searchString = 'jerin';

const lyricsLowerCase = lyrics.toLowerCase();

const searchStringLowerCase = searchString.toLowerCase();

const doesExist = lyricsLowerCase.includes(searchStringLowerCase);

// another way
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

console.log(doesExist);
console.log(doesExistOneLine);