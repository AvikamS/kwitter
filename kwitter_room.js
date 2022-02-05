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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    
         console.log("Room name-"+ Room_names);
         row = " <div class='room-name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"<div><hr>";
      document.getElementById("output").innerHTML = row;
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose: "adding room name"
      
      }); 
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}