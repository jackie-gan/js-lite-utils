/**
 * 转换年龄
 *
 * @param str YYYY-MM-DD格式的日期字符串
 */
const caculateAge = function(str) {
    const today = new Date();
    const birthDay = new Date(str);

    // 年份
    const thisYear = today.getFullYear();
    const birthYear = birthDay.getFullYear();

    // 月份
    const thisMonth = today.getMonth() + 1;
    const birthMonth = birthDay.getMonth() + 1;

    // 毫秒数
    const thisTime = today.getTime();
    const birthTime = birthDay.getTime();

    if (thisYear - birthYear > 1) {
        return `${thisYear - birthYear}岁`;
    } else if (thisYear - birthYear < 0) {
        // 年份有误
        return '';
    } else if (thisYear - birthYear === 0) {
        if (thisMonth - birthMonth < 0) {
            // 月份有误
            return '';
        } else {
            const diffDate = Math.abs(parseInt((thisTime - birthTime) / (1000 * 60 * 60 * 24), 10));
            if (diffDate >= 30) {
                return `${Math.floor(thisMonth - birthMonth)}月`;
            } else {
                if (diffDate >= 7) {
                    return `${Math.floor(diffDate / 7)}周`;
                } else {
                    return `${diffDate}天`;
                }
            }
        }
    } else {
        // thisYear - birthYear === 1
        const diffDate = Math.abs(parseInt((thisTime - birthTime) / (1000 * 60 * 60 * 24), 10));
        if (diffDate >= 365) {
            return '1岁';
        } else {
            if (diffDate >= 30) {
                return `${Math.floor(thisMonth - birthMonth)}月`;
            } else {
                if (diffDate >= 7) {
                    return `${Math.floor(diffDate / 7)}周`;
                } else {
                    return `${diffDate}天`;
                }
            }
        }
    }
};

export default caculateAge;
