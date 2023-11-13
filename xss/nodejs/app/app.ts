import express,{type Request,type Response,type NextFunction} from 'express';
const app = express();
const PORT =  3000;
const APP_NAME = 'XSS Vulnerable server';

app.set('view engine', 'pug');

app.get('/',(req : Request,res: Response,next : NextFunction) =>{
    res.send({message :'Ok'})
});

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`The ${APP_NAME} is running at ${PORT}`);
})