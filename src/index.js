module.exports = function toReadable(number) {
    if (isTwoDigitNum(number)) {
        return getNameOfTwoDigitNum(number);
    }

    if (isThreeDigitNum(number)) {
        return getNameOfThreeDigitNum(number);
    }

    if (number === 0) {
        return "zero";
    }

    return simpleName(number);

    function simpleName(number) {
        let result;
        switch (number) {
            case 1:
                result = "one";
                break;
            case 2:
                result = "two";
                break;
            case 3:
                result = "three";
                break;
            case 4:
                result = "four";
                break;
            case 5:
                result = "five";
                break;
            case 6:
                result = "six";
                break;
            case 7:
                result = "seven";
                break;
            case 8:
                result = "eight";
                break;
            case 9:
                result = "nine";
                break;
            case 10:
                result = "ten";
                break;
            case 11:
                result = "eleven";
                break;
            case 12:
                result = "twelve";
                break;
            case 13:
                result = "thirteen";
                break;
            case 14:
                result = "fourteen";
                break;
            case 15:
                result = "fifteen";
                break;
            case 16:
                result = "sixteen";
                break;
            case 17:
                result = "seventeen";
                break;
            case 18:
                result = "eighteen";
                break;
            case 19:
                result = "nineteen";
                break;
            case 20:
                result = "twenty";
                break;
            case 30:
                result = "thirty";
                break;
            case 40:
                result = "forty";
                break;
            case 50:
                result = "fifty";
                break;
            case 60:
                result = "sixty";
                break;
            case 70:
                result = "seventy";
                break;
            case 80:
                result = "eighty";
                break;
            case 90:
                result = "ninety";
                break;
        }
        return result;
    }

    function isTwoDigitNum(number) {
        let str = number.toString();
        return str.length === 2;
    }

    function getRemainderNum(number) {
        return number % 10;
    }

    function getDigitNum(number) {
        return number - getRemainderNum(number);
    }

    function getNameOfTwoDigitNum(number) {
        if (
            isTwoDigitNum(number) &&
            getRemainderNum(number) !== 0 &&
            number > 20
        ) {
            return `${simpleName(getDigitNum(number))} ${simpleName(
                getRemainderNum(number)
            )}`;
        }

        if (isTwoDigitNum(number)) {
            return simpleName(number);
        }
    }

    function isThreeDigitNum(number) {
        let str = number.toString();

        return str.length === 3;
    }

    function getNameOfThreeDigitNum(number) {
        let numberOfHundreds = Math.trunc(number / 100);
        let twoDigitRemainder = number % 100;

        const nameOfHundreds = `${simpleName(numberOfHundreds)} ${"hundred"}`;

        if (twoDigitRemainder === 0) {
            return nameOfHundreds;
        }

        if (twoDigitRemainder < 10) {
            return `${nameOfHundreds} ${simpleName(twoDigitRemainder)}`;
        }

        return `${simpleName(
            numberOfHundreds
        )} ${"hundred"} ${getNameOfTwoDigitNum(twoDigitRemainder)}`;
    }
};
