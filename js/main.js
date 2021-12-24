var allbody = document.getElementById('allbody'),
    typeofcalc = document.getElementById('typeofcalc'),
    system1 = document.getElementById('system1'),
    system2 = document.getElementById('system2'),
    system3 = document.getElementById('system3'),
    system4 = document.getElementById('system4'),
    system5 = document.getElementById('system5');

var lumbda = document.getElementsByClassName('lambda'),
    lumbda1 = document.getElementsByClassName('lambda1'),
    mue = document.getElementsByClassName('mue'),
    mue1 = document.getElementsByClassName('mue1'),
    k = document.getElementsByClassName('k'),
    kspan = document.getElementById('kspan'),
    m = document.getElementById('m'),
    mspan = document.getElementById('mspan'),
    t = document.getElementById('t'),
    n = document.getElementById('n'),
    c = document.getElementsByClassName('c'),
    cspan = document.getElementById('cspan'),
    kadd = 0,
    pk = 0,
    lumbdaeq = 0;
    var r = 0;
    var p = 0;
    var p0 = 0;
    var lumbdadash = 0; 


var l = document.getElementsByClassName('l'), 
    lq = document.getElementsByClassName('lq'),
    w = document.getElementsByClassName('w'),
    wq = document.getElementsByClassName('wq');


var n0 = document.getElementById('n0'),
    n0span = document.getElementById('n0span'),
    n1 = document.getElementById('n1'),
    n2 = document.getElementById('n2'),
    n3 = document.getElementById('n3'),
    w0 = document.getElementById('w0'),
    w1 = document.getElementById('w1'),
    w2 = document.getElementById('w2'),
    w3 = document.getElementById('w3');

    




function fact(n) {
    if (n >= 0 && n <= 1)
        {
            return 1;
        }
    else{
        return n * fact(n-1);
    }
}

function sum (r)
{
   var sum = 0;
    for(var n = 0; n < c[0].value ; n++)
        {
         sum = sum + (  (Math.pow(r,n)) / (fact(n))  ) ;
        }
    return sum;
}

function sumOfSystem5(r)
{
    var sum02 = 0;
    for(var n = 0; n < c[1].value ; n++)
        {
         sum02 = sum02 + (  (Math.pow(r,n)) / (fact(n))  ) ;
        }
    return sum02;
}


function sum01 (r)
{
   var sum01 = 0;
    for(var n = 0; n < c[1].value ; n++)
        {
         sum01 = sum01 +  (c[1].value - n) *((Math.pow(r,n)) / (fact(n))) ;
        }
    return sum01;
}




function ti0 ()
{
    var ti = 0;
    var ti0 = 0;
ti = round01((k[0].value - (mue[0].value / lumbda[0].value)) / (lumbda[0].value - mue[0].value));

    do
    {
                                        

            ti0 = round01(lumbda[0].value * ti) - round01((mue[0].value *ti) - (mue[0].value / lumbda[0].value));
            ti = ti - (1/lumbda[0].value);
    }while(ti0 == k[0].value);
    return parseInt(ti ) + (2*(1/lumbda[0].value));
}


function check0()
{
    if(( (Math.round(1/mue[0].value)) % (Math.round(1/lumbda[0].value))) == 0  && lumbda[0].value != mue[0].value )
        {
            return true;
        }
    else
        {
            return false;
        }
}


function ti1()
{
    var t1 = 0;
    var t10 = 0;
    t1 = round01((m.value) / (mue[0].value - lumbda[0].value));
     do
    {
        t10 = round01(mue[0].value * t1) - round01(lumbda[0].value * t1);
            t1 = t1 - 1;
    }while(t10 == m.value);
    return  parseInt(t1) + 2;
}


