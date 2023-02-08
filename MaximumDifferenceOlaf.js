function maxLeftSubArraySum( a,  size,  sum)
{
   let  max_so_far = a[0];
   let  curr_max = a[0];
    sum[0] = max_so_far;
 
    for ( i = 1; i < size; i++)
    {
        curr_max = Math.max(a[i], curr_max + a[i]);
        max_so_far = Math.max(max_so_far, curr_max);
        sum[i] = max_so_far;
    }
 
    return max_so_far;
}
 
 function maxRightSubArraySum( a,  n,  sum)
{
    let max_so_far = a[n];
    let curr_max = a[n];
    sum[n] = max_so_far;
 
    for ( i = n-1; i >= 0; i--)
    {
        curr_max = Math.max(a[i], curr_max + a[i]);
        max_so_far = Math.max(max_so_far, curr_max);
        sum[i] = max_so_far;
    }
 
    return max_so_far;
}
 
 function findMaxAbsDiff( arr)
{
  
    let n = arr.length
    let leftMax = Array(n);
    maxLeftSubArraySum(arr, n, leftMax);

    let rightMax = Array(n);
    maxRightSubArraySum(arr, n-1, rightMax);

    let  invertArr = Array(n);
    for ( i = 0; i < n; i++)
        invertArr[i] = -arr[i];

   let  leftMin = Array(n);
    maxLeftSubArraySum(invertArr, n, leftMin);
    for ( i = 0; i < n; i++)
        leftMin[i] = -leftMin[i];
 
    let  rightMin = Array(n);
    maxRightSubArraySum(invertArr, n - 1, rightMin);
    for ( i = 0; i < n; i++)
        rightMin[i] = -rightMin[i];
 
    let result = -100000000;
    for ( i = 0; i < n - 1; i++)
    {
         absValue = Math.max(Math.abs(leftMax[i] - rightMin[i + 1]),
                        Math.abs(leftMin[i] - rightMax[i + 1]));
        if (absValue > result)
            result = absValue;
    }
 
    return result;
}

console.log(findMaxAbsDiff([2, -1, -2, 1, -4, 2, 8]))
console.log(findMaxAbsDiff([2, 1, 2, 1, 4, 2, 8]))
console.log(findMaxAbsDiff([2, 1, -2, 11, -4, 2, 8]))