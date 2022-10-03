let prom1 = new Promise((resolve, reject)=>{
    var a= 1+2;
    if(a==3){
        resolve('success');
    }else{
        reject('reject');
    }
})

prom1.then((message)=>{
    console.log('this is in the then ' + message)
}).catch((message)=>{
    console.log('this is in the then ' + message)
})