function round01(num)
{
    if ((Math.round(num) - num) <= 0.1)
        {
          return  Math.round(num);
        }
    else
        {
           return Math.trunc(num); 
        }
}
function system(a) {
    typeofcalc.innerHTML=(a);
}

   allbody.onkeyup = function() {
      
       if(isNaN(lumbda[0].value)) {
           lumbda[0].value = "";
      }
       
      if(isNaN(lumbda1[0].value)) {
          lumbda1[0].value = "";
      }
 
       if(isNaN(mue1[0].value)) {
          mue1[0].value = "";
      }
 
       
       if(isNaN(mue[0].value)) {
           mue[0].value = "";
       } 
      if(isNaN(k[0].value)) {
           k[0].value = "";
       } 
       if(isNaN(t.value)) {
           t.value = "";
       } 
      if(isNaN(n.value)) {
           n.value = "";
       } 
       
       if(isNaN(m.value)) {
           m.value = "";
       }
           
        if(isNaN( mue[1].value)) {
            mue[1].value = "";
       }
       
        if(isNaN( mue1[1].value)) {
            mue1[1].value = "";
       }
       
       if(isNaN(lumbda[1].value)) {
             lumbda[1].value = "";
       }   
       
       if(isNaN(lumbda1[1].value)) {
             lumbda1[1].value = "";
       } 
       
       
      if(isNaN(lumbda[2].value)) {
             lumbda[2].value = "";
       } 
       if(isNaN(lumbda1[2].value)) {
             lumbda1[2].value = "";
       } 
       if(isNaN(mue[2].value)) {
             mue[2].value = "";
       } 
       if(isNaN(mue1[2].value)) {
             mue1[2].value = "";
       } 
       if(isNaN(k[1].value)) {
             k[1].value = "";
       }
       
       
       
       
       
       
       
       
        if(isNaN(lumbda[3].value)) {
             lumbda[3].value = "";
       } 
       if(isNaN(lumbda1[3].value)) {
             lumbda1[3].value = "";
       } 
       if(isNaN(mue[3].value)) {
             mue[3].value = "";
       } 
       if(isNaN(mue1[3].value)) {
             mue1[3].value = "";
       } 
       if(isNaN(c[0].value)) {
             c[0].value = "";
       }
       
       
       
       
       
       
       
       
       
       if(isNaN(lumbda[4].value)) {
             lumbda[4].value = "";
       } 
       if(isNaN(lumbda1[4].value)) {
             lumbda1[4].value = "";
       } 
       if(isNaN(mue[4].value)) {
             mue[4].value = "";
       } 
       if(isNaN(mue1[4].value)) {
             mue1[4].value = "";
       } 
       if(isNaN(c[1].value)) {
             c[1].value = "";
       } 
        if(isNaN(k[2].value)) {
             k[2].value = "";
       }
   }

