document.getElementById('helpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const helpContent = document.getElementById('helpContent').value;

    // 发送POST请求到后端
    fetch('http://localhost:3000/postHelp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ helpContent: helpContent })
    })
    .then(response => response.text())
    .then(message => {
        alert(message);
        // 刷新求助信息列表（实际项目中可实现动态更新）
    })
    .catch(error => console.error('Error:', error));
});
