

categories = [];


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
    const categories = await axios.get("http://jservice.io/api/categories",{params:{count:100}});
    let idArr = categories.data.map(obj=>obj.id);
    return _.sampleSize(idArr,6);
}


async function getCategory(catId) {
    const reCategory = await axios.get(`http://jservice.io/api/category?id=${catId}`);
    let clues = reCategory.data.clues;
    let clueArr = clues.map(clue => ({question:clue.question,answer:clue.answer,showing:null}));
    return {
        title: reCategory.data.title,
        clues: clueArr
    }
}





/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    clearTable();

    let $tr = $("<tr>");
    for (let i = 0; i <= 5; i++) {
       let $thead=$("<th>");
       $thead.attr("scope","row");
       $thead.text(categories[i].title);
      $tr.append($thead);
    }
    $("#jeopardy thead").append($tr);

    
    for (let clueIdx = 0; clueIdx <5; clueIdx++) {
      let $tr = $("<tr>");
      $tr.attr("scope","row");
      for (let catIdx = 0; catIdx <6; catIdx++) {
          let $tbody = $("<td>").attr("id", `${catIdx}-${clueIdx}`);
          $tbody.text("$$$$");
        $tr.append($tbody);
      }
      $("#jeopardy tbody").append($tr);
    }
};


/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(e) {
  let id=e.target.id;
  let [catIdx, clueIdx] = id.split("-");
  let clue = categories[catIdx].clues[clueIdx];
   let showClue;

   if(!clue.showing){
       showClue = clue.question;
       clue.showing ="question"
   }else if(clue.showing ==="question"){
       showClue = clue.answer;
       clue.showing = "answer"
   };

 $(`#${catIdx}-${clueIdx}`).html(showClue);
 $(`#${catIdx}-${clueIdx}`).css("background-color", "#060ce9");

}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function clearTable(){
    $("#jeopardy thead").empty();
    $("#jeopardy tbody").empty();
}


function showLoadingView() {
    clearTable();
    let spinner = '<img src="https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif" style="width:100%">';
    let loading =`<h1 class="h1 text-center">Jeopardy</h1>
    <br><div class="d-flex justify-content-center"><button class="btn-lg bg-warning text-center">loading</button></div>`;
    let $modal = $("#myModal");
    
    $("#spinner").append(loading,spinner);
    
    $modal.attr("style","display:block");
}



/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    clearTable();
    let $modal = $("#myModal");
    $modal.attr("style","display:none");
  
}
  


/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    let sixId = await getCategoryIds();
    categories = [];
    for(id of sixId){
        categories.push(await getCategory(id))
    };
    hideLoadingView();
    fillTable();
}


/** On click of start / restart button, set up game. */

$("#restart").on("click",function(){
     showLoadingView();
     setupAndStart();
     $("#restart").text("restart");
   });



/** On page load, add event handler for clicking clues */

$(async function () {
    setupAndStart();
    $("#jeopardy").on("click", "td", handleClick);
  }
);


