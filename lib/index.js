const {mouse, left, right} = require('@nut-tree/nut-js');

const move = async () => {
  await mouse.move(left(2));
  await mouse.move(right(2));
}

const main = async() => {
  console.log('running...');
  setInterval(async ()=>{
    await move();
  },4 * 60000)
}

exports.autmouse = main;