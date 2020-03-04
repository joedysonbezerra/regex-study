const regex = /{(.*?)}/gm;
const str = `kkekdokekedkokekedokoe { 400 + 200; 5 ADD 6; 4 ADD 'quatro';} kdeokdoekoedkoedk`;

const partialResult = str.match(regex);

const result = partialResult
  .map(substring => substring.split(";"))
  .pop()
  .map(substring => substring.split(" "));
result.pop();
result.forEach(substring => substring.shift());

console.table(result);
