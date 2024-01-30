// First
const checkAge = (age) => {
  return ( age > 18 ) ? true : confirm('Say ok?')
}

checkAge(24);

// Second
const min = (a, b) => {
  return (a > b) ? a : b;
}

console.log(min(1, 4));

// Third
const ask = (question, yes, no) => {
  return confirm(question) ? yes() : no();
}

const showOk = () => alert("You agree");
const showCancel = () => alert("You disagree");

console.log(ask("Agree", showOk, showCancel));
