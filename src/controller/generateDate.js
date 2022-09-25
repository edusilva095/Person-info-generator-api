exports.nascimento = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const yearPast = currentYear - 40;
    const year = Math.floor(Math.random() * (currentYear - yearPast + 1) + yearPast);
    const month = concantWithZero(Math.floor(Math.random() * 12 + 1));
    const day = validateDate(month, year);
    return `${day}-${month}-${year}`
}

function validateDate(month, year){
    //verificar qual meses possui 31, 30 e 28 dias
    if(month == "01" || month == "03" || month == "05" || month == "07" || month == "08" || month == "10" || month == "12"){
        return concantWithZero(Math.floor(Math.random() * 31 + 1));
    } else if(month == "04" || month == "06" || month == "09" || month == "11"){
        return concantWithZero(Math.floor(Math.random() * 30 + 1));
    }else{
        //verifica se o ano gerado é bissexto
        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
            return concantWithZero(Math.floor(Math.random() * 29 + 1));
        }else{
            return concantWithZero(Math.floor(Math.random() * 28 + 1));
        }
    }
}

function concantWithZero(value){
    let num = value;
    if(num < 10){
        return `0${num}`
    }else{
        return num;
    }
}