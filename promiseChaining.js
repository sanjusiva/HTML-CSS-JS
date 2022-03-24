var promise=new Promise(function(res,rej){
    res(10);
}).then(function(data){
    return data*2;
}).then(function(data){
    return data+10;
}).then(function(data){
    console.log(data);
}).catch(function(data){
    console.log("error:",data);
})