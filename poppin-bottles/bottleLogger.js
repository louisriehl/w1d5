var collection =
{
  bottles: 0,
  caps: 0,
  total: 0,
  bottlesFromCaps: 0,
  bottlesFromEmpties: 0
};

function cashForBottles(cash)
{
  return Math.floor(cash / 2);
}


function recycle()
{
  if (collection.caps >= 4)
  {
    var getBack = 0;
    var capsLost = 0;

    capsLost = collection.caps - (collection.caps % 4);
    getBack = capsLost / 4;

    collection.caps -= capsLost;
    collection.total += getBack;
    collection.bottles += getBack;
    collection.caps += getBack;
    collection.bottlesFromCaps += getBack;
  }

  if (collection.bottles >= 2)
  {
    var getBack = 0;
    var bottlesLost = 0;

    bottlesLost = collection.bottles - (collection.bottles % 2);
    getBack = bottlesLost / 2;

    collection.bottles -= bottlesLost;
    collection.total += getBack;
    collection.bottles += getBack;
    collection.caps += getBack;
    collection.bottlesFromEmpties += getBack;
  }
}

var args = process.argv.slice(2);

collection.bottles = cashForBottles(args[0]);
collection.total = collection.bottles;
collection.caps = collection.bottles;

// console.log(collection);


while ( collection.bottles >= 2 || collection.caps >= 4)
{
  recycle();
}

console.log('You obtained ' + collection.total + " bottles!"
  + "\nBottles earned by recycling:\n"
  + "  by turning in empty bottles: " + collection.bottlesFromEmpties
  + "\n  by turning in bottle caps: " + collection.bottlesFromCaps
  + "\nYou have " + collection.caps + " caps left over and " + collection.bottles + " bottles leftover!");



