let displayEMI = document.getElementById('loan-emi');
let displayTotalInterest = document.getElementById('loan-total-interest');
let displayTotalAmount = document.getElementById('loan-total-amount');
let tenureInput = document.getElementById('loan-tennure').value;
let amountInput = document.getElementById('loan-amount').value;
let interestInput = parseFloat(document.getElementById('loan-interest').value);

let calculateBtn = document.getElementById('Calculate-btn');

function calculateEMI() {



    let interest = interestInput / 12 / 100;
    let emi = amountInput * interest * (Math.pow(1 + interest, tenureInput)) / (Math.pow(1 + interest, tenureInput) - 1);

    return emi;
}

function updateData(emi) {
    displayEMI.innerHTML = Math.round(emi);

    displayTotalAmount.innerHTML = Math.round(emi * tenureInput);

    displayTotalInterest.innerHTML = (Math.round(emi * tenureInput) - amountInput);
}

function init() {
    updateData(calculateEMI());
    displayChart(displayTotalInterest.innerHTML,amountInput)
}

calculateBtn.addEventListener('click', () => init());


function displayChart(totalInterest,loanAmount) {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Total Interest','Principal Loan Amount'],
            datasets: [{
                data: [totalInterest,loanAmount],
                backgroundColor : ['#e63946','#14213d'],
                borderWidth: 0
            }]
        },
    });
}