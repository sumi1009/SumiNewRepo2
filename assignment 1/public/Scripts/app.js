/*app.css,Sumi Lee,301088176,2022/02/05*/

//IIFE - Immediately Invoked Function Expression
(function(){

function Start(){

    console.log("My App started....")
}

window.addEventListener("load", Start );
})();

//installed required packages
let createError = requir('http-errors');
let express = require('expree');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//moduel for messaging and error message
let flash = require('connect-flash');
let indexRouter = require('../routes/index');
let userstRouter = require('../routes/users');

// bring module
var express = require('express')
  , routes = require('./routes')
  , todo = require('./routes/todo')
  , http = require('http')
  , path = require('path');

var app = express();	// Produce application
var port = 3000;		// application port

// manage application
app.configure(function(){
  app.set('port', port);					// web serber port
  app.set('views', __dirname + '/views');	// templete
  app.set('view engine', 'ejs');			// templete engine
  app.use(app.router);						// routing
	
  // Static resource processing.
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){	// developed version
  app.use(express.errorHandler());			// error message
});

// routing
app.get('/', routes.index);
app.get('/list', todo.list);
app.post('/add', todo.add);
app.post('/complete', todo.complete);
app.post('/del', todo.del);

// practice
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
