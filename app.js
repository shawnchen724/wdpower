const express = require('express');
const bodyParser = require("body-parser");
const admin = require("./route/admin");
const mongoose = require('mongoose');
const app = express();
const expressSession = require('express-session');
const path = require('path');
app.set('views', path.join(__dirname, 'views')); //也就是写出模板所在的跟路径
// 当时用渲染后缀为html的模板时候，所使用的模板引擎是什么 
app.engine('html', require('express-art-template'));
// 开启静态路由这是在根目录下开启静态路由的
app.use(express.static("./node_modules"));
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({
    extended: false
}));
//解析请求头为 "application/json"的post请求参数
app.use(bodyParser.json());
app.use(expressSession({
    name: "mazg",
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 3,
    },
    resave: false,
    saveUninitialized: false,
    rolling: true,
    store: null
}));
app.use("/", admin);
mongoose.connect('mongodb://127.0.0.1/power')
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(() => {
        console.log('数据库连接失败');
    });
app.use('/', admin);
app.listen(8000, function() {
    console.log('服务器已启用');
})