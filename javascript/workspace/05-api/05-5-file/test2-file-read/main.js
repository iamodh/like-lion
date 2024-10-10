let fileNode = document.getElementById("filepicker");
let resultNode = document.getElementById("results");

fileNode.addEventListener("change", handleFile);

function handleFile(e) {
  while (resultNode.firstChild) {
    resultNode.removeChild(resultNode.firstChild);
  }

  let files = fileNode.files;
  if (files.length !== 0) {
    for (let file of files) {
      if (file.type.startsWith("text")) {
        handleTextFile(file);
      } else if (file.type.startsWith("image")) {
        handleImageFile(file);
      }
    }
  }
}

function handleTextFile(file) {
  let liNode = document.createElement("li");
  let nameNode = document.createElement("h3");
  nameNode.innerHTML = file.name;
  liNode.appendChild(nameNode);

  let reader = new FileReader();

  reader.onload = function (e) {
    let pNode = document.createElement("p");
    pNode.innerHTML = e.target.result.split("\n").join("<br/>");
    liNode.appendChild(pNode);
    resultNode.appendChild(liNode);
  };

  reader.onerror = function (e) {
    let pNode = document.createElement("p");
    pNode.innerHTML = "파일 읽기에 실패했습니다.";
    liNode.appendChild(pNode);
    resultNode.appendChild(liNode);
  };

  reader.readAsText(file);
}

function handleImageFile(file) {
  let liNode = document.createElement("li");
  let nameNode = document.createElement("h3");
  nameNode.innerHTML = file.name;
  liNode.appendChild(nameNode);

  let reader = new FileReader();

  reader.onload = function (e) {
    let imgNode = document.createElement("img");
    imgNode.setAttribute("src", e.target.result);
    imgNode.setAttribute("width", "100");
    liNode.appendChild(imgNode);
    resultNode.appendChild(liNode);
  };

  reader.onerror = function (e) {
    let pNode = document.createElement("p");
    pNode.innerHTML = "파일 읽기에 실패했습니다.";
    liNode.appendChild(pNode);
    resultNode.appendChild(liNode);
  };

  reader.readAsDataURL(file); // base64로 인코딩된 문자열로 읽어라
  // base64 문자열을 img 태그로 출력할 수 있다.
}
