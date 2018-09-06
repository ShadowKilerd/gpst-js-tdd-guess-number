const {judge, randomNumbers} = require('../main/main');

describe('judge', () => {
    it('should return 4b when given 1234 and 5678', function () {
        expect(judge('1234', '5678')).toBe('0A4B');
    });
    it('should return 1A3b when given 1234 and 4567', function () {
        expect(judge('1234', '4567')).toBe('1A3B');
    });
    it('should return 4A0B when given 1234 and 1234', function () {
        expect(judge('1234', '1234')).toBe('4A0B');
    });
});

describe('randomNumbers', function () {

    it('should return four different chars', function () {
        const ret = randomNumbers();
        const retSet = new Set();
        ret.split("").map(item=>{
            retSet.add(item);
        })
        // retSet.add(...ret.split(""));
        expect([...retSet].length).toBe(4);
    });
});