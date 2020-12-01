const allPaths = document.querySelectorAll("path");

for (let i = 0; i < allPaths.length; i++) {
  console.log(allPaths[i].getTotalLength());
}
