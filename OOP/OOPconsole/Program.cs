using System;

namespace practiceoopconsole
{

   public class Object1 {

       //Encapsulation
        private int number;
        public int InsertNumber
        {
            get { return number; }
            set { number = value; }
        }

        //Abstraction
        private void DefiniteIntegralCal (){
        //..............................
        //..............................          
        }
    }

         //Inheritance
    public class Object2 : Object1{

        private string name;
        public string Name
        {
            get { return name; }
            set { name = value; }
        }

    }

    public class Sum {

        //Polymorphism
        public int Add(int a, int b){
            return a+b;
        }

        public double Add(double a, double b){
            return a+b;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            
            Object1 object1 = new Object1();
            object1.InsertNumber = 8;          

            Object2 object2 = new Object2();
            object2.Name = "Tendencias";

            Sum sum = new Sum();
            sum.Add(5.76, 6);
        }
    }
}