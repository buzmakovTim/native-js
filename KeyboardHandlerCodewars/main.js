function handler(key, isCaps = false, isShift = false) {
    //..
    let keyResult = ''
    //console.log("This is what passed to this function - " + key)
    //console.log("Type - " + typeof(key))
    //console.log(key.length > 1, key === '', typeof(key) !== 'string', key !== key.toLowerCase())
    
    
    if(typeof(key) !== 'string'){
      //console.log('Returning Error')
      return 'KeyError'
    }
    else if(key.length > 1 || key === '' || key !== key.toLowerCase()){ // If ERROR
      // console.log('Returning Error')
      return 'KeyError'
    } else {
      
      let charsOrNumbers = " `-=[];',./\\1234567890"
      
      let CharNumber = {
        '1' : '!',
        '2' : '@',
        '3' : '#',
        '4' : '$',
        '5' : '%',
        '6' : '^',
        '7' : '&',
        '8' : '*',
        '9' : '(',
        '0' : ')',
        '`' : '~',
        '-' : '_',
        '=' : '+',
        '[' : '{',
        ']' : '}',
        '\\' : '\|',
        ';' : ':',
        '\'' : '\"',
        ',' : '<',
        '.' : '>',
        '/' : '?',
        
      }
      
      if(charsOrNumbers.includes(key)){ //IF Number or Charecter
        
        //console.log('This is string but Number. I should be here')
        if(isShift){
          keyResult = CharNumber[key]
        } else {
          keyResult = key
        }
        
      } else { // For letters
         
          if((isCaps === false && isShift === true) || (isCaps === true && isShift === false)) {
            keyResult = key.toUpperCase()
          } else {
            keyResult = key
          }
        
      }
      
      return keyResult
    }
  }


  // Testing
  console.log(handler('t', false, true))
  console.log(handler(4, false, true))
  console.log(handler("'", false, false))
  

  let str = 'hello'

  //let index = 4
  //str = str.substring(0, index) + str[index].toUpperCase() + str.substring(index+1)
  let copy = str.split('')

  copy[1] = copy[1].toUpperCase()
  
  console.log(copy.join(''))


  function wave(str){
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
      let copy = str.split('');
      if(copy[i] !== ' ') {
      copy[i] = copy[i].toUpperCase()
      newArr.push(copy.join(''))
      }
    }
    return newArr
  }

  //console.log(wave('hello'))