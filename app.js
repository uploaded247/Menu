const menu = [
    {
        id: 1,
        tittle: "Apple Juice",
        category: "Breakfast",
        price: 15,
        img: "./images/apple.jfif",
        desc: `Lorem ipsum, sit amet consectetur adipisicing elit. Qui necessitatibus esse ipsa labore reprehenderit nam perspiciatis aliquam quae possimus placeat.`
    },
    {
        id: 2,
        tittle: "Berry Snacks",
        category: "Breakfast",
        price: 15.99,
        img: "./images/berry.jfif",
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui esse ipsa labore nam perspiciatis aliquam quae possimus placeat.`
    },
    {
        id: 3,
        tittle: "Orange Juice",
        category: "Breakfast",
        price: 10.1,
        img: "./images/images.jfif",
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui necessitatibus esse ipsa labore reprehenderit nam perspiciatis aliquam quae possimus placeat.`
    },
    {
        id: 4,
        tittle: " Bread & Egg",
        category: "Lunch",
        price: 5.76,
        img: "./images/bread-egg.jfif",
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui necessitatibus esse ipsa labore reprehenderit nam perspiciatis aliquam quae possimus placeat.`
    },
    {
        id: 5,
        tittle: "Bread & Banana",
        category: "Lunch",
        price: 9.70,
        img: "./images/bread-banana.jfif",
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui necessitatibus esse ipsa labore reprehenderit nam perspiciatis aliquam quae possimus placeat.`
    },
    {
        id: 6,
        tittle: "Pizza",
        category: "Lunch",
        price: 34.2,
        img: "./images/pizza.jfif",
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui necessitatibus esse ipsa reprehenderit nam perspiciatis aliquam quae possimus placeat.`
    },
    {
        id: 7,
        tittle: "Special Combo",
        category: "Shakes",
        price: 20,
        img: "./images/specia-combo.jfif",
        desc: `You ipsum dolor, sit amet consectetur adipisicing elit. Qui esse ipsa labore reprehenderit nam perspiciatis aliquam quae possimus placeat.`
    },
    {
        id: 8,
        tittle: "Puff",
        category: "Shakes",
        price: 18.9,
        img: "./images/puff.jfif",
        desc: `I ipsum dolor, sit amet consectetur adipisicing elit. Qui necessitatibus esse ipsa labore reprehenderit nam perspiciatis aliquam quae possimus placeat.`
    },
    {
        id: 9,
        tittle: "Table Set",
        category: "Shakes",
        price: 33.45,
        img: "./images/table-set.jfif",
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui necessitatibus esse ipsa labore reprehenderit nam perspiciatis aliquam quae possimus placeat.`
    },
]

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn")

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu)
}); 

// filtter btn
filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === "All") {
            displayMenuItems(menu)
        }
        else {
            displayMenuItems(menuCategory)
        }
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
                <div><img src=${item.img} class="photo" alt=${item.tittle}></div> 
                <div class="item-info">
                    <header>
                        <h4>${item.tittle}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
             </article>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu
}