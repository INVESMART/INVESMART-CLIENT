import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../../model/user/user";


@Injectable()
export class UserService
{
    constructor(private http: HttpClient) { }

    login(userName: String, password: String): Boolean {
      // REST TO BACKEND...
      /*- MOCK OF BAKCEND RESPONSE -*/
        console.log('Logging in...');
        console.log(userName);
        console.log(password);
        localStorage.setItem('logedUser', JSON.stringify(new User('Maximiliano', 'Battafarano', 'B045855', new Date(1992, 11, 16, 0, 0, 0, 0))));
        return true;
    }

    logout(): Boolean {
        localStorage.removeItem('logedUser');
        return true;
    }

    getLoggedUser(): User {
        return JSON.parse(localStorage.getItem('logedUser'));
    }

}
