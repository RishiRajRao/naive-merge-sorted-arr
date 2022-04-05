function merging(arr1, arr2) {
  let arr3 = [],
    i,
    j,
    k;
  i = j = k = 0;
  while (k < arr1.length + arr2.length - 1) {
    if (arr1[i] <= arr2[j]) {
      arr3.push(arr1[i]);
      i++, k++;
    } else if (arr1[i] > arr2[j]) {
      arr3.push(arr2[j]);
      j++, k++;
    } else {
      while (i < arr1.length) {
        arr3.push(arr1[i]);
        i++, k++;
      }
      while (j < arr2.length) {
        arr3.push(arr2[j]);
        j++, k++;
      }
    }
  }
  console.log("res==", arr3, i, j, k);
}

merging([1, 2, 3, 7], [8, 9, 10]);
