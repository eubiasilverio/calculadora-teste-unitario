var {soma, subtrair} = require('./index.js')(soma)

test('somar dois numeros', function() {
    var resultado = somar(10, 10);
})

expect(resultado).tobe(20);


test('subtrair dois numeros', function() {
    var resultado = subtrair(10, 10);
})

expect(resultado).tobe(0);