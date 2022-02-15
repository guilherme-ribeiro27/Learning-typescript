function sendSpacheship(name: string , captain: string) {
    const spaceship = {
        name,
        captain,
        speed:20,
        inMission: true,
        crew:[]
    }

    alert(`A nave ${spaceship.name} comandada por capitão ${spaceship.captain} foi enviada em uma missão`)
    return spaceship
}

function accelerate(targetSpeed:number,spaceship:{name:string, speed:number}) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da nave ${spaceship.name} para ${targetSpeed}...`)
    }else if(spaceship.speed < targetSpeed){
        alert(`Aumentando a velocidade da nave ${spaceship.name} para ${targetSpeed}...`)
    }else{
        alert(`Mantendo a velocidade da nave ${spaceship.name}`)
    }
}

const spaceshipName = prompt('Insira o nome da nave a ser enviada: ');
const spaceshipCaptain = prompt('Insira o nome do capitão da nave: ');

const currentShip = sendSpacheship(spaceshipName ?spaceshipName:'',spaceshipCaptain ? spaceshipCaptain : '')
const speed = Number(prompt('Insira a velocidade para qual deseja acelerar: '))

accelerate(speed,currentShip)
