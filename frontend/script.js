async function getData() {
  const response = await fetch("http://localhost:5000/api");
  const data = await response.text();

  document.getElementById("result").innerText = data;
}