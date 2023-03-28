
function max(a, b)
{
    return (a > b) ? a : b;
}


function knapSack(W, wt, val, n)
{
    let i, w;
    let K = new Array(n + 1);


    for (i = 0; i <= n; i++)
    {
        K[i] = new Array(W + 1);
        for (w = 0; w <= W; w++)
        {
            if (i == 0 || w == 0)
                K[i][w] = 0;
            else if (wt[i - 1] <= w)
                K[i][w]
                    = max(val[i - 1]
                    + K[i - 1][w - wt[i - 1]],
                    K[i - 1][w]);
            else
                K[i][w] = K[i - 1][w];
        }
    }

    return K[n][W];
}

let wt = [ 2,3,4,5 ];
let val = [ 1, 2,5,6 ];
let W =8 ;
let n = val.length;
document.write(knapSack(W, wt, val, n));

