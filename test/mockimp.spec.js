test('Mock implementation', () => {
    const mockFn = jest.fn(() => 'default')
        .mockImplementation(() => 'First Call')
        .mockImplementation(() => 'Second Call')

    const res1 = mockFn();
    const res2 = mockFn();
    // console.log(res1);
    // console.log(res1);

});

test('MockImplementationOnce', () => {
    const mockFn = jest.fn(() => 'default')
        .mockImplementationOnce(() => 'First Call')
        .mockImplementationOnce(() => 'Second Call')

    const res1 = mockFn();
    const res2 = mockFn();
    const res3 = mockFn();

    console.log(res1);
    console.log(res2);
    console.log(res3);


});