var calculateBtn = document.getElementById("calculateBtn");

calculateBtn.onclick = function() {
    event.preventDefault();
    // Retrieve the values from the input fields and convert them to numbers
    var burgerAmount = Number(document.getElementById("burgerAmount").value);
    var steakAmount = Number(document.getElementById("steakAmount").value);
    var breakfastAmount = Number(document.getElementById("breakfastAmount").value);
    var sodaAmount = Number(document.getElementById("sodaAmount").value);
    var coffeeAmount = Number(document.getElementById("coffeeAmount").value);
    var milkshakeAmount = Number(document.getElementById("milkshakeAmount").value);

    // Calculate the total cost with combo deals
    var burgerTotal = Math.floor(burgerAmount / 2) * 10 + (burgerAmount % 2) * 6;
    var steakTotal = Math.floor(steakAmount / 2) * 8 + (steakAmount % 2) * 5;
    var breakfastTotal = Math.floor(breakfastAmount / 2) * 8 + (breakfastAmount % 2) * 5;

    // Regular prices for items without combos
    var sodaTotal = sodaAmount * 2;
    var coffeeTotal = coffeeAmount * 2;
    var milkshakeTotal = milkshakeAmount * 5;

    // Calculate the overall total
    var total = burgerTotal + steakTotal + breakfastTotal + sodaTotal + coffeeTotal + milkshakeTotal;

    // Display the total on the page
    document.getElementById("totalCost").innerText = "Total = " + "$" + total.toFixed(2);

    // Build the order summary only with items that have been ordered
    var orderSummary = "PREVIOUS ORDER:\n";  
    if (burgerAmount > 0) {
        orderSummary += "Burgers: " + burgerAmount + "\n";
    }
    if (steakAmount > 0) {
        orderSummary += "Steaks: " + steakAmount + "\n";
    }
    if (breakfastAmount > 0) {
        orderSummary += "Breakfast: " + breakfastAmount + "\n";
    }
    if (sodaAmount > 0) {
        orderSummary += "Soda: " + sodaAmount + "\n";
    }
    if (coffeeAmount > 0) {
        orderSummary += "Coffee: " + coffeeAmount + "\n";
    }
    if (milkshakeAmount > 0) {
        orderSummary += "Milkshake: " + milkshakeAmount + "\n";
    }

    // Update the order summary element with the text
    document.getElementById("orderSummary").innerText = orderSummary;

    document.getElementById("burgerAmount").value = "";
    document.getElementById("steakAmount").value = "";
    document.getElementById("breakfastAmount").value = "";
    document.getElementById("sodaAmount").value = "";
    document.getElementById("coffeeAmount").value = "";
    document.getElementById("milkshakeAmount").value = "";
};