import Bool "mo:base/Bool";
import Char "mo:base/Char";
import Float "mo:base/Float";
import Func "mo:base/Func";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

import Array "mo:base/Array";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";

actor {
  // Define the Car type
  public type Car = {
    id: Nat;
    make: Text;
    model: Text;
    year: Nat;
    price: Float;
    isTrophy: Bool;
  };

  // Stable variable to store cars
  stable var cars: [Car] = [
    { id = 1; make = "Ford"; model = "Mustang"; year = 1967; price = 75000.00; isTrophy = true },
    { id = 2; make = "Chevrolet"; model = "Corvette"; year = 1963; price = 120000.00; isTrophy = true },
    { id = 3; make = "Porsche"; model = "911"; year = 1973; price = 150000.00; isTrophy = true },
    { id = 4; make = "Dodge"; model = "Charger"; year = 1969; price = 65000.00; isTrophy = false },
    { id = 5; make = "Ferrari"; model = "Testarossa"; year = 1984; price = 200000.00; isTrophy = false }
  ];

  // Function to get trophy cars
  public query func getTrophyCars() : async [Car] {
    Array.filter(cars, func (car: Car) : Bool { car.isTrophy })
  };

  // Function to get all cars for sale
  public query func getAllCars() : async [Car] {
    cars
  };

  // Function to add a new car
  public func addCar(make: Text, model: Text, year: Nat, price: Float, isTrophy: Bool) : async () {
    let newId = cars.size() + 1;
    let newCar: Car = {
      id = newId;
      make = make;
      model = model;
      year = year;
      price = price;
      isTrophy = isTrophy;
    };
    cars := Array.append(cars, [newCar]);
    Debug.print("New car added: " # debug_show(newCar));
  };
}
