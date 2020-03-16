function add(x,y){
  if((typeof x ) === 'number' && (typeof y))
    return x + y;
  else
    return NaN;
}

module.exports = add;
