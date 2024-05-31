document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the eye icon (you can customize it as per your preference)
    this.textContent = type === 'password' ? '\u{1F441}' : '\u{1F441}'; // Changing the Unicode icon for demo purposes
});
document.getElementById('toggle-spassword').addEventListener('click', function () {
    const passwordField = document.getElementById('spassword');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the eye icon (you can customize it as per your preference)
    this.textContent = type === 'password' ? '\u{1F441}' : '\u{1F441}'; // Changing the Unicode icon for demo purposes
});
document.getElementById('toggle-cpassword').addEventListener('click', function () {
    const passwordField = document.getElementById('cpassword');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the eye icon (you can customize it as per your preference)
    this.textContent = type === 'password' ? '\u{1F441}' : '\u{1F441}'; // Changing the Unicode icon for demo purposes
});
document.addEventListener('scroll', () => {
    const header = document.querySelector('nav');
    if (window.scrollY > 40 ){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
})
document.addEventListener('scroll', () => {
    const con = document.querySelector('.home');
    if (window.scrollY > 40 ){
        con.classList.add('con');
    }else{
        con.classList.remove('con');
    }
})
const open = document.querySelector('.login_popup');
open.addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    const home = document.querySelector('.home');
    const nav = document.querySelector('header');
    const changeRegister = document.querySelector('.popup_singup');
    const changeLogin = document.querySelector('popup_login');
    
        popup.style.display = "block";
        home.style.opacity = "50%";
        nav.style.opacity = "70%";
        changeRegister.style.display = "none";
        changeLogin.style.display = "";


})

const close = document.querySelector('.close');
const login = document.querySelector('.login_btn');
const register = document.querySelector('.register_btn');
close.addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    const nav = document.querySelector('header');
    const home = document.querySelector('.home');
    popup.style.display = "none";
    home.style.opacity = "100%";
    nav.style.opacity = "100%";
    function refreshPage() {
        location.reload();
      }
      refreshPage();

})
register.addEventListener('click', () => {
    const changeRegister = document.querySelector('.popup_singup');
    const changeLogin = document.querySelector('.popup_login');
    changeRegister.style.display = "";
    changeLogin.style.display = "none";
    register.classList.add('underline');
    login.classList.remove('underline');
})
login.addEventListener('click', () => {
    const changeRegister = document.querySelector('.popup_singup');
    const changeLogin = document.querySelector('.popup_login');
    changeRegister.style.display = "none";
    changeLogin.style.display = "";
    login.classList.add('underline');
    register.classList.remove('underline');
    
})
