export const idlFactory = ({ IDL }) => {
  const Car = IDL.Record({
    'id' : IDL.Nat,
    'model' : IDL.Text,
    'make' : IDL.Text,
    'year' : IDL.Nat,
    'isTrophy' : IDL.Bool,
    'price' : IDL.Float64,
  });
  return IDL.Service({
    'addCar' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Nat, IDL.Float64, IDL.Bool],
        [],
        [],
      ),
    'getAllCars' : IDL.Func([], [IDL.Vec(Car)], ['query']),
    'getTrophyCars' : IDL.Func([], [IDL.Vec(Car)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
