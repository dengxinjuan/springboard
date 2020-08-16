let movieArr=[];

function appendMovie(movieData){
    return `<tr>
        <td>${movieData.movieTitle}</td>
        <td>${movieData.movieRating}</td>
        <td>
        <button type="button" class="btn btn-danger">x</button>
        </td>
      </tr>` ;
}


$('#movieForm').on("submit",function(e){
    e.preventDefault();
    let movieTitle = $('#title').val();
    let movieRating = $('#rating').val();
    
    let reg =/\w\w+/;
     if(!movieTitle){
         alert("You must enter the title!")
     } else if(!reg.test(movieTitle)){
         alert("you must enter at least two characters!")
     }else{
    let movieData ={movieTitle,movieRating};
    const movieHtml = appendMovie(movieData);
    movieArr.push(movieData);
    
    $('#tbody').append(movieHtml);
    $('#movieForm').trigger("reset");}
})


$("tbody").on("click", ".btn.btn-danger", function(e) {
    $(e.target)
      .closest("tr")
      .remove();
  });

