## Built-in multiply operator Vs. My multiplication without multiply operator Vs. GeeksForGeeks recursive implementation

My definition of "elegant code" is a code that is efficient, readable, and maintainable.

- Regular approach is the most elegant code because it satisfies all the requirement of "elegant code".

- My iterative approach is readable and maintainable since all the control variables are declared at the top of the function(except for 'i'). However, the efficiency is in between other two approaches and starts taking longer when the input gets bigger as well(*Not as slow as recursive). Therefore, this code is so-so elegant.

- Recursive approach is readable, but is the least efficient. When input numbers get bigger, it quickly becomes out of memory for too many calls in the stack. Therefore, this recursive code is not elegant.


### Result of 27 * 19
```
  regularMultiply: 0.160ms
       myMultiply: 0.099ms
recursiveMultiply: 0.108ms

     regultResult: 513
         myResult: 513
  recursiveResult: 513
```

### Result of -3 * 7
```
  regularMultiply: 0.003ms
       myMultiply: 0.032ms
recursiveMultiply: 0.003ms

     regultResult: -21
         myResult: -21
  recursiveResult: -21
```

### Result of 329 * -6
```
  regularMultiply: 0.009ms
       myMultiply: 0.004ms
recursiveMultiply: 0.003ms

     regultResult: -1974
         myResult: -1974
  recursiveResult: -1974
```

### Result of -603 * -378
```
  regularMultiply: 0.002ms
       myMultiply: 0.044ms
recursiveMultiply: 0.042ms

     regultResult: 227934
         myResult: 227934
  recursiveResult: 227934
```

### Result of 2532 * 3233
```
  regularMultiply: 0.003ms
       myMultiply: 0.128ms
recursiveMultiply: 0.324ms

     regultResult: 8185956
         myResult: 8185956
  recursiveResult: 8185956
```