function calculate()
{
    
        
        
        if (typeofcalc.textContent == 2)
        {
            
            mue[1].value = (mue[1].value / mue1[1].value); mue1[1].value = 1;
    lumbda[1].value = (lumbda[1].value / lumbda1[1].value); lumbda1[1].value = 1; 
            
            
            if (mue[1].value != Infinity && lumbda[1].value != Infinity)
                {
            l[0].value = (lumbda[1].value) / (mue[1].value - lumbda[1].value);
            lq[0].value =(lumbda[1].value * lumbda[1].value) / (mue[1].value * (mue[1].value - lumbda[1].value));
            w[0].value = (l[0].value / lumbda[1].value);
            wq[0].value = (lq[0].value / lumbda[1].value);
                }
            else
                {
                   l[0].value = "";
                   lq[0].value = ""; 
                   w[0].value = ""; 
                   wq[0].value = ""; 

                }
        }
        
        
        if (typeofcalc.textContent == 3)
        {
             mue[2].value = (mue[2].value / mue1[2].value); mue1[2].value = 1;
    lumbda[2].value = (lumbda[2].value / lumbda1[2].value); lumbda1[2].value = 1; 
            
            if (mue[2].value != Infinity && lumbda[2].value != Infinity && k[1].value != 0)
                {
            
          if ((lumbda[2].value / mue[2].value) == 1)
              {
                    kadd = parseInt(k[1].value) + 1;
                   l[1].value = (k[1].value / 2);
                   pk = 1 / (kadd);
                   lumbdaeq = lumbda[2].value*(1-pk);
                  lq[1].value = (l[1].value) - (lumbdaeq / mue[2].value);
                  w[1].value = (l[1].value / lumbdaeq);
                  wq[1].value = (lq[1].value / lumbdaeq);
              }
            
           
          else
              {
                   kadd = parseInt(k[1].value) + 1;
                  l[1].value = (lumbda[2].value / mue[2].value) * ( ( 1 -                       ((kadd) * Math.pow(lumbda[2].value / mue[2].value,k[1].value )) + (k[1].value * Math.pow(lumbda[2].value / mue[2].value,kadd)) ) /     (   (1 - (lumbda[2].value / mue[2].value)) *          (1 - (Math.pow(lumbda[2].value / mue[2].value,kadd)))  )                          );
                   pk = (Math.pow(lumbda[2].value / mue[2].value, k[1].value)) * (       (1 - (lumbda[2].value / mue[2].value))  / (1 - (Math.pow(lumbda[2].value / mue[2].value , kadd))));
                    lumbdaeq = lumbda[2].value*(1-pk);
                  lq[1].value = (l[1].value) - (lumbdaeq / mue[2].value);
                  w[1].value = (l[1].value / lumbdaeq);
                  wq[1].value = (lq[1].value / lumbdaeq);
              }
         }
            else
                {
                   l[1].value = "";
                   lq[1].value = ""; 
                   w[1].value = ""; 
                   wq[1].value = ""; 

                }
              
    }
        
            
      
    
    
    if (typeofcalc.textContent == 4)
        {
             mue[3].value = (mue[3].value / mue1[3].value); mue1[3].value = 1;
    lumbda[3].value = (lumbda[3].value / lumbda1[3].value); lumbda1[3].value = 1;
            
            if (mue[3].value != Infinity && lumbda[3].value != Infinity && c[0].value != 0 && c[0].value != 1)
                {

            r = lumbda[3].value / mue[3].value;
            p = r / c[0].value;
            if (p < 1)
                {
                  var term1 = 0;
                  var term2 = 0;
                  var term3 = 0;
                  var term4 = 0;
                  var term5 = 0;
                    term1 = sum(r);
                    term2 = (c[0].value)*(Math.pow(r,c[0].value));
                    term3 = (fact(c[0].value))* (c[0].value - r);
                    p0 = 1 / ((term1) + (term2 / term3));
                    term4 = ((Math.pow(r,parseFloat(c[0].value)+1))  / ( c[0].value ));
                    term5 = ((fact(c[0].value)) * (Math.pow((1-p),2)));
                    lq[2].value = (term4 / term5) * p0;
                    wq[2].value = (lq[2].value / lumbda[3].value);
                    w[2].value = ((lq[2].value / lumbda[3].value)+(1 / mue[3].value));
                    l[2].value = (parseFloat(lq[2].value) + parseFloat(r));
                }
            
            else
                {
                 var term6 = 0;
                 var term7 = 0;
                 var term8 = 0;
                 var term9 = 0;
                 var term10= 0;
                    term6 = sum(r);
                    term7 = ((Math.pow(r,c[0].value))   /   (fact(c[0].value)));
    term8 = ((c[0].value * mue[3].value)  /  ((c[0].value * mue[3].value) - (lumbda[3].value)));
                    p0 = 1 / ((term6) + ((term7) * (term8))); 
                    term9 = ((Math.pow(r,parseFloat(c[0].value)+1))  / ( c[0].value ));
                    term10 = ((fact(c[0].value)) * (Math.pow((1-p),2)));  
                    lq[2].value = (term9 / term10) * p0;
                    wq[2].value = (lq[2].value / lumbda[3].value);
                    w[2].value = ((lq[2].value / lumbda[3].value)+(1 / mue[3].value));
                    l[2].value = (parseFloat(lq[2].value) + parseFloat(r));
                    
                }
            }
            else
                {
                    l[2].value = "";
                    lq[2].value = "";
                    w[2].value = "";
                    wq[2].value = "";
                    
                }
            
        }
   
    if (typeofcalc.textContent == 5)
        {
            
            
            mue[4].value = (mue[4].value / mue1[4].value); mue1[4].value = 1;
    lumbda[4].value = (lumbda[4].value / lumbda1[4].value); lumbda1[4].value = 1;
            
            
            if (mue[4].value != Infinity && lumbda[4].value != Infinity && c[1].value != 0 && c[1].value != 1 && k[2].value != 0)
                {
                
                
            var kc1 = 0;
            var pk = 0;

            r = lumbda[4].value / mue[4].value;
            p = r / c[1].value;
            kc1 = parseFloat(k[2].value) - parseFloat(c[1].value) + parseFloat(1);
            
            
            if(p != 1)
               {
               var term01 = 0
               var term02 = 0;
               var term03 = 0;
                   
               var term04 = 0;
               var term05 = 0;
               var term06 = 0;
                   
                   term01 = sumOfSystem5(r);
                   term02 = ((Math.pow(r,c[1].value)) / (fact(c[1].value)));
                   term03 = ((1 - (Math.pow(p,kc1))) / (1 - p));
                   p0 = 1/((term01) + (term02*term03));
pk = ((Math.pow(r,k[2].value)) / ((Math.pow(c[1].value,k[2].value-c[1].value)) * (fact(c[1].value)))) * p0;
                   term04 = ((p * Math.pow(r,c[1].value) * p0) / ((fact(c[1].value)) *(Math.pow(1-p,2))));
                   term05 = 1 - Math.pow(p,kc1);
                   term06 = (1-p) * (kc1) * (Math.pow(p, k[2].value - c[1].value));
                   lq[3].value = (term04) * (term05 - term06);
                   l[3].value = (parseFloat(lq[3].value) + parseFloat(c[1].value)) - (p0 * sum01(r));
                   lumbdadash = lumbda[4].value * (1 - pk);
                   w[3].value = l[3].value / lumbdadash;
                   wq[3].value = lq[3].value / lumbdadash; 
               }
                    else 
                {
                    l[3].value = "";
                    lq[3].value = "";
                    w[3].value = "";
                    wq[3].value = "";
                }
            }
            else 
                {
                    l[3].value = "";
                    lq[3].value = "";
                    w[3].value = "";
                    wq[3].value = "";
                }
         
        
        }
        if (typeofcalc.textContent == 1)
            {
    mue[0].value = (mue[0].value / mue1[0].value); mue1[0].value = 1;
    lumbda[0].value = (lumbda[0].value / lumbda1[0].value); lumbda1[0].value = 1; 
                
                if (mue[0].value != Infinity && lumbda[0].value != Infinity)
                    {
                if (lumbda[0].value > mue[0].value)
                    {                            
                        n0.value = 0;
                        n1.value = "λt - [µt - µ/λ]";
                        if(check0() == false)
                            {
                        n2.value = (k[0].value - 1) + "  OR  " + (k[0].value - 2);
                            }
                        else
                            {
                               n2.value = (k[0].value - 1);  
                            }
                        if(t.value < 1/lumbda[0].value)
                            {
                              n3.value = 0;  
                            }
                        if (t.value >= 1/lumbda[0].value && t.value < ti0())
                            {
n3.value = round01(lumbda[0].value * t.value) - round01((mue[0].value *t.value) - (mue[0].value / lumbda[0].value));   
                            }
                        if (t.value >= ti0() && check0() == false)
                            {
                              n3.value = (k[0].value - 1) + "  OR  " + (k[0].value - 2);   
                            }
                        if (t.value >= ti0() && check0() == true)
                            {
                              n3.value = (k[0].value - 1);  
                            }
                        
                        w0.value = 0;
                        w1.value = "(1/μ   - 1/λ)(n-1)";
                        if(check0() == false)
                            {
                        w2.value = Math.round(((1 / mue[0].value) - (1 / lumbda[0].value)) *((lumbda[0].value * ti0()) - 3)) + "  OR  " + Math.round(((1 / mue[0].value) - (1 / lumbda[0].value)) *((lumbda[0].value * ti0()) - 2)); 
                            }
                        if(check0() == true)
                            {
                              w2.value = Math.round(((1 / mue[0].value) - (1 / lumbda[0].value)) *((lumbda[0].value * ti0()) - 2));   
                            }
                        if (n.value == 0)
                            {
                                w3.value = 0;
                               
                            }
                        if (n.value < lumbda[0].value * ti0() && n.value > 0)
                            {
                                w3.value =Math.round(((1 / mue[0].value) - (1 / lumbda[0].value)) * (n.value - 1));
                            }
                        if ( n.value >= lumbda[0].value * ti0() && check0() == false)
                            {
                                w3.value = Math.round(((1 / mue[0].value) - (1 / lumbda[0].value)) *((lumbda[0].value * ti0()) - 3)) + "  OR  " + Math.round(((1 / mue[0].value) - (1 / lumbda[0].value)) *((lumbda[0].value * ti0()) - 2)); 
                            }
                        if (n.value >= lumbda[0].value * ti0() && check0() == true)
                            {
                               w3.value =Math.round(((1 / mue[0].value) - (1 / lumbda[0].value)) *((lumbda[0].value * ti0()) - 2));  
                            }
            }
               
                
              if (lumbda[0].value == mue[0].value && mue[0].value !=0)
                  {
                      n0.value = "M";
                      n1.value = "M";
                      n2.value = "M";
                      n3.value = m.value;
                      
                      
                      w0.value = "(M-1)(1/ μ) "; 
                      w1.value = "(M-1)(1/ μ) ";
                      w2.value = "(M-1)(1/ μ) ";
                      w3.value = (m.value - 1) * (1/mue[0].value);
                  }
                
                 if (lumbda[0].value < mue[0].value)
                     {
                       n0.value = "M + (λt) - (μt)";
                       n1.value = "M + (λt) - (μt)";
                       n2.value = "0 OR 1";
                         if (t.value < ti1())
                             {
                                 n3.value = parseInt(m.value) + parseInt(round01(lumbda[0].value * t.value) - round01(mue[0].value * t.value));
                             }
                         if (t.value >= ti1())
                             {
                               n3.value = "0 OR 1";  
                             }
                         
                         w0.value = "Wq(0) : " + ((m.value - 1) / (2 * mue[0].value));
                         w1.value = "( M - 1 + n) (1/μ) – n(1/ λ) ";
                         w2.value = 0;
                         
                         if (n.value == 0)
                             {
                         w3.value = "Wq(0) : " + ((m.value - 1) / (2 * mue[0].value)); 
                             }
            if (n.value <= round01(lumbda[0].value * ti1()) && n.value > 0)
                             {
 w3.value = ((parseInt(m.value - 1) + parseInt(n.value)) * round01(1/mue[0].value)) - round01(n.value * 1/lumbda[0].value);    
                             }
                         if (n.value > round01(lumbda[0].value * ti1()))
                             {
                                 w3.value = 0;
                             }
                         
                         
                     }
                    }
                else
                    {
                       n0.value = "";
                       n1.value = "";
                       n2.value = "";
                       n3.value = "";
                        
                       w0.value = "";
                       w1.value = "";
                       w2.value = "";
                       w3.value = "";


                    }
                
                
                
                

        }
       
      }
    
    