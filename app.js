let promise = new Promise((resolve, reject) =>{
    resolve("Resolved");
    reject('Rejected'); 
   
  });
  promise.then(
  (result) => { 
     console.log(result);},
  (error) => { 
     console.log(error);
  }
);
