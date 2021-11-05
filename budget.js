let budget = 0;
let expensesTotal = 0;

function expenseAdd(){
    let expenseNames = document.getElementById("expenseNames")
    let expenseValues = document.getElementById("expenseValues")
    
    let pNode1 = document.createElement("p")
    let pNode2 = document.createElement("p")

    expenseNames.append(("\n"+document.getElementById("expenseNameUi").value),pNode1)
    expenseValues.append(("\n"+document.getElementById("expenseAmountUi").value),pNode2)

    expensesTotal += Number(document.getElementById("expenseAmountUi").value)
    $("#expenseJS").html("$" + expensesTotal)
    balanceUpdate()
}

function budgetUpdate()
{
    budget = Number($("#budgetUi").val())
    $("#budgetJS").html("$" + budget)
    balanceUpdate()
}

function balanceUpdate()
{
    let balance = budget - expensesTotal
    $("#balanceJS").html("$" + balance)
}