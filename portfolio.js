const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const $path = require('path');
const publicDir = $path.resolve('./public')

app.use(express.static('public'))
app.listen(port, () => (`app listening at ${port}`))

app.get('/about', (request, response) => {
    response.sendFile(publicDir + '/about.html')

})

app.get('*', (request, response) => {
    response.status(404).send('OOOOOOOOOPS')
})