test('addition', () => {
    expect(2 + 2).toBe(4)
});

test('i to be null', () => {
    const i = null;

    expect.assertions(2);
    expect(i).toBeNull();
    expect(i).toBeDefined()
});

const animal = ['cat', 'dog', 'Hen'];
test('Animal array', ()=>{
    expect(animal).toContain('Hen');
    expect(animal).toBeInstanceOf(Array)
});

function getData(){
    throw new Error('Not Found');
}

test('getData', ()=>{
    expect(getData).toThrow();
});