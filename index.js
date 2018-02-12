function takeANumber(array,name){
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}
function nowServing(array){
  let i=0;
  if (i<array.length){
    return `Currently serving ${array.shift(array)}.`;
  }else{
    return `There is nobody waiting to be served!`;
  }
}
function currentLine(array){
  var numArray[]
  if (array.length===0){
    return `The line is currently empty.`;
  }
  for (let i=0;i<array.length;i++){
    numArray.push(`${i+1}.${array[i]}`)
    return `The line is currently: ${numArray.join(', ')}`
  }
}


function currentLine(katzDeliLine) {
  var positions = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }

  for (let i = 0; i < katzDeliLine.length; i++) {
    positions.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

  return `The line is currently: ${positions.join(', ')}`
}for (let i = 0; i < katzDeliLine.length; i++) {
     // this for loop will keep pushing the names from the katzDeliLine array into our positions array along with their indexes, so at first loop it will push (0+1) which equales 1. plus the name Ada... and so on [1.Ada, 2. Tim] ..
    positions.push(`${i + 1}. ${katzDeliLine[i]}`);
  }

  return `The line is currently: ${positions.join(', ')}`;
}

