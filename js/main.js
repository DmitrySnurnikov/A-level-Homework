// Task 1

document.addEventListener('keydown', function(event){
  if(event.code === 'KeyP'){
    console.log('Hello, world!');
  }
});


// Task 2

function addListener(type,handler){
  var keys = type.split('+');
  console.log(keys);
  document.addEventListener('keydown', function(event){
      if(event.code === keys[0]){
        alert(Hello);
        keys.shift();
    };
    if(keys.length === 0){
      keys = source.slice(0);
    }
    console.log(event);
  });
};
addListener('Control+Y',12)
