const goBotton = document.querySelector('.GO');
const nameField = document.querySelector('.name');


const changeOpacity = () => {

    goBotton.style.backgroundColor = "#F9851A";
    goBotton.style.color = "black";
    goBotton.style.border = 0;


};


nameField.addEventListener('keyup', () => {
    goBotton.disabled = !nameField.value;
});

nameField.addEventListener('keypress', e => {
    if (e.target.value !="") {
        changeOpacity();
    }
});
