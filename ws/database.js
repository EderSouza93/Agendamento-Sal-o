const mongoose = require('mongoose');
const URI = 'mongodb+srv://salaoUser:zu0TwoBdn8Ne37jH@clusterdev.scywyeq.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(URI)
.then(() => console.log('DB is Up!'))
.catch(() => console.log('Erro ao conectar ao DB'));
