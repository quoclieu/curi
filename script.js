function readInput() {
  let input = document.querySelector('.user-input');
  input.addEventListener('input', e => processInput(e.target.value));
}

function processInput(value) {
  let inputs = value.split(' ');
  if (validInput(inputs)) {
    const amount = inputs[0];
    const fromCurr = inputs[1];
    const toCurr = inputs[3];
    convert(amount, fromCurr, toCurr);
  }
}

function validInput(inputs) {
  return (
    inputs[0] &&
    inputs.length === 4 &&
    inputs[2] === 'to' &&
    inputs[1].length === 3 &&
    inputs[3].length === 3
  );
}

function convert(amount, fromCurr, toCurr) {
  fetch(
    `https://free.currconv.com/api/v7/convert?q=${fromCurr}_${toCurr}&compact=ultra&apiKey=5626dfa264df69da3065`
  )
    .then(resp => resp.json())
    .then(data => {
      const rate = Object.values(data)[0];
      const result = parseInt(amount) * rate;
      document.querySelector('.result').textContent = `${result.toFixed(
        2
      )} ${toCurr}`;
    });
}

readInput();
