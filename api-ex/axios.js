async function random(){
   let result = await axios.get("https://reqres.in/api/users/2");
    console.log(result);
};

random();

async function update(){
    let result = await axios.post("https://reqres.in/api/users", {
        "name": "morpheus",
        "job": "leader"
    });
    console.log(result)
}