const expres =require('express');
const morgan =require('morgan');
const session =require('express-session');
const cors =require('cors');
const app=expres();

const {mongoose} =require('./Database');

app.set('port',process.env.PORT || 3001);

app.use(morgan('dev'));
app.use(expres.json( {limit: "200mb"}));
app.use(cors({origin:'http://localhost:3000'}));
app.use(session({
    limit: "200mb",
    secret:'ldskaldklsa',
    resave:true,
    saveUninitialized:true
}));

//ROUTES
app.use('/api/' ,require('./Routes/Routes'));

app.listen(app.get('port'),()=>{
    console.log("servidor en el puerto",app.get('port'));
});