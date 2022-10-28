/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
function parseStory(rawStory) {
  const verb = /[[v]]/;
  const noun = /[[n]]/;
  const adj = /[[a]]/;
  let words = rawStory.split(' '); // Array of all words in the story

  // now we will go throw every word in the words, create an object of that word, and give it pos if contains [a][n][v], then return these objects
  return objReturn = words.map((word)=>{
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
/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });



  const story =`It is a scary[a] Halloween night. I have my ghost[n] costume on and I step outside to begin my adventurous[a] evening of trick or treating.
  I walked[v] down the street and rang[v] up to the first door. " trick[n] or treat" I said as the door began to open. " trick[n] or treat?" a woman[n] said on the
  other side of the door. "What does that mean?" "It means if you don't give me a treat I'll have to trick[v] you." she said as she agressively[a] closed[v]
  out the door and I walked[v] down the street. I only wanted a candy[n]!`;
  console.log(  parseStory(story))