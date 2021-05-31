import {Person} from './person';

export class RegisterRequest {
  emailAddress: string;
  userName: string;
  userPassword: string;
  person: Person;
}
