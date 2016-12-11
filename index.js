/**
 * 提供版本号自增功能
 */
var options = {
    version: '0.0',
    max: 9999
}

function caculate(nums, left, right) {
    if (left < 0) {
        return;
    }
    if (nums[right] > options.max) {

        nums[left] = nums[left] + 1;
        nums[right] = 0;
        if (left == 0) {
            if (nums[left] > options.max) {
                nums.unshift(0);
            }
            left++;
            right++;
        }
        caculate(nums, left - 1, right - 1);
    }
}
function version(opts) {
    if (typeof opts == undefined) {
        options.version = '0';
    } else if (typeof opts == 'string') {
        options.version = opts;
    } else {
        options = Object.assign(options, opts);
    }

    if (!/[^\d|\.]*/.test(options.version)) {
        throw new Error('version number must be number');
    }

    var nums = options.version.split('.').map(a => Number(a));

    var len = nums.length;

    //单个数字的情况下，补充一个0位
    if (len == 1) {
        nums.unshift(0);
        len = 2;
    }

    nums[len - 1] = nums[len - 1] + 1;
    caculate(nums, len - 2, len - 1);

    return nums.join('.');
}

module.exports = version;