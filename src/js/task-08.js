const refs ={
    formEl: document.querySelector(".login-form"),
    inputEmailEl: document.querySelector("input[name='email']"),
    inputPasswordlEl: document.querySelector("input[name='password']"),
}
   
refs.formEl.addEventListener("submit", addDataOnFormData);


function addDataOnFormData (event){

    // Відміняєм перезагрузку сторінки при події submit
    event.preventDefault();

    // Перевіряєм, чи користувач ввів дані у всі поля форми. Якщо ні
    // перериваєм відправку даних та просимо внести дані
    const emailData = refs.inputEmailEl.value.length;
    const passwordData = refs.inputPasswordlEl.value.length;
    
    if(emailData === 0 || passwordData === 0) return alert `Всі поля повинні бути заповнені!`;

    // отримуєм дані з полів форми
    const formData = new FormData(event.currentTarget);
    
    //  отримані дані вносимо в перемінну та виводимо в log 

    let dataInputUser = {};

    formData.forEach((email, password) => {
        
        dataInputUser.email = refs.formEl.email.value;
        dataInputUser.password = refs.formEl.password.value;
        
    });
    console.log(dataInputUser)
   
    // Чистимо поля форми
    refs.formEl.reset();

    
}