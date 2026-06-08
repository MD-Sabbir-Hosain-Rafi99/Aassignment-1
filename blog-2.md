2. How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?
Ans: Generics powerful feature of TypeScript. It is do different data type use in same function.

Exp:
function getValue<T>(value: T): T { 
    return value; 
}

getValue("Sabbir"); 
getValue(1001);

i. Code reusable hoy
ii. Type safety thake
iii. Duplicate code kom lekha lage.