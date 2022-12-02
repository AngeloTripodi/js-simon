const buttonElement = document.getElementById('counterButton');
counter = 0;

buttonElement.addEventListener( 'click', function () {
    counter++;
    buttonElement.innerHTML = `# ${counter}`;
});
