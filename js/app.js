const boton = document.querySelector('.notify button');
const error = document.querySelector('.notify .error p');
const ierror = document.querySelector('.notify input');
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
boton.addEventListener('click', function () {
    if (regex.test(ierror.value)) {
        error.style.display = 'none';
        ierror.style.borderColor = 'hsl(224, 49%, 79%)';
    }else{
        error.style.display = 'block';
        ierror.style.borderColor = 'rgb(202, 70, 70)';
    }
})