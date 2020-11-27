/**
 * 唤起客户端
 * @param link 链接
 * @param failCallback 失败回调
 */
function wakeUpPcClient(link, failCallback) {
    const failTimmer = setTimeout(failCallback, 1000);

    const blurFunc = function() {
        window.clearTimeout(failTimmer);
    };

    const input = document.createElement('input');
    input.setAttribute('style', 'position: fixed; clip: rect(0, 0, 0, 0); left: -1000px; top: -1000px;');
    input.addEventListener('blur', blurFunc);
    document.body.appendChild(input);

    input.focus();

    setTimeout(function() {
        input.removeEventListener('blur', blurFunc);
        document.body.removeChild(input);
    }, 1000);

    window.location.href = link;
};