
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD62RLX5t-iRBfodH5rwnjktDTEBRuamlc",
    authDomain: "ipl2020-f5320.firebaseapp.com",
    databaseURL: "https://ipl2020-f5320.firebaseio.com",
    projectId: "ipl2020-f5320",
    storageBucket: "ipl2020-f5320.appspot.com",
    messagingSenderId: "113788903784",
    appId: "1:113788903784:web:23a20db97e787f5f6df6dd",
    measurementId: "G-DD6K60RJYN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  const auth = firebase.auth();
  
  function signup(){
		
		const email = document.getElementById('email');
		const password = document.getElementById('password');
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signin(){
		
		const email = document.getElementById('semail');
		const password = document.getElementById('spassword');
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		alert("Signed In");
		
		
		
  }
    firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    // console.log(user);
                    // console.log(user.photoURL);
                    // console.log(user.displayName);
                    // console.log(user.email)
                    //  btnLogout.classList.remove("invisible");

                    // user.phoneNumber = pnumber.value
                    // console.log(user);

                    location.href = "index.html";


                } else {
                    // alert("You need to Login/SignUp first");
                    //location.href = "/testimonial";

                    //  alert("Please Log In... You are currently logged out");
                    //  btnLogout.classList.add("invisible");

                }
            })