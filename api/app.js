var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const RateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eateryRouter = require('./routes/eatery');
var listRouter = require('./routes/list');
var categoryRouter = require('./routes/category');

var app = express();

const limiter = RateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	max: 20, // limit each IP to 100 requests per windowMs
});

mongoose.set('strictQuery', false);
const mongoDB = process.env.DB_URL;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(limiter);
app.use(helmet());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/eatery', eateryRouter);
app.use('/list', listRouter);
app.use('/category', categoryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

main().catch((err) => console.log(err));
async function main() {
	await mongoose.connect(mongoDB);
}

module.exports = app;
