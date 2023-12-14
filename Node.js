// 导入所需的模块
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// 配置中间件
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 设置SQLite数据库
const db = new sqlite3.Database(':memory:');

// 创建表
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS help_requests (id INTEGER PRIMARY KEY, content TEXT)');
});

// 处理POST请求
app.post('/postHelp', (req, res) => {
    const helpContent = req.body.helpContent;

    // 插入数据
    db.run('INSERT INTO help_requests (content) VALUES (?)', [helpContent], (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('Help request posted successfully');
        }
    });
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
