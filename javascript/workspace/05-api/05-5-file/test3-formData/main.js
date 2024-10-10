let button = document.getElementById("button");
let fileNode = document.getElementById("filepicker");
let titleNode = document.getElementById("title");

async function upload(e) {
  e.preventDefault();
  let title = titleNode.value;
  let files = fileNode.files;

  if (files.length !== 0) {
    let formData = new FormData();
    for (let file of files) {
      formData.append("file", file);
    }
    formData.append("title", title);

    let resp = await axios.post("http://localhost:8000/upload", formData);

    if (resp.data.status === 200) {
      alert("upload ok");
    }
  }
}

button.addEventListener("click", upload);
