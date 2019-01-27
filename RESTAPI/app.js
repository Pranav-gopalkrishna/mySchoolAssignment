var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var pug = require('pug');
var routes = require('./routes/index');
var app = express();

//view engine setup
//app.set('views', path.join(__dirname, 'public/views'));
//app.set('view engine', 'ejs');

//app.get('/',(req, res) => {
//  res.render('index',{title:' pranav gopalkrishna'});
//});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')));
app.use('/js',express.static(path.join(__dirname,'node_modules/jquery/dist')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status( err.code || 500 )
    .json({
      status: 'error',
      message: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .json({
    status: 'error',
    message: err.message
  });
});

//var server = http.createServer(function(req,res){
//  res.writeHead(200,{'Content-Type':'text/html'});
//  var myReadStream = fs.createReadStream(__dirname + '/public/index.html', 'utf8');
//  myReadStream.pipe(res);
//});

//server.listen(3003,'127.0.0.1');

module.exports = app;
