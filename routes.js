const express = require('express');
const router = express.Router();

// 检查是否为新人
function isNewUser(userId) {
    // 从数据库中获取用户信息，并检查是否为新人
    // 返回 true 或 false
}

// 获取剩余求助机会次数
function getRemainingHelps(userId) {
    // 从数据库中获取用户的剩余求助机会次数
    // 返回一个数字
}

// 减少求助机会次数
function decreaseHelpCount(userId) {
    // 这里需要你的具体逻辑，从数据库中减少用户的求助机会次数
}

// 处理POST请求
router.post('/postHelp', (req, res) => {
    // 获取表单提交的求助内容
    const helpContent = req.body.helpContent;

    // 获取用户ID，这里需要你的具体逻辑，可能从登录态中获取
    const userId = 1; // 请替换为实际的用户ID

    // 检查新人规则
    if (isNewUser(userId)) {
        // 新人，检查是否已经使用了三次求助机会
        const remainingHelps = getRemainingHelps(userId); // 需要实现获取剩余求助机会的逻辑

        if (remainingHelps > 0) {
            // 新人有剩余求助机会，允许发布求助
            // 减少一次求助机会
            decreaseHelpCount(userId); // 需要实现减少求助机会的逻辑
            // 处理发布求助的逻辑...
            res.status(200).send("求助信息发布成功");
        } else {
            res.status(403).send("新人已用完三次求助机会");
        }
    } else {
        // 非新人，处理发布求助的逻辑...
        // 处理发布求助的逻辑...
        res.status(200).send("求助信息发布成功");
    }
});

module.exports = router;
