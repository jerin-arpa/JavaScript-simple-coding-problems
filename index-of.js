const lyrics = 'Ismat Jerin arpa';

const searchString = 'jerin';

const lyricsLowerCase = lyrics.toLowerCase();

const searchStringLowerCase = searchString.toLowerCase();


// indexof
console.log(lyrics.indexOf('arpa'));
console.log(lyrics.indexOf('Ismat'));

if (lyrics.indexOf('Jerin') !== -1) {
    console.log('exists inside the string');
}
else {
    console.log('does not exist the string');
}

// start with
console.log(lyrics.startsWith('Ismat'));

// Ends with
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

console.log(fileName.endsWith('.pdf'));
console.log(otherFile.endsWith('.pdf'));