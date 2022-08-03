var gUser




function loadUser() {
    var user = loadFromStorage('userData')
    if (user) {
        gUser = user
        _saveUser2Storage()
        console.log(gUser)
        console.log('users bd',new Date(gUser.bDate).getTime())
        console.log('next',new Date(gUser.bDate).getTime())
        console.log('next',Date.now())


    }
}

function createUser(mail, age, bgColor, txtColor, date, time) {
    const user = {
        email: mail,
        age: age,
        bgColor: bgColor,
        txtColor: txtColor,
        bDate: date,
        bTime: time
    }
    gUser = user
}

function saveForm(ev) {
    ev.preventDefault()

    const userEmail = document.querySelector('[name=userEmail]').value
    const userAge = document.querySelector('[name=userAge]').value
    const userBgColor = document.querySelector('[name=bgColor]').value
    const userTxtColor = document.querySelector('[name=txtColor]').value
    const userBirthDate = document.querySelector('[name=bDate]').value
    const userBirthTime = document.querySelector('[name=bTime]').value

    console.log('Saving...', userEmail, userAge, userBgColor, userTxtColor, userBirthDate, userBirthTime)

    createUser(userEmail, userAge, userBgColor, userTxtColor, userBirthDate, userBirthTime)
    _saveUser2Storage()
}

function _saveUser2Storage() {
    saveToStorage('userData', gUser)
}

// function getBdayHours(){
//     var today = Date.now()
//     return today
// }