const buttonElement = document.getElementById('counterButton');
counter = 0;
let stop = false;

buttonElement.addEventListener( 'click', function () {

    if(stop = true) {
        if (counter < 10) {
            counter++;
            buttonElement.innerHTML = `# ${counter}`;
        } else {
                setTimeout (function() {
                counter = 0;
                buttonElement.innerHTML = `# ${counter}`;
                },2000);
        }
    }

});



//     if (counter === 10) {
//     setTimeout (function() {
//         console.log('stop');
// },2000);
//     }
    
// });


