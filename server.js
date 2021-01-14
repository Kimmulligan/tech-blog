const {Comment, Post, User} = require('./models')
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret',
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    })
}; 

app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', userRouter)
app.use('/api/post', postRouter)
app.use(require("./routes/views"))




app.use(express.static(path.join(__dirname, 'public')));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('views'));
// app.use(require('./controllers'));



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});