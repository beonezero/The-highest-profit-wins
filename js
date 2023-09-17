function minMax(arr){
  
  for (let k = 0; k < arr.length; k++){
    for (let i = 0; i < arr.length - 1 - k; i++){
      if (arr[i] > arr[i + 1]){
        const temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        }
      }
    }
  if(arr[0] < arr[arr.length - 1]){
    return [arr[0],arr[arr.length - 1]]
  } else if (arr[0] > arr[arr.length - 1]){
    return [arr[arr.length - 1], arr[0]]         
  }
  return [arr[0],arr[0]]; // fix me!
}
