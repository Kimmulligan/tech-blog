async function signupFormHandler(event) {
  event.preventDefault();
  console.log('hello line 27')

  const userName = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();


let test = {
  
  userName,
  password,
}
console.log(test);


  if (userName && password) {
      console.log('hello line 34')
    const response = await fetch('/api/user/register', {
      method: 'POST',
      body: JSON.stringify(
          test
      ),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
    console.log('Success');
    document.location.replace('/api/user/login');
  } else {
      alert(response.statusText);
  }
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);