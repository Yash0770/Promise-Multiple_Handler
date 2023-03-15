let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      // alert("This promise is not resolved")
      resolve(1)
    },2000)
  })
  
  p.then(()=>{
    console.log("Promise has been resolved")
  
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
         resolve(4)
       },4000)
    })
  }).then((value)=>{
    console.log(value)
  })
  
  p.then(()=>{
    console.log("new")
  })