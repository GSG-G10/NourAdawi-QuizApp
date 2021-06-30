const goBotton = document.querySelector('.GO');

const changeOpacity = () => {

    goBotton.style.backgroundColor = "#F9851A";
    goBotton.style.color = "black";
    goBotton.style.border = 0;


};


const nameField = document.querySelector('.name');

nameField.addEventListener('keypress', e => {
    if (e.target.value !="") {
        changeOpacity();
    }
});
