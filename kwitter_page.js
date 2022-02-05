var firebaseConfig = {
    apiKey: "AIzaSyCbQts7aRYEaab8q0KATgYB3BXJmFMd_5M",
    authDomain: "kwitter-b836a.firebaseapp.com",
    databaseURL: "https://kwitter-b836a-default-rtdb.firebaseio.com",
    projectId: "kwitter-b836a",
    storageBucket: "kwitter-b836a.appspot.com",
    messagingSenderId: "988615801777",
    appId: "1:988615801777:web:88088cf914ccefe7f75b90"
  };
  
 
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name"); 

   function send() {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
name:user_name,
message = msg,
like: 0

       });
       document.getElementById("msg").value = " ";
   }
   function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    
    childData = childSnapshot.val(); if (childKey != "purpose") { firebase_message_id = childKey; message_data = childData;

        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        like = message_data['like'];
        message = message_data['message'];
        name_with_tag = "<h4>"+name+"<img class = 'user_tick' src = 'tick.png'> </h4>";
        message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
        like_button = "<button class = 'btn btn-danger' id = " +firebase_message_id+ "value="+like+"onclick = 'updateLike(this.id)'>";
        span_with_tag = "<span class = 'glyphicon glyphicon-thumbsup'>Like:"+ like + "</span></button><hr>";
        row = name_with_tag + message_with_tag + like_button + span_with_tag;
        console.log("output").innerHTML += row;
    }
});
});
}
 getData();

 function updateLike(message_id){
console.log("Clicked on like button -" + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes)+1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
    like = updated_likes
});
 }
