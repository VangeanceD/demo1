export const programsData = {
    board: [
        {
            id: 1,
            title: "Cloud Storage Billing System",
            description: "Calculate bill based on storage purchased using tiered pricing",
            category: "board",
            year: 2025,
            paper: "board",
            tags: ["Class", "Method", "Calculation"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class CloudStorage{
    int acno;
    int space;
    double bill;
    public void accept(){
        Scanner in = new Scanner(System.in);
        System.out.print("Account number: ");
        acno = Integer.parseInt(in.nextLine());
        System.out.print("Space: ");
        space = Integer.parseInt(in.nextLine());
    }
    public void calculate(){
        if(space <= 15)
            bill = space * 15;
        else if(space <= 30)
            bill = 225 + (space - 15) * 13;
        else
            bill = 420 + (space - 30) * 11;
    }
    public void display(){
        System.out.println("Account No. " + acno);
        System.out.println("Storage space: " + space);
        System.out.println("Bill: " + bill);
    }
    public static void main(String[] args){
        CloudStorage obj = new CloudStorage();
        obj.accept();
        obj.calculate();
        obj.display();
    }
}`
        },
        {
            id: 2,
            title: "Array NORM Calculation",
            description: "Calculate NORM of a 4x4 matrix (sqrt of sum of squares)",
            category: "board",
            year: 2025,
            paper: "board",
            tags: ["Array", "2D Array", "Math"],
            difficulty: "Medium",
            code: `import java.util.Scanner;
class Norm{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        int a[][] = new int[4][4];
        int sum = 0;
        System.out.println("Enter array elements:");
        for(int i = 0; i < 4; i++){
            for(int j = 0; j < 4; j++){
                a[i][j] = Integer.parseInt(in.nextLine());
                sum += a[i][j] * a[i][j];
            }
        }
        double root = Math.sqrt(sum);
        System.out.println("NORM = " + root);
    }
}`
        },
        {
            id: 3,
            title: "Super String Check",
            description: "Check if uppercase letters equal lowercase letters",
            category: "board",
            year: 2025,
            paper: "board",
            tags: ["String", "Character", "Logic"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class SuperString{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String s = in.nextLine();
        int upper = 0;
        int lower = 0;
        for(int i = 0; i < s.length(); i++){
            char ch = s.charAt(i);
            if(Character.isUpperCase(ch))
                upper++;
            else if(Character.isLowerCase(ch))
                lower++;
        }
        if(upper == lower)
            System.out.println("String is a Super String");
        else
            System.out.println("String is not a Super String");
    }
}`
        },
        {
            id: 4,
            title: "Binary Search on Character Array",
            description: "Search for a character in a sorted array using binary search",
            category: "board",
            year: 2025,
            paper: "board",
            tags: ["Search", "Array", "Binary Search"],
            difficulty: "Medium",
            code: `import java.util.Scanner;
class Search{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        char a[] = {'A', 'H', 'N', 'P', 'S', 'U', 'W', 'Y', 'Z', 'b', 'd'};
        System.out.print("Character to be searched: ");
        char key = in.nextLine().charAt(0);
        int low = 0;
        int high = a.length - 1;
        int mid = 0;
        while(low <= high){
            mid = (low + high) / 2;
            if(key == a[mid])
                break;
            else if(key < a[mid])
                high = mid - 1;
            else
                low = mid + 1;
        }
        if(low > high)
            System.out.println("Search is not successful");
        else
            System.out.println("Search is successful");
    }
}`
        },
        {
            id: 5,
            title: "Method Overloading",
            description: "Overload print() method - pattern, sum, and ASCII comparison",
            category: "board",
            year: 2025,
            paper: "board",
            tags: ["Method", "Overloading", "Pattern"],
            difficulty: "Hard",
            code: `class Overload{
    public void print(){
        for(int i = 0; i < 4; i++){
            char ch = '@';
            for(int j = 0; j < 5; j++){
                System.out.print(ch);
                if(ch == '@')
                    ch = '#';
                else
                    ch = '@';
            }
            System.out.println();
        }
    }
    public double print(double a, double b){
        double sum = 0.0;
        for(double i = a; i <= b; i += 0.5)
            sum += i;
        System.out.println("Sum = " + sum);
        return sum;
    }
    public int print(char ch1, char ch2){
        if(ch1 > ch2)
            return (int)ch1;
        return (int)ch2;
    }
}`
        },
        {
            id: 6,
            title: "Largest and Smallest Digit Sum",
            description: "Check if sum of largest and smallest digit is even or odd",
            category: "board",
            year: 2025,
            paper: "board",
            tags: ["Number", "Logic"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class Find{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = Integer.parseInt(in.nextLine());
        int sum = 0;
        int smallest = num % 10;
        int largest = num % 10;
        for(int i = num; i != 0; i /= 10){
            int digit = i % 10;
            if(smallest > digit)
                smallest = digit;
            if(largest < digit)
                largest = digit;
        }
        sum = smallest + largest;
        if(sum % 2 == 0)
            System.out.println("Sum is even");
        else
            System.out.println("Sum is odd");
    }
}`
        },
        {
            id: 7,
            title: "Bank Interest Calculator",
            description: "Calculate compound interest with tiered interest rates",
            category: "board",
            year: 2025,
            paper: "specimen",
            tags: ["Class", "Method", "Interest"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class Bank{
    double p;
    double n;
    double r;
    double a;
    public void accept(){
        Scanner in = new Scanner(System.in);
        System.out.print("Principal amount: ");
        p = Double.parseDouble(in.nextLine());
        System.out.print("Time period in years: ");
        n = Double.parseDouble(in.nextLine());
    }
    public void calculate(){
        if(n <= 0.5)
            r = 9.0;
        else if(n <= 1.0)
            r = 10.0;
        else if(n <= 3.0)
            r = 11.0;
        else
            r = 12.0;
        a = p * Math.pow(1 + r / 100, n);
    }
    public void display(){
        System.out.println("Principal\\tTime\\tRate\\tAmount");
        System.out.println(p + "\\t\\t" + n + "\\t" + r + "\\t" + a);
    }
    public static void main(String[] args) {
        Bank obj = new Bank();
        obj.accept();
        obj.calculate();
        obj.display();
    }
}`
        },
        {
            id: 8,
            title: "Binary Search on Double Array",
            description: "Search for a double value in a sorted array",
            category: "board",
            year: 2025,
            paper: "specimen",
            tags: ["Search", "Array", "Binary Search"],
            difficulty: "Medium",
            code: `import java.util.Scanner;
class Search{
    public static void main(String args[]){
        Scanner in = new Scanner(System.in);
        double a[] = {5.6, 11.5, 20.8, 35.4, 43.1, 52.4, 66.6, 78.9, 80.0, 95.5};
        System.out.print("Element to be searched: ");
        double key = Double.parseDouble(in.nextLine());
        int low = 0;
        int high = a.length - 1;
        int mid = 0;
        while(low <= high){
            mid = (low + high) / 2;
            if(key == a[mid])
                break;
            else if(key < a[mid])
                high = mid - 1;
            else
                low = mid + 1;
        }
        if(low > high)
            System.out.println("Search element not found");
        else
            System.out.println("Search successful");
    }
}`
        },
        {
            id: 9,
            title: "String Character Transformation",
            description: "Convert vowels to next char, consonants to previous char",
            category: "board",
            year: 2025,
            paper: "specimen",
            tags: ["String", "Character", "Transformation"],
            difficulty: "Medium",
            code: `import java.util.Scanner;
class Change{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String s = in.nextLine().toUpperCase();
        String t = "";
        for(int i = 0; i < s.length(); i++){
            char ch = s.charAt(i);
            if(Character.isLetter(ch)){
                if("AEIOU".indexOf(ch) >= 0)
                    t += (char)(ch + 1);
                else
                    t += (char)(ch - 1);
            }
            else
                t += ch;
        }
        System.out.println(t);
    }
}`
        },
        {
            id: 10,
            title: "Matrix Row Sum",
            description: "Calculate and display the sum of each row in a 4x4 matrix",
            category: "board",
            year: 2025,
            paper: "specimen",
            tags: ["Array", "2D Array", "Sum"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class Matrix{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        int a[][] = new int[4][4];
        System.out.println("Enter matrix elements:");
        for(int i = 0; i < a.length; i++){
            for(int j = 0; j < a.length; j++){
                a[i][j] = Integer.parseInt(in.nextLine());
            }
        }
        System.out.println("Original Matrix:");
        for(int i = 0; i < a.length; i++){
            for(int j = 0; j < a.length; j++){
                System.out.print(a[i][j] + "\\t");
            }
            System.out.println();
        }
        for(int i = 0; i < a.length; i++){
            int sum = 0;
            for(int j = 0; j < a.length; j++){
                sum += a[i][j];
            }
            System.out.println("sum of row " + (i + 1) + " = " + sum);
        }
    }
}`
        },
        {
            id: 11,
            title: "SuperSpy Number Check",
            description: "Check if sum of digits equals the number of digits",
            category: "board",
            year: 2025,
            paper: "specimen",
            tags: ["Number", "Logic"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class SuperSpy{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = Integer.parseInt(in.nextLine());
        int sum = 0;
        int count = 0;
        for(int i = num; i != 0; i /= 10){
            count++;
            sum += i % 10;
        }
        if(sum == count)
            System.out.println(num + " is a superspy number!");
        else
            System.out.println(num + " is not a superspy number.");
    }
}`
        },
        {
            id: 12,
            title: "Method Overloading - Advanced",
            description: "Overload display() - pattern, quotient/sum, and calculation",
            category: "board",
            year: 2025,
            paper: "specimen",
            tags: ["Method", "Overloading", "Calculation"],
            difficulty: "Hard",
            code: `class Overload{
    public static void display(){
        for(int i = 1; i <= 3; i++){
            int value = 1;
            for(int j = 1; j <= 5; j++){
                System.out.print(value + " ");
                if(value == 1)
                    value = 2;
                else
                    value = 1;
            }
            System.out.println();
        }
    }
    public static void display(int n, int m){
        if(m > n){
            int q = m / n;
            System.out.println("Quotient = " + q);
        }
        else{
            int sum = 2 * n + 3 * m;
            System.out.println("Sum = " + sum);
        }
    }
    public static double display(double a, double b, double c){
        double p = (a + b) / c;
        double q = a + b + c;
        double z = p * q;
        System.out.println("z = " + z);
        return z;
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
