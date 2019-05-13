// Initialize Firebase
var config = {
    apiKey: "AIzaSyCVyxxFznHhPhd0Txz4AYQJmBqOMquxABU",
    authDomain: "contactform-205d2.firebaseapp.com",
    databaseURL: "https://contactform-205d2.firebaseio.com",
    projectId: "contactform-205d2",
    storageBucket: "contactform-205d2.appspot.com",
    messagingSenderId: "626348515471"
  };
  firebase.initializeApp(config);

  // Refrence messages collection
 var messagesRef = firebase.database().ref('messages');


document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    
    //Get values
    var nom = getInputVal('nom');
    var prenom = getInputVal('prenom');
    var email = getInputVal('email');
    var message = getInputVal('message');
   
    //save Messages
   saveMessage(nom,prenom,email,message);
}


function getInputVal(id){
    return document.getElementById(id).value;
}

// Save messages to firebase

function saveMessage(nom,prenom,email,message){
    var newMessagesRef = messagesRef.push();
    newMessagesRef.set({
        nom : nom,
        prenom : prenom,
        email : email,
        message : message
    });
}