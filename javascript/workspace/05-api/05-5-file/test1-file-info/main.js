let fileNode1 = document.getElementById("fileInput1");
let fileNode2 = document.getElementById("fileInput2");
let resultNode = document.getElementById("results");

function handleFile(e) {
  // 기존 출력 제거
  while (resultNode.firstChild) {
    resultNode.removeChild(resultNode.firstChild);
  }

  let files = e.target.files;
  console.log(typeof files);
  if (files.length !== 0) {
    for (let file of files) {
      let item = document.createElement("li");
      item.innerHTML = `file name : ${file.name}, file size : ${
        file.size
      }, modified : ${new Date(file.lastModified)}`;
      resultNode.appendChild(item);
    }
  }
}

fileNode1.addEventListener("change", handleFile);
fileNode2.addEventListener("change", handleFile);
