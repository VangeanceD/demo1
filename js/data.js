export const programsData = {
    board: [
        {
            id: 1,
            title: "Palindrome Check",
            description: "Check if a string is a palindrome",
            category: "board",
            year: 2025,
            paper: "board",
            tags: ["String", "Logic"],
            difficulty: "Medium",
            code: `public class PalindromeCheck {
    public static void main(String[] args) {
        String str = "racecar";
        boolean isPalindrome = true;
        
        for (int i = 0; i < str.length() / 2; i++) {
            if (str.charAt(i) != str.charAt(str.length() - 1 - i)) {
                isPalindrome = false;
                break;
            }
        }
        
        if (isPalindrome) {
            System.out.println(str + " is a palindrome");
        } else {
            System.out.println(str + " is not a palindrome");
        }
    }
}`
        },
        {
            id: 2,
            title: "Armstrong Number",
            description: "Find Armstrong numbers (153 = 1³ + 5³ + 3³)",
            category: "board",
            year: 2025,
            paper: "specimen",
            tags: ["Number", "Logic"],
            difficulty: "Medium",
            code: `public class Armstrong {
    public static void main(String[] args) {
        int num = 153;
        int sum = 0;
        int temp = num;
        int digits = String.valueOf(num).length();
        
        while (temp > 0) {
            int digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp /= 10;
        }
        
        if (sum == num) {
            System.out.println(num + " is an Armstrong number");
        } else {
            System.out.println(num + " is not an Armstrong number");
        }
    }
}`
        },
        {
            id: 3,
            title: "Fibonacci Series",
            description: "Generate Fibonacci series up to n terms",
            category: "board",
            year: 2024,
            paper: "board",
            tags: ["Series", "Loop"],
            difficulty: "Easy",
            code: `public class Fibonacci {
    public static void main(String[] args) {
        int n = 10;
        int a = 0, b = 1;
        
        System.out.println("Fibonacci Series:");
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            int temp = a + b;
            a = b;
            b = temp;
        }
    }
}`
        }
    ],
    string: [
        {
            id: 101,
            title: "String Reversal",
            description: "Reverse a string without using built-in functions",
            category: "string",
            tags: ["String", "Loop"],
            difficulty: "Easy",
            code: `public class StringReversal {
    public static void main(String[] args) {
        String str = "Hello";
        String reversed = "";
        
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        
        System.out.println("Original: " + str);
        System.out.println("Reversed: " + reversed);
    }
}`
        }
    ],
    array: [
        {
            id: 201,
            title: "Array Sum",
            description: "Calculate sum of all elements in an array",
            category: "array",
            tags: ["Array", "Loop"],
            difficulty: "Easy",
            code: `public class ArraySum {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int sum = 0;
        
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        
        System.out.println("Sum: " + sum);
    }
}`
        }
    ],
    constructor: [],
    method: [],
    special: [],
    pattern: [],
    loop: []
};
