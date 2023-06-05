//برای انتخاب تمام کارت ها و کلیدهای فیلتر
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// تعریف فانکشن filterCards / با انتخاب هر کلید اکتیو میشه
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

// iterate over each filterable card
filterableCards.forEach(card => {
// add hide class / کارت ها مخفی بشن
card.classList.add("hide");
// چک کردن مربوط بودن کارت با فیلتر انتخاب شده
if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
    card.classList.remove("hide");
}
});
};


// click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards));