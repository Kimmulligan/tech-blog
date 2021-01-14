async function loginFormHandler(event) {
    event.preventDefault();
  
    const userName = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    let trial = {
        userName,
        password
    }
  
    if (userName && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify(
            trial
        ),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
        
        async function emailFormHandler(event) {
            event.preventDefault();
          
            const userName = document.querySelector('#username-signup').value.trim();
            const email = document.querySelector('#email-signup').value.trim();
            const password = document.querySelector('#password-signup').value.trim();
          
            if (userName && email && password) {
              const response = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({
                  username,
                  email,
                  //password,
                  subject: "Welcome",
                text: "Hi " + username + " thank you for creating a profile"
                }),
                headers: { 'Content-Type': 'application/json' }
              });
              if (response.ok) {
              console.log('Success');
            } else {
                alert(response.statusText);
            }
            }
            document.querySelector('.email-form').reset();
          };

          
          
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

 


