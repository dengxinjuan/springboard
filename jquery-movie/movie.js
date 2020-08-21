let movieArr=[];
let currentId = 0;

function appendMovie(movieData){
    return `<tr>
        <td>${movieData.movieTitle}</td>
        <td>${movieData.movieRating}</td>
        <td>
        <button type="button" class="btn btn-danger" data-delete-id=${movieData.currentId}>x</button>
        </td>
      </tr>` ;
}


$('#movieForm').on("submit",function(e){
    e.preventDefault();
    let movieTitle = $('#title').val();
    let movieRating = $('#rating').val();
    let movieData ={movieTitle,movieRating,currentId};
    movieArr.push(movieData);
    currentId++;
    
    let reg =/\w\w+/;
     if(!movieTitle){
         alert("You must enter the title!")
     } else if(!reg.test(movieTitle)){
         alert("you must enter at least two characters!")
     }else{
    const movieHtml = appendMovie(movieData);
    
    $('#tbody').append(movieHtml);
    $('#movieForm').trigger("reset");}
})


$("tbody").on("click", ".btn.btn-danger", function(e) {
    let indexToRemoveAt = movieArr.findIndex(movie => movie.currentId === +$(e.target).data("deleteId"));
    movieArr.splice(indexToRemoveAt, 1);

    $(e.target)
      .closest("tr")
      .remove();
  });


function sortRating(arr){
    return arr.sort(function(a,b){
        if(+a.movieRating > +b.movieRating){ return -1;}
         if(+a.movieRating < +b.movieRating){return 1;}
        return 0;})
};


function  sortTitle(arr){
    return arr.sort(function(a,b){
        if(a.movieTitle > b.movieTitle){return 1;}
        if(a.movieTitle < b.movieTitle){return -1;}
        return 0;
    })
};


$("#ratingdrop").on("click",function(){
    let sortedRating = sortRating(movieArr);
    $("#tbody").empty();
    for (let movie of sortedRating) {
        const HTMLtoAppend = appendMovie(movie);
        $("#tbody").append(HTMLtoAppend);
      }
      $('#movieForm').trigger("reset");
});

$("#titledrop").on("click",function(){
    let sortedtitle = sortTitle(movieArr);
    $("#tbody").empty();
    for (let movie of sortedtitle) {
        const HTMLtoAppend = appendMovie(movie);
        $("#tbody").append(HTMLtoAppend);
      };
      $('#movieForm').trigger("reset")
})
