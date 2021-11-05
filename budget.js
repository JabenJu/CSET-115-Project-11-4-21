let budget = 0;
let expensesTotal = 0;

function budgetSetter(){
    budget = document.getElementById("loginPassword").value
}

function expenseAdd(){
    let expenseNames = document.getElementById("expenseNames")
    let expenseValues = document.getElementById("expenseValues")
    let nameHtml = expenseNames.innerHTML
    let valueHtml = expenseValues.innerHTML
    nameHtml += "\n"+(document.getElementById("expenseNameUi").val())
    valueHtml += "\n"+(document.getElementById("expenseAmountUi").val())
    expensesTotal += document.getElementById("expenseAmountUi").val()
    updateBalance()
}