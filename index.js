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
  let i=0;
  if (i===array.legth){
    return `The line is currently empty`;
  }
}
