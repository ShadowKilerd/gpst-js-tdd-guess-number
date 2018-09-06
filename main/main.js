// Write your cade below:
function judge(randomNumber, userGuessedNumber) {
    const randomNumberArray = randomNumber.split("");
    const matchedNumber = userGuessedNumber.split("").reduce((sum, number) => (randomNumberArray.includes(number) ? sum + 1 : sum), 0)

    return `${matchedNumber}A${4-matchedNumber}B`
};

module.exports = {
    judge
}