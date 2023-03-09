function allLongestString(inputArray) 
{
    var longest = 0;
    var result = [];
    for (var i = 0; i < inputArray.length; i++) 
    {
        if (inputArray[i].length > longest) 
        {
            longest = inputArray[i].length;
        }
    }
   for(var i = 0; i < inputArray.length; i++)
   {
       if(inputArray[i].length == longest)
       {
           result.push(inputArray[i]);
       }
   }
    console.log(result);
    return result;
}