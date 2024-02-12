const mongoose = require('mongoose');
const URI = 'mongodb+srv://user_DB:5ohl8eBVPbAZlU6t@clusterdev.scywyeq.mongodb.net/salao-na-mao?retryWrites=true&w=majority';


main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(URI).then(() => console.log('DB is Up!')).catch(() => console.log('Erro ao conectar ao DB'));
};
