/**
 * 
 * Por default quando declaro um parâmetro em uma função tudo é OBRIGATÓRIO
 * Para declarar um parâmetro OPCIONAL, adicionar o '?' no final da variavel
 * 
 * Declarar tipo unknown também funciona
 * 
 * let input: any   any desabilita o typescript
*/

function sendSpaceship(spaceship:{pilot:string,coPilot?:string}) {
    //...
}

sendSpaceship({pilot: 'Hans Solo', coPilot: 'Chewbacca'})

sendSpaceship({pilot:'Luke'})

let input: unknown

/**
 * Tipo never:
 * o never atribuido a uma variável, faz com que ela nunca receba nenhum outro tipo
 * ou seja, é uma condição de não existência
*/

function verification(test:unknown) {
    if (test) {
        
    }else{
        let _check: never
        let text = _check
        text = ''
        return _check
    }
}
