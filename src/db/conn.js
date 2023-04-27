const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/baibhav-website', {
    // useCreateIndex: true,
    useNewUrlParser: true,
    UseUnifiedTopology: true
}).then(() => {
    console.log('connection succesful')
}).catch((err) => {
    console.log(err)
})