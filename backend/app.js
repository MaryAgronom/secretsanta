require('dotenv').config();

//config
const express = require('express');
const config = require('./appconfig');

//const Route
const indexRouter = require('./routes/indexRouter');
const regRouter = require('./routes/regRouter');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const roomRouter = require('./routes/roomRouter');
const feedBackRouter = require('./routes/feedBackRouter');
const logoutRouter = require('./routes/logoutRouter');
const cabinetRouter = require('./routes/adminCabinetRouter');
const shuffleRouter = require('./routes/shuffleRouter');

const app = express();
const PORT = process.env.PORT || 5000;

//middleware + confign
config(app);

//use Route
app.use('/', indexRouter);
app.use('/registration', regRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/feedback', feedBackRouter);
app.use('/room', roomRouter);
app.use('/logout', logoutRouter);
app.use('/cabinet', cabinetRouter);
app.use('/shuffle', shuffleRouter);

app.listen(PORT, () => console.log(`port started on ${PORT}`));
