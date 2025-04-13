function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
  }
  
  function applyStyle() {
    const textArea = document.getElementById("userText");
    const fancy = document.getElementById("fancy").checked;
  
    if (fancy) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
  }
  
  function mooify() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    text = sentences.map(s => {
      let words = s.trim().split(" ");
      if (words.length > 0) {
        words[words.length - 1] += "-Moo";
      }
      return words.join(" ");
    }).join(". ");
    textArea.value = text;
  }
  