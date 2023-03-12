import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:7145/api/auth';
  constructor(private httpClientService:HttpClient
    ) { }


  login(loginmodel:LoginModel){
    return this.httpClientService.post<SingleResponseModel<TokenModel>>(
      this.apiUrl+"/login",loginmodel)

  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
