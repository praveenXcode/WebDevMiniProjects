function RandomNumber(){
  return Math.floor(Math.random()*3);
}
let adjectives ={
  0:"Crazy",
  1:"Amazing",
  2:"Fire"
}
let shopname ={
  0:"Engine",
  1:"Food",
  2:"Garments"
}
let eword={
  0:"Bros",
  1:"Limited",
  2:"Hub"
}
console.log(`Your new bussiness name is ${adjectives[RandomNumber()]} ${shopname[RandomNumber()]} ${eword[RandomNumber()]}`);
