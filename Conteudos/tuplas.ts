/**
 * Tuplas permitem receber lista de tipos diferentes, porém com um tamanho determinado
 * strings, number, boolean, list
 */

let crew : [string,string,string] = ['','','']

crew[0] = 'Isaac'
crew[1] = 'José'
crew[2] = 'Pedro'

let point : [number, number] = [2,5]

const [name, setName] = useState('') //exemplo de uso de tuplas em ReactJS