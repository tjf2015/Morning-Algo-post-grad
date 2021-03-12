// https://leetcode.com/problems/integer-to-roman/
// 12. Integer to Roman
// Medium
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.


// Example 1:
// Input: num = 3
// Output: "III"

// Example 2:
// Input: num = 4
// Output: "IV"

// Example 3:
// Input: num = 9
// Output: "IX"

// Example 4:
// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

// Example 5:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= num <= 3999

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

intToRoman = (num) => {
    // let num = num
    let output = ""
    while(num > 0) {
        if(num >= 1000){ // M 1000
            output = output+"M";
            num = num - 1000;
        }
        else if(num >= 500 && num < 1000) { //D 500
            if(num >= 900 && num < 1000){
                output = output + "CM"
                num = num - 900
            }
            else {
                output = output + "D"
                num = num - 500
            }
        }
        else if (num >= 100 && num < 500) { //C 100
            if (num >= 400 && num < 500) {
                output = output + "CD"
                num = num - 400
            } else {
                output = output + "C"
                num = num -100
            }
        }
        else if (num >= 50 && num < 100) { //L 50
            if(num >=90 && num < 100) {
                output = output + "XC"
                num = num - 90
            }else {
                output = output + "L"
                num = num -50
            }
            
        }
        else if (num >= 9 && num < 50) { //X 10
            if(num >=40 && num < 50) {
                output = output + "XL"
                num = num - 40
            }
            else if(num == 9) {
                output = output + "IX"
                num = num - 9
            }else {
                output = output + "X"
                num = num - 10;
            }
        }
        else if (num >= 4 && num < 9) { //V 5
            if ( num == 4) {
                output = output + "IV"
                num = num -4
            }else{
                output = output +"V"
                num = num - 5
            }
            
        }
        else if (num >= 1 && num < 4) { // I 1
            output = output + "I"
            num = num-1
        }
    }
    return output;
}
// Output: "MCMXCIV"
console.log(intToRoman(1994))