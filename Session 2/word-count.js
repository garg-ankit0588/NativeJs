function countWords(str) {

 str = str.replace(/\s+/g," ").trim();
 var wordCount = str.split(" ");
 if(str === "")
   return 0;

  return wordCount.length;
}
