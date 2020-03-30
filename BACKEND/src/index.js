const express = require('express')
const cors = require('cors')

const app = express()

const routes = require('./routes')

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(3333)
/*magneficiência dos números 3 6 9 chave do universo
*"se voce soubesse a magneficiencia dos numeros 3,6 e 9, entao voce teri a 
* chave do universo" se voce quiser descobrir os segredos do Universo, pense em
* termos de energia, frequência e vibração. - Nikolas Tesla
*/
