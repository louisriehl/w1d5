function maxProfit (array)
{
  var mSell = array[0],
  mBuy = array[0],
  tSell = array[0],
  tBuy = array[0],
  tProfit = tSell - tBuy,
  mProfit = tProfit;

  // console.log('mSell', mSell,
  //   'mBuy', mBuy,
  //   'tSell', tSell,
  //   'tBuy', tBuy,
  //   'tProfit', tProfit,
  //   'mProfit', mProfit);

  for (var i = 1; i < array.length; i++)
  {
    if (array[i] > tSell)
    {
      console.log(array[i], 'is greater than', tSell, 'store it in tSell');
      tSell = array[i];
      console.log('tSell is now', tSell, 'and tBuy is', tBuy);
    }
    if (array[i] < tBuy)
    {
      console.log(array[i], 'is less than', tBuy, 'store it in tBuy');
      tBuy = array[i];
      tSell = array[i];
      console.log('tBuy is now', tBuy, 'and tSell is', tSell);
    }

    tProfit = tSell - tBuy;
    console.log('tProfit', tProfit, 'mProfit', mProfit);

    if (tProfit > mProfit)
    {
      console.log('tProfit', tProfit, 'is greater than mProfit', mProfit);
      mSell = tSell;
      mBuy = tBuy;
      mProfit = tProfit;
      console.log('mSell', mSell, 'mBuy', mBuy, 'mProfit', mProfit);
    }
  }

  if (mProfit)
    return mProfit;
  else
    return -1;
}

console.log(maxProfit([12, 15, 23, 11, 6, 18]));

//module.exports = maxProfit;