// Hardcoded values for the season and plant type
let seasonInput = prompt("Enter season:"); // TODO: Replace with prompt() to allow user interaction.
alert("Season entered is, " + seasonInput);

let plantTypeInput = prompt("Enter plant type:"); // TODO: Replace with prompt() to allow user interaction.
alert("The type of plant is, " + plantTypeInput);

// Variable to hold gardening advice
let advice = "";

// Determine advice based on the season
if (seasonInput === "summer") {
    advice += "Water your plants regularly and provide some shade.\n";
} else if (seasonInput === "winter") {
    advice += "Protect your plants from frost with covers.\n";
} else if (seasonInput === "autumn"){
    advice += "Collect and compost fallen leaves (avoid diseased material).\n";
} else if (seasonInput === "spring") {
    advice += "Mulch around plants to retain moisture and suppress weeds.\n"
}

// Determine advice based on the plant type
if (plantTypeInput === "flower") {
    advice += "Use fertiliser to encourage blooms.";
} else if (plantTypeInput === "vegetable") {
    advice += "Keep an eye out for pests!";
} else {
    advice += "No advice for this type of plant.";
}

// Log the generated advice to the console
console.log(advice);

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
