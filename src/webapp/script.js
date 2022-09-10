//list of phrases for About Me page
const PAGE_PHRASES = [ 
    "proud Latina", 
    "Computer Scientist", 
    "first-gen student",
    "woman in STEM"
  
  ];
  
  var currrentPhrase = 0;
  var letterIndex = 0; 
  var interval;
  
  // Element that holds the text
  var element = document.getElementById("phrases");
  // Cursor element 
  var cursor = document.getElementById("cursor");
  
  /**
   * Function which implements the typing animation.
   */
  function typeWord() { 
    var displayedText =  PAGE_PHRASES[currrentPhrase].substring(0, letterIndex + 1);
    console.log(displayedText); 
    element.innerText = displayedText;
    letterIndex++;
  
    // If full sentence has been displayed then start to delete the sentence after some time
    if(displayedText === PAGE_PHRASES[currrentPhrase]) {
      // Hide the cursor
      //cursor.style.display = 'none';
  
      clearInterval(interval);
      setTimeout(function() {
        interval = setInterval(deleteWord, 50);
      }, 1000);
  }
  }
  
  /**
   * Function which implements the deleting effect for the typing animation.
   */
  function deleteWord() {
    // Get substring with 1 characater deleted
    var displayedText =  PAGE_PHRASES[currrentPhrase].substring(0, letterIndex - 1);
    element.innerText = displayedText;
    letterIndex--;
  
    // If sentence has been deleted then start to display the next sentence
    if(displayedText === '') {
      clearInterval(interval);
  
      // If current sentence was last then display the first one, else move to the next
      if(currrentPhrase== (PAGE_PHRASES.length - 1))
          currrentPhrase= 0;
      else
          currrentPhrase++;
      
      letterIndex = 0;
  
      // Start to display the next sentence after some time
      setTimeout(function() {
          cursor.style.display = 'inline-block';
          interval = setInterval(typeWord, 130);
      }, 200);
    }
  }
  
  // Start the typing effect on load
  function start(){
      interval = setInterval(typeWord, 130);
  }
  