// Write your cade below:
function judge(randomNumber, userGuessedNumber) {
    const randomNumberArray = randomNumber.split("");
    const matchedNumber = userGuessedNumber.split("").reduce((sum, number) => (randomNumberArray.includes(number) ? sum + 1 : sum), 0)

    return `${matchedNumber}A${4-matchedNumber}B`
};

const ALL_NUMBERS = [0,1,2,3,4,5,6,7,8,9,0];

const randomNumbers = () => {
    let allNumbers = [...ALL_NUMBERS];
    const ret = [...Array(4)].reduce((ret, key)=>{
        const index = Math.floor(Math.random() * allNumbers.length);
        ret.push(allNumbers[index]);
        allNumbers.splice(index, 1);
        return ret
    }, []);
    console.log(ret);
    return ret.join("")
};

module.exports = {
    judge,
    randomNumbers
}