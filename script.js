const rangeInputs = document.querySelectorAll('input[type="range"]');
const amount = document.querySelector('.input-box-wrapper .amount');
const numberOfYear = document.querySelector('.input-box-wrapper .number-of-year');
const interestBtn = document.querySelector('.interest-btn');
const interestValue = document.querySelector('.input-box-wrapper .interest-rate');

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    // document.querySelector('.input-value[value = ""]').innerText = val;
    
    
}
const amountValue = () => {
  document.querySelector('.input-box-wrapper .amount-value').innerText = amount.value;
}

const yearValue = () => {
  document.querySelector('.input-box-wrapper .year-value').innerText = numberOfYear.value;
}
const interestRateValue = () => {
  document.querySelector('.input-box-wrapper .interest-rate-value').innerText = interestValue.value+"%";
}

rangeInputs.forEach(rangeInput => {
  rangeInput.addEventListener('input', handleInputChange)
})
  document.querySelector('.input-box-wrapper .interest-rate-value').innerText = interestValue.value;
const calculateInterest = () => {
  totalAmountCalculate = (amount.value*numberOfYear.value*interestValue.value)/100;
  document.querySelector('.total-interest span').innerText = totalAmountCalculate;
  console.log(totalAmountCalculate);
}
  amount.addEventListener('input',amountValue);
  numberOfYear.addEventListener('input',yearValue);
  interestValue.addEventListener('input',interestRateValue);
  interestBtn.addEventListener('click',calculateInterest);