function copyIOC(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("IOC copied to clipboard!");
  });
}
