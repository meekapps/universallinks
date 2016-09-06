if (bowser.ios) {
  console.log('this is an iOS device');
  document.cookie = 'code_abc123';
} else if (bowser.android) {
  console.log('this is an android device');
} else {
  console.log('other');
}

console.log(bowser);
