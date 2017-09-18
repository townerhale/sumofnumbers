/*
  Solving Experience
 */

const testNotes = [1, 2, 3, 4];

function sumFor(nums)
{
    let total = 0;
    for (const num of nums)
    {
        total += num;
    }
    return total;
}

//console.log(sumFor(testNotes));

function sumWhile(nums){
  let total = 0;
  let i = 0;
  while (i < nums.length)
  {
    total += nums[i];
    i++
  }
  return total
}

function sumRecursion(nums){
    if (nums.length === 0) {
      return 0;
    }

    return nums[0] + sumRecursion(nums.slice(1, nums.length));

}

function sumSimple(nums){
    return _.reduce(nums, function memoizer(memo, num){
      return memo + num;
    }, 0)
}
//console.log(sumWhile(testNotes));
console.log(sumSimple(testNotes));