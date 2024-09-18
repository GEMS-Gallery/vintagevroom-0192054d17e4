import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Car {
  'id' : bigint,
  'model' : string,
  'make' : string,
  'year' : bigint,
  'isTrophy' : boolean,
  'price' : number,
}
export interface _SERVICE {
  'addCar' : ActorMethod<[string, string, bigint, number, boolean], undefined>,
  'getAllCars' : ActorMethod<[], Array<Car>>,
  'getTrophyCars' : ActorMethod<[], Array<Car>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
