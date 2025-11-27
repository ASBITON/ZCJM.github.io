
// script.js

  btn.addEventListener('click', () => {
    const mobile = document.getElementById('mobile-menu');
    if (!mobile) return;
    mobile.style.display = mobile.style.display === 'flex' ? 'none' : 'flex';
  });
});

// Set year fields
const year = new Date().getFullYear();
['year','year-2','year-3','year-4','year-5','year-6'].forEach(id=>{
  const el = document.getElementById(id);
  if (el) el.textContent = year;
});

// Greeting  & live date
(function dateTimeGreeting(){
  const g = document.getElementById('greeting');
  const dt = document.getElementById('datetime');
  function update(){
    const now = new Date();
    const hour = now.getHours();
    let greet = 'Welcome';
    if (hour < 12) greet = 'Good morning!';
    else if (hour < 18) greet = 'Good afternoon!';
    else greet = 'Good evening!';
    if (g) g.textContent = `${greet} Welcome to ZCJM's Art Portfolio!`;
    if (dt) dt.textContent = now.toLocaleString();
  }
  update();
  setInterval(update, 1000*60);
})();


const contactForm = document.getElementById('contact-form');
if (contactForm){
  contactForm.addEventListener('submit', e=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('contact-feedback');
    if (!name || !email || !message){
      feedback.textContent = 'Please fill all fields.';
      feedback.className = 'text-danger';
      return;
    }
    feedback.className = 'text-success';
    feedback.textContent = 'Thanks! Your message was received (demo).';
    contactForm.reset();
  });
}

// Signup form validation (client-side)
const signupForm = document.getElementById('signup-form');
if (signupForm){
  signupForm.addEventListener('submit', e=>{
    e.preventDefault();
    // HTML5 constraint validation for each field
    let valid = true;

    const first = document.getElementById('firstName');
    const last = document.getElementById('lastName');
    const email = document.getElementById('suEmail');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirmPassword');
    const result = document.getElementById('signup-result');

    [first, last, email, password, confirm].forEach(inp=>{
      if (!inp.checkValidity()){
        inp.classList.add('is-invalid');
        valid = false;
      } else {
        inp.classList.remove('is-invalid');
      }
    });

    if (password.value !== confirm.value){
      confirm.classList.add('is-invalid');
      document.getElementById('confirm-feedback').textContent = 'Passwords do not match.';
      valid = false;
    } else {
      confirm.classList.remove('is-invalid');
    }

    if (!valid){
      result.className = 'text-danger';
      result.textContent = 'Please fix the errors and try again.';
      return;
    }

    // Demo: pretend to create account
    result.className = 'text-success';
    result.textContent = 'Account created (demo). You can now log in.';
    signupForm.reset();
  });
}

// Login demo: simple client-side check (for this assignment only)
const loginForm = document.getElementById('login-form');
if (loginForm){
  loginForm.addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('liEmail').value.trim();
    const pw = document.getElementById('liPassword').value.trim();
    const res = document.getElementById('login-result');
    if (!email || !pw){
      res.className = 'text-danger';
      res.textContent = 'Please enter email and password.';
      return;
    }
    // Demo check: any non-empty values succeed (since no DB)
    res.className = 'text-success';
    res.textContent = `Welcome back — demo login successful for ${email}.`;
    loginForm.reset();
  });
}
