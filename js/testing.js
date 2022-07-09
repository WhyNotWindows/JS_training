let s = ["M", "C", "M", "X", "C", "I", "V"];

let result = 0;
    
let I = 1;
let V = 5;
let X = 10;
let L = 50;
let C = 100;
let D = 500;
let M = 1000;

for (let i = 0; i <= s.length; i++) {
    //1-10
    if (s[i] == 'I' && s[i+1] != 'V' && s[i+1] != 'X') {
        result += I;
        console.log ("+1");
    } else if (s[i] == 'I' && s[i+1] == 'V') {
        result += 4;
        console.log ("+4");
        i += 1;
        continue;
    } else if (s[i] == 'I' && s[i+1] == 'X') {
        result += 9;
        console.log ("+9");
        i += 1;
        continue;
    }
    if (s[i] == 'V') {
        result += V;
        console.log ("+5");
    }
    //10-100
    if (s[i] == 'X' && s[i+1] != 'L' && s[i+1] != 'C') {
        result += X;
        console.log ("+10");
    } else if (s[i] == 'X' && s[i+1] == 'L') {
        result += 40;
        console.log ("+40");
        i += 1;
        continue;
    } else if (s[i] == 'X' && s[i+1] == 'C') {
        result += 90;
        console.log ("+90");
        i += 1;
        continue;
    }
    if (s[i] == 'L') {
        result += L;
        console.log ("+50");
    }
    //100-1000
    if (s[i] == 'C' && s[i+1] != 'D' && s[i+1] != 'M') {
        result += C;
        console.log ("+100");
    } else if (s[i] == 'C' && s[i+1] == 'D') {
        result += 400;
        console.log ("+400");
        i += 1;
        continue;
    } else if (s[i] == 'C' && s[i+1] == 'M') {
        result += 900;
        console.log ("+900");
        i += 1;
        continue;
    }
    if (s[i] == 'D') {
        result += D;
        console.log ("+500");
    }
    if (s[i] == 'M') {
        result += M;
        console.log ("+1000");
    }
}

console.log (result);