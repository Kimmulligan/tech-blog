const submitButton = document.getElementById("edit");
const titleInput = document.getElementById("edit-title");
const contentInput = document.getElementById("edit-content");
const postId = document.getElementsByTagName("section")[0].id;

submitButton.addEventListener("click", async () => {
  const response = await fetch("/api/post/edit/" + postId, {
    method: "PATCH",
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
