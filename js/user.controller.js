
function onInit() {
    loadUser()
    loadUserColors()
}

function onSliderValue() {
    const userAge = document.querySelector('[name=userAge]')
    const elCurrAge = document.querySelector('.currAge')
    elCurrAge.innerHTML = userAge.value
}

function loadUserColors() {
    if (gUser){
        document.querySelector('body').style.backgroundColor = gUser.bgColor
        document.querySelector('body').style.color = gUser.txtColor
    }
    else{
        document.querySelector('body').style.backgroundColor = 'none'
        document.querySelector('body').style.color = 'black'
    }
}

function displayHoursTillBday(){
    
}