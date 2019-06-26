import app from './app';
import '@babel/polyfill';

async function main(){
    await app.listen(4040);
    console.log('Server on port 4040');
}

main(); 