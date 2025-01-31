const response = await fetch("/data.json");
const data = await response.json();

const summaryHeading = document.querySelector(".summary-section h2");

const categoryUI = [
    {
        "category": "Reaction",
        "color": "text-red",
        "bgColor": "summary-item--red"
    },
    {
        "category": "Memory",
        "color": "text-yellow",
        "bgColor": "summary-item--yellow"
    },
    {
        "category": "Verbal",
        "color": "text-green",
        "bgColor": "summary-item--green"
    },
    {
        "category": "Visual",
        "color": "text-blue",
        "bgColor": "summary-item--blue"
    },
];

let result = "";

categoryUI.map((category, index) => {
    const item = data[index]

    result += `<div class="summary-item ${category.bgColor}">
            <div class="summary-name">
                <img src="${item.icon}" alt="Icon ${item.category}">
                <p class="description-name ${category.color}">${item.category}</p>
            </div>
            <p class="transparent">
                <span class="text-bold">${item.score}</span> / 100
            </p>
        </div>`;
});

summaryHeading.insertAdjacentHTML("afterend", result);