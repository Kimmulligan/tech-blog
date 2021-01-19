//Event listener for submit button on the home page to grab the title and text of post to add to the database
//create ajax call to the api post routes to add the post to the database

const title = document.getElementById('title');
const comment = document.getElementById('floatingTextarea');
const form = document.getElementById('form')
form.addEventListener("submit", async function(event){
  event.preventDefault();
  const titleVal = title.value;
  const commentVal = comment.value;
  console.log(titleVal, commentVal);
   const response = await fetch("/api/post/new", {
    method: "POST",
    body: JSON.stringify({
      title: titleVal,
      content: commentVal
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log('successfully sent request');
    document.location.href='/api/user/dashboard'
  }
})