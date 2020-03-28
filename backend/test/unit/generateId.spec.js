const generateId = require('../../src/ultility/generateId');
describe('Generate ID', () => {
    it('should generate an ID', () => {
        const id = generateId();
        expect(id).toHaveLength(8);
    })
})