export interface IUser {
  id: number;
  fname: string;
  lname: string;
}


export interface IInfection {
  id: number;
  location: location;
  datetime: Date;
}


export  type location =
  {
    lon: number;
    lat: number;
  }


export interface IAction {
  type: string;
  payload?: any;
}
