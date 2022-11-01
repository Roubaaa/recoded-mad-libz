document.addEventListener("DOMContentLoaded", ()=>{
  getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    showStory(processedStory)
    });
})
function setToView(element, counterId){
  let editView = document.getElementById("myForm")
  let preview = document.getElementById("madLibsPreview")
  const input = document.createElement("input")
  const output = document.createElement("p")
  input.id = counterId
  input.maxLength = 20
  output.style.color = "gray"
  input.addEventListener("input", (event) => {
    input.style.backgroundColor = "#adf7b2"
    output.textContent = input.value;
    output.style.color = "blue"
  })

  input.addEventListener("focus", (event)=>{
    input.style.backgroundColor = "#f7c7ad"
    input.style.scale= 1.1
  })

  if(element["pos"] == "verb"){
    input.placeholder = "verb"
    output.textContent = "(verb)"
    input.addEventListener("focusout",(event)=>{
      input.style.scale = 1
      if(input.value.length === 0) {
        input.style.backgroundColor = "#fadcdc"
        output.style.color = "gray"
        output.textContent = "(verb)"
      }
      else {
        input.style.backgroundColor = "#dce5fa"
        output.style.color = "#0059d6"
        localStorage.setItem(`verb ${input.id}`, `${input.value}`)
      }
    })
    let prevValue = localStorage.getItem(`verb ${counterId}`)
    if(prevValue != null){
      input.value = prevValue
      output.textContent = prevValue
      output.style.color = "#0059d6"
    }

  }
  if(element["pos"] == "noun"){
    input.placeholder = "noun"
    output.textContent = "(noun)"
    input.addEventListener("focusout",(event)=>{
      input.style.scale = 1
      if(input.value.length === 0) {
        input.style.backgroundColor = "#fadcdc"
        output.style.color = "gray"
        output.textContent = "(noun)"
      }
      else {
        input.style.backgroundColor = "#dce5fa"
        output.style.color = "#0059d6"
        localStorage.setItem(`noun ${input.id}`, `${input.value}`)
      }
    })
    let prevValue = localStorage.getItem(`noun ${counterId}`)
    if(prevValue != null){
      input.value = prevValue
      output.textContent = prevValue
      output.style.color = "#0059d6"
    }

  }
  if(element["pos"] == "adj"){
    input.placeholder = "adjective"
    output.textContent = "(adjective)"
    input.addEventListener("focusout",(event)=>{
      input.style.scale = 1
      if(input.value.length === 0) {
        input.style.backgroundColor = "#fadcdc"
        output.style.color = "gray"
        output.textContent = "(adjective)"
      }
      else {
        input.style.backgroundColor = "#e6f4ff"
        output.style.color = "#0059d6"
        localStorage.setItem(`adjective ${input.id}`, `${input.value}`)
      }
    })
    let prevValue = localStorage.getItem(`adjective ${counterId}`)
    if(prevValue != null){
      input.value = prevValue
      output.textContent = prevValue
      output.style.color = "#0059d6"
    }

  }
  editView.appendChild(input)
  preview.appendChild(output)
}
function parseStory(rawStory) {
  const verb = /[[v]]/;
  const noun = /[[n]]/;
  const adj = /[[a]]/;
  let words = rawStory.split(' '); // Array of all words in the story

  // now we will go through every word in the words, create an object of that word, and give it pos if contains [a][n][v], then return these objects
  return words.map((word)=>{
    if(verb.test(word)){
      return {
        "word": word.slice(0, -3),
        "pos": "verb"
      }
    }
    if(noun.test(word)){
      return {
        "word": word.slice(0, -3),
        "pos": "noun"
      }
    }
    if(adj.test(word)){
      return {
        "word": word.slice(0, -3),
        "pos": "adjective"
      }
    }
    else return {
      "word" : word
    }
  })
}
function showStory(parsedStory){
    // this function will recive an array of objects that contains the words with their pos as a parameter
    //we will go through each object and show it on HTML Page using p element, whenever we find an object with pos we will add input element
    let counterId = 0
    parsedStory.forEach(element => {
      if(element["pos"] == "verb"|| element["pos"] == "noun" || element["pos"] == "adj") setToView(element, counterId)
      else{
        const word = document.createElement("p")
        const word2 = document.createElement("p")
        word.textContent = element["word"]
        word2.textContent = element["word"]
        document.getElementById("madLibsPreview").appendChild(word2)
        document.getElementById("myForm").appendChild(word)
      }
      counterId++
    });

}