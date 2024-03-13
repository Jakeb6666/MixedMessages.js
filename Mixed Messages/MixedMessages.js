const personalQuote = {
    personQuote: ['Jake Brown', 'Walt Disney',
    'Winston Churchill', 'Audrey Hepburn', 'Beyonce', 'E.E Cummings'],
    quote: ["If you can't handle the heat, stay out the kitchen.",
    "It takes courage to grow up and become who you really are.",
    "Nothing is impossible. The word itself says 'I'm possible!'",
    "Attitude is a little thing that makes a big difference.",
    "All our dreams can come true, if we have the courage to pursue them."],
    whatYouShouldDo: ['Listen to it.',
    'Forget I said anything.', "You're doing fine on your own.", "I can't believe your even here!",
    'I speak the truth.', 'You got a better idea?']
};

function generateRandomNumber(num) {
    //gets a random number from 0-1 multiplied by num.
    return Math.floor(Math.random() * num)
  };

  //this is an array which displays the full message.
  const fullQuote = []

    // Iterate over the object considering the array length
    for(let item in personalQuote) {
        let i = generateRandomNumber(personalQuote[item].length)
      
        // use the object's properties to customize the message being added to collectiveAdvice
        switch(item) {
          case 'personQuote':
            fullQuote.push(`"${personalQuote[item][i]}" said - .`)
            break
          case 'quote':
            fullQuote.push(`"${personalQuote[item][i]}".`)
            break
          case 'whatYouShouldDo':
            fullQuote.push(`What I think you should do: "${personalQuote[item][i]}".`)
            break
          default:
            fullQuote.push('I don/t have a clue')
        }
      };

      function formatQuote(Quote) {
        const formatted = fullQuote.join('\n')
        console.log(formatted)
      };
      
      formatQuote(fullQuote);
      