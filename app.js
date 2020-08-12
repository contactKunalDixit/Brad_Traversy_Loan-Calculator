// Listen for submit 

document.querySelector("#loan-form").addEventListener("submit", function (e) {
    // hide results
    document.querySelector("#results").style.display = "none";
    // hide Loading 
    document.querySelector("#loading").style.display = "none";
    calculateResults();
    e.preventDefault()
}) /*event bubbling in action since event handler is on a parent and event submit initiates from deep within a child */

// Create calculateResults

function calculateResults(e) {

    let uiAmount = document.querySelector("#amount");
    // console.log(uiAmount, e, typeof (uiAmount))
    // console.log(typeof (parseFloat(uiAmount.value)))
    let uiInterest = document.querySelector("#interest");
    let uiYears = document.querySelector("#years")
    let monthlyPayment = document.querySelector("#monthly-payment")
    let totalPayment = document.querySelector("#total-payment")
    let totalInterest = document.querySelector("#total-interest")

    const principal = parseFloat(uiAmount.value);
    const calculatedInterest = parseFloat(uiInterest.value) / 100 / 12;
    const calculatedPayments = parseFloat(uiYears.value) * 12;

    //  Compute a monthly payment

    const x = Math.pow(1 + calculatedInterest, calculatedPayments)
    const monthly = (principal * x * calculatedInterest) / (x - 1)

    /* Now check and ensure that monthly variable above is a finite number . Use method isFinite()*/

    if (isFinite(monthly)) {
        document.querySelector("#loading").style.display = "block";
        setTimeout(loadingResults, 2000);
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    } else {

        showError("Please check your numbers") /* function showError runs with your customised error msg */
    }
}

function loadingResults() {
    // document.querySelector("#loading").remove()
    document.querySelector("#loading").style.display = "none";
    document.querySelector("#results").style.display = "block";
}

// Create showError Function

function showError(error) {

    const errorDiv = document.createElement("div"); /*Create a div */

    /*in order to insert this function inside a DOM, grab the elements */
    const card = document.querySelector(".card")
    const heading = document.querySelector(".heading")

    errorDiv.className = "alert alert-danger"; /* Add a relevant bootstrap class name for alert */

    // create a text node and append to div
    errorDiv.appendChild(document.createTextNode(error))

    // Insert error before heading
    card.insertBefore(errorDiv, heading)

    // runs function clearError after 3 Seconds
    setTimeout(clearError, 3000)
}

function clearError() {
    document.querySelector(".alert").remove()
}