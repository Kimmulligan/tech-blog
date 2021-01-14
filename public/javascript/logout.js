async function logout() {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      //document.location.replace('/');
      alert('Logout Successful')
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);