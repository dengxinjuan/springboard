
//add gif to website
function appendImg(result){
   let number = result.data.length;
   if(number){
       let randomNum = Math.floor(Math.random()*number);
    let newGif = $('<img>').attr('src',result.data[randomNum].images.original.url);
    $('#imagediv').append(newGif);}
}


//get data from API
async function getGif(){
    let searchTerm = $("#searchterm").val();
    $("#searchterm").val("");
const result = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });

console.log(result.data);
appendImg(result.data);

};





//remove button
$("#remove").on("click", function(){
    $('#imagediv').empty()}
)

//search button
$("#search").on("click",function(e){
    e.preventDefault();
    if(!$("#searchterm").val()){
        alert("please enter searchterm")
    }else{
    getGif()}}
);



