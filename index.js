const snowflake = document.querySelector(".snowflake");
const count = document.querySelector(".count");

countValue = 0;

snowflake.addEventListener('click', () => {
    countValue++;
    count.textContent = countValue;
})