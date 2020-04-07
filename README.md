## EASTER CALCULATOR

# Automatic calculator to find Easter day on years 1900 to 2099 based on Gauss' calculations :

A = year

R = A%4
S = A%7
T = A%19

B = (19*T)+24
M = B%30

C = (2*R)+(4*S)+(6*M)+5

N = C%7

P = M+N

If P<10 Easter will be on P + 22 March
If P>9 Easter will be on P - 9 April

*This was a Math lesson my daughter got from her teacher to study Euclidian divisions. Just turned it into Javascript*