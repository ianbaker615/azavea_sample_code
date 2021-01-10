/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    ones_count = 0;
    highest_count = 0;
    for (num of nums) {
        if (num == 1) {
            ones_count += 1;
            if (ones_count > highest_count) {
                highest_count += 1;
            }
        }
        else {
            ones_count = 0
        }
    }
    return highest_count;
};
