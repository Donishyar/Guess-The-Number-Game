// get user value from input and save it to a variable
// Generate a random number from 1 to 100 and save it to a variable
// Console whether the guess is too high , too low and correct




var randNumber= Math.floor(Math.random() * 100 +1);


function getUser_input(){
let user_input = document.getElementById("user__input").value;

    if(Number.isInteger(parseInt(user_input))){

   

        if(randNumber<user_input ){
        let p = document.createElement("p");
            p.innerHTML = "Your guess is too high !";
            p.style.color="red";
            p.style.fontWeight=700;
            document.body.appendChild(p);

        }else if(randNumber>user_input ){
            let p = document.createElement("p");
            p.innerHTML = "Your guess is too low !";
            p.style.color="#ff9900";
            p.style.fontWeight=700;
            document.body.appendChild(p);

        }else{
            let p = document.createElement("p");
            p.innerHTML = "Your guess is correct";
            p.style.color="green";
            p.style.fontWeight=700;
            document.body.appendChild(p);
        }

    }else{

        let p = document.createElement("p");
        p.innerHTML = "Your input is wrong !";
        p.style.color="#black";
        p.style.fontWeight=700;
        document.body.appendChild(p);

    }

    
}


function reset(){
    window.location.reload();
}

