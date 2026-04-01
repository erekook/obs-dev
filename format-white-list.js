let str = `wxef45c0ac4bfce649
wx156de89ddc6f4843
wx8533e5f6f67a60b9
wxae0c5ab1733422d9
wx5e0ec3ff2db816d6
wxac84b580349cb9b2
wxe83ac385bc02e1cb
wx579d34b202b8dc35
wx8ad424248784bcf8
wxceab521d5d08057d`

let arr = str.split('\n')
console.log(arr)

let result = ""
for (let i = 0; i < arr.length; i++) {
    if (i == arr.length -1) {
        result += "\"" +arr[i] + "\"";
    } else {
        result += "\"" +arr[i] + "\",\n";
    }
}
console.log(result)