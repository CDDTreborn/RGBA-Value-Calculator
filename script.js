function calculateValues() {
    const presets = {
        1: [1.000],
        2: [0.221, 1.000],
        3: [0.089, 0.397, 1.000],
        4: [0.050, 0.221, 0.521, 1.000],
    };

    const channelIDs = {
        Red: 1,
        Green: 5,
        Blue: 9,
        Alpha: 13,
    };

    const rgbaInput = document.getElementById("rgba-input").value;

    // Validate input
    if (!/^[0-4]{4}$/.test(rgbaInput)) {
        alert("Invalid input. Please enter exactly 4 digits between 0 and 4.");
        return;
    }

    const channels = ["Red", "Green", "Blue", "Alpha"];
    const resultsTable = document.getElementById("results-table").querySelector("tbody");

    // Clear previous results
    resultsTable.innerHTML = "";

    // Process each channel
    for (let i = 0; i < 4; i++) {
        const channel = channels[i];
        const numIDs = parseInt(rgbaInput[i]);
        const startingID = channelIDs[channel];

        if (numIDs > 0) {
            const values = presets[numIDs];
            const idValuePairs = values.map((value, index) => {
                const currentID = startingID + index;
                const paddedID = currentID.toString().padStart(2, "0");
                return `ID ${paddedID} (${value.toFixed(3)})`; // Three decimal places
            }).join(", ");

            // Add row to the table
            const row = `<tr><td>${channel}</td><td>${idValuePairs}</td></tr>`;
            resultsTable.innerHTML += row;
        } else {
            // Add "None" row
            const row = `<tr><td>${channel}</td><td>None</td></tr>`;
            resultsTable.innerHTML += row;
        }
    }
}
