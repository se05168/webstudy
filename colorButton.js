function colorChangeButton(self){
  /* if(document.querySelector('input').value == 'peek-a-boo!'){
    document.querySelector('body').style.backgroundColor = 'pink';
    document.querySelector('input').value = 'back';
  }
  else{
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('input').value = 'peek-a-boo!';
  } */
  //위의 document.querySelector('input')은 input 태그 안에서 input 태그를 가리키고 있음. 즉 자기 자신을 가리킴. 이를 this로 대체 가능
  if(self.value == 'peek-a-boo!'){
    Background.selectColor('pink');
    Body.selectColor('red');
    self.value = 'back';
  }
  else{
    Background.selectColor('white');
    Body.selectColor('black');
    self.value = 'peek-a-boo!';
  }
}
var Background = {
  selectColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
};
var Body = {
  selectColor:function(color){
    document.querySelector('p').style.color = color;
  }
};
