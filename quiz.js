let user, questions=[], index=0, score=0;

auth.onAuthStateChanged(async u=>{
 if(!u){location.href="index.html";return;}
 user=u;
 loadQuestions();
});

async function loadQuestions(){
 const snap=await db.collection("quiz_questions")
 .where("category","in",["BGMI","FREE_FIRE"])
 .limit(10).get();

 snap.forEach(d=>questions.push(d.data()));
 showQuestion();
}

function showQuestion(){
 if(index>=questions.length){finish();return;}
 document.getElementById("q").innerText=questions[index].question;
 document.getElementById("info").innerText=`Question ${index+1}/10`;
 document.getElementById("score").innerText=score;
}

function answer(yes){
 const q=questions[index];
 score+= yes ? q.yesScore : q.noScore;
 index++;
 showQuestion();
}

async function finish(){
 const coins=score*2;

 await db.collection("users").doc(user.uid).update({
   coins:firebase.firestore.FieldValue.increment(coins),
   weeklyCoins:firebase.firestore.FieldValue.increment(coins)
 });

 await db.collection("leaderboard_weekly").doc(user.uid).set({
   uid:user.uid,
   name:user.displayName,
   weeklyCoins:firebase.firestore.FieldValue.increment(coins),
   updatedAt:firebase.firestore.FieldValue.serverTimestamp()
 },{merge:true});

 alert("Quiz complete! Coins added: "+coins);
 location.href="dashboard.html";
}