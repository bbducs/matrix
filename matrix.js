var newState = function(arr,x,y,numberOfalive)
{
    var counter =0;
    for(var i=x-1;i<= x+1;i++)
    {
        for(var j= y-1;j<=y+1;j++)
        {
           if(i>=0 && i< arr.length && j>=0 && j< arr.length){
              if(arr[i][j] === 1)
                counter++;
            }
    
        }
    }
    return (--counter === numberOfalive)? true:false;
   
}

module.exports = {
newState :newState
}
