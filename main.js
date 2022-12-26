// 1) a)

function f1a (){
    for (let i = 1; i <= 6; i++){
        console.log("*".repeat(i))
    }
}

// 1) b)

function f1b (){
    let count = 1
    let str = ""
    for (let i = 1; i <= 6; i++){
        while (count <= i){
            str = str + "*"
            count ++
        }
        console.log(str)
        count = 1
        str = ""
    }
}

// 2) 

function f2 (){
    let row = []
    for (let i = 1; i<=10; i++){
        row = []
        for (let x = 1; x<=10; x++){
            row.push(x*i)
        }
        console.log(row)
    }
}

f2()