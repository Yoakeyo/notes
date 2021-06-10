// 缓动动画
function animate(obj, target, callback) {
    // 清除以前的定时器，防止多个定时器同时生成
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        // 把步长值写入定时器
        // 步长公式:(目标值 - 现在的位置) / 10
        var step = (target - obj.offsetTop) / 10;
        // Math.ceil 步长值向上取整 Math.floor 向下取整
        // 往前走向上取整，往后退向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetTop == target) {
            // 停止动画 即为停止定时器
            clearInterval(obj.timer);
            // 回调函数写在定时器里面
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        } else {
            obj.style.top = obj.offsetTop + step + 'px';
        }
    }, 15)
}