exports.sign = (bornDate) => {
    const date = new Date();
    const year = date.getFullYear();
    const bornDateToDate = new Date(`${bornDate.slice(3, 5)}/${bornDate.slice(0, 2)}/${year}`)

    if (bornDateToDate >= new Date(`03/21/${year}`) && bornDateToDate <= new Date(`04/20/${year}`)) {
        return "Áries"
    } else if (bornDateToDate >= new Date(`04/21/${year}`) && bornDateToDate <= new Date(`05/20/${year}`)) {
        return "Touro"
    } else if (bornDateToDate >= new Date(`05-21-${year}`) && bornDateToDate <= new Date(`06-20-${year}`)) {
        return "Gêmeos"
    } else if (bornDateToDate >= new Date(`06/21/${year}`) && bornDateToDate <= new Date(`07/22/${year}`)) {
        return "Câncer"
    } else if (bornDateToDate >= new Date(`07/23/${year}`) && bornDateToDate <= new Date(`08/22/${year}`)) {
        return "Leão"
    } else if (bornDateToDate >= new Date(`08/23/${year}`) && bornDateToDate <= new Date(`09/22/${year}`)) {
        return "Virgem"
    } else if (bornDateToDate >= new Date(`09/23/${year}`) && bornDateToDate <= new Date(`10/22/${year}`)) {
        return "Libra"
    } else if (bornDateToDate >= new Date(`10/23/${year}`) && bornDateToDate <= new Date(`11/21/${year}`)) {
        return "Escorpião"
    } else if (bornDateToDate >= new Date(`11/22/${year}`) && bornDateToDate <= new Date(`12/21/${year}`)) {
        return "Sagitário"
    } else if (bornDateToDate >= new Date(`12/22/${year}`) && bornDateToDate <= new Date(`01/20/${year}`)) {
        return "Capricórnio"
    } else if (bornDateToDate >= new Date(`01/21/${year}`) && bornDateToDate <= new Date(`02/18/${year}`)) {
        return "Aquário"
    } else {
        return "Peixes"
    }
}