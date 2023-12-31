document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
  
    if (validatePassword(password)) {
      alert('Signup successful!');
      
    } else {
      document.getElementById('passwordError').textContent = 'Password should contain at least 6 characters, an uppercase letter, and a number';
    }
  });
  
  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  }
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    
  });
  