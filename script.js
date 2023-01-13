var url = "https://61ea3a377bc0550017bc65f6.mockapi.io/users";

function getData(){
    
    fetch(url, {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        },
        // body: JSON.stringify
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

function createData(){
    let data = {
        name: "koilraj",
        email:"koil@gmail.com"
    }
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}


function updateData(){

    let data = {
        name: "varun",
        email: "varun@gmail.com"
    }

    fetch(url + '/1',{
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json",
        }
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

// updateData();
// createData();
// getData();

function deleteData() {
   fetch(url + '/55',{
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
   })
   .then((res)=>res.json())
   .then((data)=>console.log(data))
   .catch((err)=>console.log(err))
}

deleteData();