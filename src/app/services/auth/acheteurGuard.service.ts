import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';

import { UserHelper } from 'src/app/shared/helpers/user';

@Injectable({
  providedIn: 'root'
})
export class AcheteurGuardService implements CanActivate {
  constructor(private router: Router) { }

  public canActivate(): boolean {
    if (!UserHelper.isConnect()) {
      this.router.navigateByUrl('/home');
      return false;
    }else{
      /**
      if(UserHelper.getUser()?.user.profil_terminer==false){
        this.router.navigateByUrl('/terminer-profil');
        //return true;
      }*/
      return true;
    }
  }

}
