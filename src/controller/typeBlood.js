const typeBlood = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

exports.TypeBloodArray = () => {
    const randomNumber = Math.floor(Math.random() * typeBlood.length);
    return typeBlood[randomNumber];
}


