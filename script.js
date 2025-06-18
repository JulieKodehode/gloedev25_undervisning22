console.log("Hallajen");

// Funksjon som henter og tar i mot data fra en Cat Facts API

async function fetchFacts() {
    const fetchData = await fetch("https://catfact.ninja/facts");
    // console.log(fetchData);

    const data = await fetchData.json();
    // console.log(data);
    // console.log(data.data); // Jobber fra dette punktet
    // console.log(data.data[1]);
    // console.log(data.data[1].fact);

    return data;
};

// fetchFacts();

async function displayFacts() {
    const response = await fetchFacts();
    console.log(response);

    const catFacts = response.data;
    console.log(catFacts);

    const factsList = document.getElementById("factsList");

    catFacts.forEach(item => {
        const listItem = document.createElement("li");

        const factItem = item.fact;
        listItem.textContent = factItem;

        factsList.appendChild(listItem);
    });
};

displayFacts();