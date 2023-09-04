const crypto = require("crypto");

const { getData } = require('../app.js');

jest.mock('crypto');

test('Fetch data function', async () => {

    // crypto.randomBytes.mockResolvedValueOnce('bytes');
    crypto.randomBytes.mockImplementationOnce(()=>Promise.resolve('bytes'));

    const res = await getData();
    console.log(res);
});