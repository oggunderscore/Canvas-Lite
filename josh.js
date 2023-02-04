Console.log("balls")
=======
let submitButton = document.querySelector('#submitbutton');
submitButton.addEventListener('click', clickListener);

function clickListener() {
    event.preventDefault();
    //console.log('Button clicked');
    
    let firstInput = document.querySelector('#textinput');
    let ytlink = document.querySelector('#youtube');

    let firstText = firstInput.value;
    let youtubeLink = ytlink.value;

    //console.log(submitButton);

    if(youtubeValidate(youtubeLink) !== true) {
        console.log('The youtube link must start with "https://www.youtube.com/watch?v="')
        return false;
    }
    else{
        console.log('text:', firstText);
        console.log('youtube link:', youtubeLink);
    }

}

function youtubeValidate(link){
    if (link.startsWith('https://www.youtube.com/watch?v=')){
        return true;
    }
    else {
        return false;
    }
}







let term = 5 + 7;
let deez = "nuts";
// alert(term);
// alert('Actually Quite Incredible');
let number1 = 2;
let number2 = 3;
let sum = number1 + number2;
//alert(sum);

function mult(num1, num2) {
    let product = num1 * num2;
    return product;
}

console.log(mult(5,5));

function alertMessage(message) {
    alert(message);
  }

//alertMessage("balls")

if (sum === 5) {
    //alertMessage("sum is 5");
}
else {
    //alertMessage("sum is not 5");
}

let game = {
    lv1: 'Stereo Madness',
    lv2: 'Back On Track',
    lv3: 'Polargeist',
    lv4: 'Dry Out'
}

//alert(game.lv4);
>>>>>>> Stashed changes
