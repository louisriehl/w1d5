var collection =
{
  bottles: 0,
  caps: 0,
  total: 0
};

function cashForBottles(cash)
{
  return Math.floor(cash / 2);
}


function turnInCaps()
{
  var getBack = 0;
  var capsLost = 0;

  capsLost = collection.caps - (collection.caps % 4);
  getBack = capsLost / 4;

  collection.caps -= capsLost;
  collection.total += getBack;
  collection.bottles += getBack;
  collection.caps += getBack;
}

function turnInBottles()
{
  var getBack = 0;
  var bottlesLost = 0;

  bottlesLost = collection.bottles - (collection.bottles % 2);
  getBack = bottlesLost / 2;

  collection.bottles -= bottlesLost;
  collection.total += getBack;
  collection.bottles += getBack;
  collection.caps += getBack;
}

collection.bottles = cashForBottles(30);
collection.total = collection.bottles;
collection.caps = collection.bottles;

console.log(collection);


while ( collection.bottles >= 2 || collection.caps >= 4)
{
  if (collection.caps >= 4)
    turnInCaps();
  if (collection.bottles >= 2)
    turnInBottles();
  console.log(collection);
}



