async function upload(files) {
  if (files.length !== 0) {
    let formData = new FormData();
    for (let file of files) {
      formData.append("file", file);
    }

    let resp = await axios.post("http://localhost:8000/upload", formData);
    if (resp.data.status === 200) {
      alert("upload ok");
    }
  }
}

function dropHandler(e) {
  e.preventDefault();
  upload(e.dataTransfer.files);
}

function dragOverHandler(e) {
  e.preventDefault();
}
