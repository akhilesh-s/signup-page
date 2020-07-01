export class User {
	firstName: string;
	lastName: string;
    id: number;
   userName: string;
   dob: string;
   
	password: { 
	  pwd: string;
	  confirmPwd: string;
	};
	country: string;
	terms: boolean;

	constructor(values: Object = {}) {

      Object.assign(this, values);
  }

}
