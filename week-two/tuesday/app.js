// console.log("testing");

// Code below made sense on
// let getIt = document.getElementById("submitForm").onclick;
//   let text = document.getElementById("newPost").value;
//   let ul = "<li>" + text + "</ul>";
//   document.getElementById("list").appendChild(ul);
// };
//
// getIt();

// const playersForm = document.getElementById("players-form");
//   playersForm.addEventListener("submit", function(e){
//     e.preventDefault();
//     let player1Name = document.getElementById('player-1-name').value;
//     let player2Name = document.getElementById('player-2-name').value;
//
//     console.log(player1Name, player2Name)
//   });


//Pulls user entry from form
const playersForm = document.getElementById("blogSubmission");
  playersForm.addEventListener("submit", function(e){
    e.preventDefault();
    let newPost = document.getElementById("new-Post").value;

    console.log(newPost)
  });
