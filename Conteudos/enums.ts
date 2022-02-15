/**
 * Retorna em forma de valores (padrão)
 * Define constantes que retornam valores na sequencia
 * MERCURIO = 0
 * VENUS = 1
 * ...
 * Muito bom para utilizar com banco de dados que utiliza número para referenciar strings
 * 
 * 
 * Também pode ser alteradas para receber strings
 */
enum Roles{
    ADMIN,
    USER
}
Roles.ADMIN //retorna 0
Roles.USER // retorna 1

enum Planets{
    MERCURIO = 'Mercurio',
    VENUS = 'Venus',
    TERRA = 'Terra',
    MARTE = 'Marte',
}

