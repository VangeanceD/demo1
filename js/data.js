export const programsData = {
    board: [
        // 2025 BOARD PAPERS
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
            title: "Cab Service - Distance Billing",
            description: "Calculate cab fare based on AC/Non-AC and distance",
            category: "board",
            year: 2025,
            paper: "board",
            tags: ["Class", "Calculation", "Conditional"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class CabService{
    String carType;
    double km;
    double bill;
    public CabService(){
        carType = "";
        km = 0.0;
        bill = 0.0;
    }
    public void accept(){
        Scanner in = new Scanner(System.in);
        System.out.print("Car type (AC/NON): ");
        carType = in.nextLine().toUpperCase();
        System.out.print("Distance travelled: ");
        km = Double.parseDouble(in.nextLine());
    }
    public void calculate(){
        if(km <= 5){
            if(carType.startsWith("AC"))
                bill = 150.0;
            else
                bill = 120.0;
        }
        else{
            if(carType.startsWith("AC"))
                bill = 150.0 + (km - 5) * 10;
            else
                bill = 120.0 + (km - 5) * 8;
        }
    }
    public void display(){
        System.out.println("Car Type: " + carType);
        System.out.println("Distance: " + km);
        System.out.println("Bill: " + bill);
    }
    public static void main(String[] args){
        CabService obj = new CabService();
        obj.accept();
        obj.calculate();
        obj.display();
    }
}`
        },
        {
            id: 3,
            title: "Method Overloading - Print Methods",
            description: "Print pattern, calculate sum, and compare ASCII values",
            category: "board",
            year: 2025,
            paper: "board",
            tags: ["Overloading", "Method", "Pattern"],
            difficulty: "Hard",
            code: `class Overload{
    public void print(){
        for(int i = 0; i < 4; i++){
            char ch = '@';
            for(int j = 0; j < 5; j++){
                System.out.print(ch);
                ch = (ch == '@') ? '#' : '@';
            }
            System.out.println();
        }
    }
    public double print(double a, double b){
        double sum = 0.0;
        for(double i = a; i <= b; i += 0.5)
            sum += i;
        return sum;
    }
    public int print(char ch1, char ch2){
        return (ch1 > ch2) ? (int)ch1 : (int)ch2;
    }
}`
        },
        // 2025 SPECIMEN PAPERS
        {
            id: 4,
            title: "Bank Interest Calculator",
            description: "Calculate compound interest with tiered interest rates",
            category: "board",
            year: 2025,
            paper: "specimen",
            tags: ["Class", "Interest", "Calculation"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class Bank{
    double p, n, r, a;
    public void accept(){
        Scanner in = new Scanner(System.in);
        System.out.print("Principal: ");
        p = Double.parseDouble(in.nextLine());
        System.out.print("Time period (years): ");
        n = Double.parseDouble(in.nextLine());
    }
    public void calculate(){
        if(n <= 0.5) r = 9.0;
        else if(n <= 1.0) r = 10.0;
        else if(n <= 3.0) r = 11.0;
        else r = 12.0;
        a = p * Math.pow(1 + r/100, n);
    }
    public void display(){
        System.out.println("Principal: " + p);
        System.out.println("Time: " + n + " years");
        System.out.println("Rate: " + r + "%");
        System.out.println("Amount: " + a);
    }
    public static void main(String[] args){
        Bank obj = new Bank();
        obj.accept();
        obj.calculate();
        obj.display();
    }
}`
        },
        {
            id: 5,
            title: "Eshop - Discount Calculator",
            description: "Calculate net amount after tiered discount on price",
            category: "board",
            year: 2024,
            paper: "board",
            tags: ["Class", "Discount", "Calculation"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class Eshop{
    String name;
    double price;
    public void accept(){
        Scanner in = new Scanner(System.in);
        System.out.print("Item: ");
        name = in.nextLine();
        System.out.print("Price: ");
        price = Double.parseDouble(in.nextLine());
    }
    public void calculate(){
        double dp = 0.0;
        if(price >= 1000 && price <= 25000) dp = 5.0;
        else if(price > 25000 && price <= 57000) dp = 7.5;
        else if(price > 57000 && price <= 100000) dp = 10.0;
        else if(price > 100000) dp = 15.0;
        double discount = dp / 100 * price;
        price -= discount;
    }
    public void display(){
        System.out.println("Item: " + name);
        System.out.println("Net bill: " + price);
    }
    public static void main(String[] args){
        Eshop obj = new Eshop();
        obj.accept();
        obj.calculate();
        obj.display();
    }
}`
        },
        {
            id: 6,
            title: "Student Stream Allocation",
            description: "Allocate stream based on marks - Science/Commerce/Arts",
            category: "board",
            year: 2023,
            paper: "board",
            tags: ["Class", "Conditional", "Method"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class Student{
    String name;
    int age, mks;
    String stream;
    public void accept(){
        Scanner in = new Scanner(System.in);
        System.out.print("Name: ");
        name = in.nextLine();
        System.out.print("Age: ");
        age = Integer.parseInt(in.nextLine());
        System.out.print("Marks: ");
        mks = Integer.parseInt(in.nextLine());
    }
    public void allocation(){
        if(mks >= 300) stream = "Science and Computer";
        else if(mks >= 200) stream = "Commerce and Computer";
        else if(mks >= 75) stream = "Arts and Animation";
        else stream = "Try again";
    }
    public void print(){
        System.out.println("Name: " + name);
        System.out.println("Stream: " + stream);
    }
    public static void main(String[] args){
        Student obj = new Student();
        obj.accept();
        obj.allocation();
        obj.print();
    }
}`
        },
        {
            id: 7,
            title: "Hotel - GST & Service Tax Calculator",
            description: "Calculate total bill with GST (18%) and service tax (12.5%)",
            category: "board",
            year: 2021,
            paper: "board",
            tags: ["Class", "Calculation", "Tax"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class Hotel{
    String name;
    long mno;
    double bill, gst, st, tamt;
    public void accept(){
        Scanner in = new Scanner(System.in);
        System.out.print("Name: ");
        name = in.nextLine();
        System.out.print("Mobile: ");
        mno = Long.parseLong(in.nextLine());
        System.out.print("Bill: ");
        bill = Double.parseDouble(in.nextLine());
    }
    public void calculate(){
        gst = 18.0 / 100 * bill;
        st = 12.5 / 100 * bill;
        tamt = bill + gst + st;
    }
    public void display(){
        System.out.println("Customer: " + name);
        System.out.println("Total Amount: " + tamt);
    }
    public static void main(String[] args){
        Hotel obj = new Hotel();
        obj.accept();
        obj.calculate();
        obj.display();
    }
}`
        },
        {
            id: 8,
            title: "ShowRoom - Tiered Discount",
            description: "Calculate discount on shopping based on cost ranges",
            category: "board",
            year: 2019,
            paper: "board",
            tags: ["Class", "Discount", "Calculation"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class ShowRoom{
    String name;
    long mobNo;
    double cost, dis, amount;
    public ShowRoom(){
        name = "";
        mobNo = 0;
        cost = 0.0;
        dis = 0.0;
        amount = 0.0;
    }
    public void input(){
        Scanner in = new Scanner(System.in);
        System.out.print("Name: ");
        name = in.nextLine();
        System.out.print("Mobile: ");
        mobNo = Long.parseLong(in.nextLine());
        System.out.print("Cost: ");
        cost = Double.parseDouble(in.nextLine());
    }
    public void calculate(){
        if(cost <= 10000) dis = 5.0;
        else if(cost <= 20000) dis = 10.0;
        else if(cost <= 35000) dis = 15.0;
        else dis = 20.0;
        dis = dis / 100 * cost;
        amount = cost - dis;
    }
    public void display(){
        System.out.println("Name: " + name);
        System.out.println("Amount: " + amount);
    }
    public static void main(String[] args){
        ShowRoom obj = new ShowRoom();
        obj.input();
        obj.calculate();
        obj.display();
    }
}`
        },
        {
            id: 9,
            title: "Railway Ticket - Coach-based Pricing",
            description: "Calculate ticket fare with extra charges for AC coaches",
            category: "board",
            year: 2018,
            paper: "board",
            tags: ["Class", "Calculation", "Conditional"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class RailwayTicket{
    String name, coach;
    long mobNo;
    int amt, totalAmt;
    public void accept(){
        Scanner in = new Scanner(System.in);
        System.out.print("Name: ");
        name = in.nextLine();
        System.out.print("Coach: ");
        coach = in.nextLine();
        System.out.print("Mobile: ");
        mobNo = Long.parseLong(in.nextLine());
        System.out.print("Amount: ");
        amt = Integer.parseInt(in.nextLine());
    }
    public void update(){
        if(coach.equalsIgnoreCase("First_AC"))
            totalAmt = amt + 700;
        else if(coach.equalsIgnoreCase("Second_AC"))
            totalAmt = amt + 500;
        else if(coach.equalsIgnoreCase("Third_AC"))
            totalAmt = amt + 250;
        else
            totalAmt = amt;
    }
    public void display(){
        System.out.println("Name: " + name);
        System.out.println("Total Amount: " + totalAmt);
    }
    public static void main(String[] args){
        RailwayTicket obj = new RailwayTicket();
        obj.accept();
        obj.update();
        obj.display();
    }
}`
        },
        {
            id: 10,
            title: "Electric Bill - Unit-based Tariff",
            description: "Calculate bill with tiered rates and surcharge for high usage",
            category: "board",
            year: 2017,
            paper: "board",
            tags: ["Class", "Calculation", "Conditional"],
            difficulty: "Medium",
            code: `import java.util.Scanner;
class ElectricBill{
    String n;
    int units;
    double bill;
    public void accept(){
        Scanner in = new Scanner(System.in);
        System.out.print("Name: ");
        n = in.nextLine();
        System.out.print("Units: ");
        units = Integer.parseInt(in.nextLine());
    }
    public void calculate(){
        if(units <= 100)
            bill = units * 2.0;
        else if(units <= 300)
            bill = 200 + (units - 100) * 3.0;
        else{
            bill = 800 + (units - 300) * 5.0;
            bill += 2.5 / 100 * bill;
        }
    }
    public void print(){
        System.out.println("Name: " + n);
        System.out.println("Units: " + units);
        System.out.println("Bill: " + bill);
    }
    public static void main(String[] args){
        ElectricBill obj = new ElectricBill();
        obj.accept();
        obj.calculate();
        obj.print();
    }
}`
        },
        {
            id: 11,
            title: "Book Fair - Discount by Price Range",
            description: "Calculate book price with progressive discount",
            category: "board",
            year: 2016,
            paper: "board",
            tags: ["Class", "Discount", "Calculation"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class BookFair{
    String bName;
    double price;
    public BookFair(){
        bName = "";
        price = 0.0;
    }
    public void input(){
        Scanner in = new Scanner(System.in);
        System.out.print("Book name: ");
        bName = in.nextLine();
        System.out.print("Price: ");
        price = Double.parseDouble(in.nextLine());
    }
    public void calculate(){
        if(price <= 1000)
            price -= 2.0 / 100 * price;
        else if(price <= 3000)
            price -= 10.0 / 100 * price;
        else
            price -= 15.0 / 100 * price;
    }
    public void display(){
        System.out.println("Book: " + bName);
        System.out.println("Price after discount: " + price);
    }
    public static void main(String[] args){
        BookFair obj = new BookFair();
        obj.input();
        obj.calculate();
        obj.display();
    }
}`
        },
        {
            id: 12,
            title: "Parking Lot - Hourly Billing",
            description: "Calculate parking charges - 3 rupees 1st hour, 1.50 each additional",
            category: "board",
            year: 2015,
            paper: "board",
            tags: ["Class", "Calculation", "Conditional"],
            difficulty: "Easy",
            code: `import java.util.Scanner;
class ParkingLot{
    int vno, hours;
    double bill;
    public void input(){
        Scanner in = new Scanner(System.in);
        System.out.print("Vehicle No: ");
        vno = Integer.parseInt(in.nextLine());
        System.out.print("Hours: ");
        hours = Integer.parseInt(in.nextLine());
    }
    public void calculate(){
        if(hours == 1)
            bill = 3.0;
        else
            bill = 3.0 + (hours - 1) * 1.50;
    }
    public void display(){
        System.out.println("Vehicle No: " + vno);
        System.out.println("Hours: " + hours);
        System.out.println("Bill: Rs. " + bill);
    }
    public static void main(String[] args){
        ParkingLot obj = new ParkingLot();
        obj.input();
        obj.calculate();
        obj.display();
    }
}`
        },
        {
            id: 13,
            title: "Courier - Weight-based Billing",
            description: "Calculate courier charges with weight tiers and international surcharge",
            category: "board",
            year: 2020,
            paper: "board",
            tags: ["Class", "Calculation", "Conditional"],
            difficulty: "Medium",
            code: `import java.util.Scanner;
class Courier{
    String name;
    double weight;
    String address;
    double bill;
    char type;
    public void accept(){
        Scanner in = new Scanner(System.in);
        System.out.print("Name: ");
        name = in.nextLine();
        System.out.print("Weight (kg): ");
        weight = Double.parseDouble(in.nextLine());
        System.out.print("Address: ");
        address = in.nextLine();
        System.out.print("Type (D/I): ");
        type = in.nextLine().charAt(0);
    }
    public void calculate(){
        if(weight <= 5)
            bill = weight * 800;
        else if(weight <= 10)
            bill = 4000 + (weight - 5) * 700;
        else
            bill = 7500 + (weight - 10) * 500;
        if(type == 'I' || type == 'i')
            bill += 1500;
    }
    public void print(){
        System.out.println("Name: " + name);
        System.out.println("Bill: " + bill);
    }
    public static void main(String[] args){
        Courier obj = new Courier();
        obj.accept();
        obj.calculate();
        obj.print();
    }
}`
        }
    ]
};
