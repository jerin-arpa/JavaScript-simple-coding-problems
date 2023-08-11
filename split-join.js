const lyrics = 'Tumi bondu kala pakhi ami jeno ki. bosonto kale tumay bolte pari ni. kala kala sada sada';

const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const characters = lyrics.split('');
console.log(parts);
console.log(sentence);
console.log(characters);


// slice
const partial = lyrics.slice(5, 8);
console.log(partial);

// sub String
const partial2 = lyrics.substring(5, 8);
console.log(partial2);


// join string
const lines = ['Tumi bondu kala pakhi ami jeno ki', 'Bosonto kale tumay bolte pari ni', 'Kala kala sada sada'];
const newSong = lines.join('.');
console.log(newSong);