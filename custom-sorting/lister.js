var arrayOfNumbers = [];

module.exports = {

  verifier: function() //ensures that the module was successfully imported
  {
    console.log('module was exported correctly');
  },

  lister : function(num)
  {
    for (var i = 0; i < num.length; i++)
    {
      arrayOfNumbers.push(num[i]);
    }
  },

  sorter : function()
  {
    arrayOfNumbers.sort(function (a, b)
    {
      return a-b;
    });
    return arrayOfNumbers;
  }
};