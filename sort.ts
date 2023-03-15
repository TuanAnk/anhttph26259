const numArray3 = [13,5,8,2,3,1] 

const numArray4 =["e","a","l","f","o","b"]

function selectionSort<T>(arr:T[]) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}

selectionSort(numArray3)
console.log(numArray3);
selectionSort(numArray4)
console.log(numArray4);