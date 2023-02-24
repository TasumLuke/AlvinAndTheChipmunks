$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });

    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }


        });

    });

}); 

const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');

loginForm.addEventListener('submit', e => {
    e.preventDefault(); // prevent form from submitting

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // perform login logic here
    // you can send a POST request to a server endpoint to authenticate the user

    // redirect to homepage on successful login
    window.location.href = '/';
});

registerForm.addEventListener('submit', e => {
    e.preventDefault(); // prevent form from submitting

    const username = registerForm.username.value;
    const password = registerForm.password.value;
    const confirmPassword = registerForm.confirm_password.value;

    // perform registration logic here
    // you can send a POST request to a server endpoint to create a new user account

    // redirect to homepage on successful registration
    window.location.href = '/';
});

document.querySelector('a[href="#register-now"]').addEventListener('click', e => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

document.querySelector('a[href="#login-now"]').addEventListener('click', e => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});