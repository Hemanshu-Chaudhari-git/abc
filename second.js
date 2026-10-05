// Fertilizer data
let fertilizers = [{
        name: "NPK Fertilizer",
        type: "Chemical",
        price: 1250,
        quantity: "50 kg"
    },
    {
        name: "Organic Compost",
        type: "Organic",
        price: 450,
        quantity: "25 kg"
    },
    {
        name: "Liquid Fertilizer",
        type: "Liquid",
        price: 650,
        quantity: "5 L"
    }
];


// Display fertilizers
function displayFertilizers(list = fertilizers) {

    const products = document.getElementById("products");

    products.innerHTML = "";

    if (list.length === 0) {
        products.innerHTML =
            "<p>No fertilizers found.</p>";
        return;
    }

    list.forEach((fertilizer, index) => {

        products.innerHTML += `
            <div class="product">

                <h3>${fertilizer.name}</h3>

                <p>
                    <strong>Type:</strong>
                    ${fertilizer.type}
                </p>

                <p>
                    <strong>Price:</strong>
                    ₹${fertilizer.price}
                </p>

                <p>
                    <strong>Quantity:</strong>
                    ${fertilizer.quantity}
                </p>

                <button onclick="deleteFertilizer(${index})">
                    Delete
                </button>

            </div>
        `;
    });
}


// Add fertilizer
function addFertilizer() {

    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    // Check empty fields
    if (
        name === "" ||
        type === "" ||
        price === "" ||
        quantity === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    // Create new fertilizer
    const fertilizer = {
        name: name,
        type: type,
        price: Number(price),
        quantity: quantity
    };

    // Add to array
    fertilizers.push(fertilizer);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("type").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";

    // Refresh display
    displayFertilizers();

    alert("Fertilizer added successfully!");
}


// Delete fertilizer
function deleteFertilizer(index) {

    fertilizers.splice(index, 1);

    displayFertilizers();
}


// Search fertilizer
function searchFertilizer() {

    const searchText =
        document.getElementById("search").value.toLowerCase();

    const filteredFertilizers =
        fertilizers.filter(function(fertilizer) {

            return (
                fertilizer.name
                .toLowerCase()
                .includes(searchText) ||
                fertilizer.type
                .toLowerCase()
                .includes(searchText)
            );

        });

    displayFertilizers(filteredFertilizers);
}


// Display fertilizers when page loads
displayFertilizers();