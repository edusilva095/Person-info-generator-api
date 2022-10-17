exports.generateCpf = (state) => {
    const num1 = randomThreeNumbers();
    const num2 = randomThreeNumbers();
    const num3 = `${randomTwoNumbers()}${taxRegion(state)}`;
    const dig1 = dig(num1, num2, num3);
    const dig2 = dig(num1, num2, num3, dig1);
    return `${num1}.${num2}.${num3}-${dig1}${dig2}`;
}

exports.generateRg = () => {
    const num1 = randomTwoNumbers();
    const num2 = randomThreeNumbers();
    const num3 = randomThreeNumbers();
    const num4 = Math.floor(Math.random() * 9);
    return `${num1}.${num2}.${num3}-${num4}`;
}

const dig = (n1, n2, n3, n4) => {
    const nums = n1.split("").concat(n2.split(""), n3.split(""));
    if (n4 !== undefined) {
        nums[9] = n4;
    }

    let x = 0;
    for (let i = (n4 !== undefined ? 11 : 10), j = 0; i >= 2; i--, j++) {
        x += parseInt(nums[j]) * i;
    }

    const y = x % 11;
    return y < 2 ? 0 : 11 - y;
}

const randomThreeNumbers = () => {
    const randomNumber = Math.floor(Math.random() * 999);
    return ("" + randomNumber).padStart(3, '0');
}

const randomTwoNumbers = () => {
    const randomNumber = Math.floor(Math.random() * 99);
    return ("" + randomNumber).padStart(2, '0');
}

const taxRegion = (state) => {
    switch (state) {
        case "Distrito Federal":
        case "Goiás":
        case "Mato Grosso do Sul":
        case "Mato Grosso":
        case "Tocantis":
            return 1;
        case "Acre":
        case "Amazonas":
        case "Amapá":
        case "Pará":
        case "Rondônia":
        case "Roraima":
            return 2;
        case "Ceará":
        case "Maranhão":
        case "Piauí":
            return 3;
        case "Alagoas":
        case "Paraíba":
        case "Pernambuco":
        case "Rio Grande do Norte":
            return 4;
        case "Bahia":
        case "Sergipe":
            return 5;
        case "Minas Gerais":
            return 6;
        case "Espírito Santo":
        case "Rio de Janeiro":
            return 7;
        case "São Paulo":
            return 8;
        case "Paraná":
        case "Santa Catarina":
            return 9;
        default:
            return 0;
    }
}