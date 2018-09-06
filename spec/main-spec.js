const {judge} = require('../main/main');

describe('judge', () => {
    it('should return 4b when given 1234 and 5678', function () {
        expect(judge('1234', '5678')).toBe('0A4B');
    });
});