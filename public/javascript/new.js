const submitButton = document.getElementById("newPost");
const titleInput = document.getElementById("newPost-title");
const contentInput = document.getElementById("newPost-content");

submitButton.addEventListener("click", async () => {
  const response = await fetch("/api/post/new/", {
    method: "POST",
    body: JSON.stringify({
      title: titleInput.value,
      content: contentInput.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log('successfully sent request');
    document.location.href='/api/user/dashboard'
  }
});