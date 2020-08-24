// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

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

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

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
    $("#jeopardy thead").empty();
    let $tr = $("<tr>");
    for (let i = 0; i < 6; i++) {
       let $thead=$("<th>");
       $thead.attr("scope","row");
       $thead.text(categories[i].title);
      $tr.append($thead);
    }
    $("#jeopardy thead").append($tr);

    $("#jeopardy tbody").empty();
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

function showLoadingView() {
    $("#jeopardy").empty();
    let spinner = '<img src="https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif" style="width:100%">';
     $("#jeopardy").html(spinner);
     $("#restart").text("loading");
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    $("#jeopardy").empty();
    $("#restart").text("restart");
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
    fillTable();
}


/** On click of start / restart button, set up game. */

$("#restart").on("click",function(){
    setupAndStart();
   });



/** On page load, add event handler for clicking clues */

$(async function () {
    setupAndStart();
    $("#jeopardy").on("click", "td", handleClick);
  }
);


