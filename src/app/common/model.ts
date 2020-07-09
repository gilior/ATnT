
export interface IUser {

  id: number;
  fname: string;
  lname: string;

}



export interface IInfection {
  location: location;
  datetime: string;
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
