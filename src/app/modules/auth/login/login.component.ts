import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators,} from '@angular/forms';
import { UserHelper } from 'src/app/shared/helpers/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
// import { MessageService } from 'primeng/api'
// import {ParametreService} from "../../../services/other/parametre.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  display: boolean = false;
  userData: any;
  message:any;
  showDialog() {
    this.display = true;
  }
  submitting = false;
  
  loading=false;

  loginForm = this.formBuilder.group({
    login: new FormControl('', [ Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  
  
  constructor(private router: Router,
    private authService: AuthService,
    // private messageService: MessageService,
    private formBuilder: FormBuilder,
    // private parametreService:ParametreService
    ) { }

  ngOnInit() {}

  // login(){}
  login(): void{

    this.submitting = true;
    // todo::call the service request
      this.authService.login({
        email: this.loginForm.value.login,
        password: this.loginForm.value.password
      }).toPromise().then((data: any) => {
        this.submitting = false;
        UserHelper.connect(data);
        
        this.userData = UserHelper.getUser()?.user;
        if(this.userData.email == this.loginForm.value.login){
          this.redirectByRole();
          console.log("propre");
          
        }else{
          this.display = true;
          console.log("ndem");
          
        }
        //
      },
      (res) => {
        this.submitting = false;
        
      });

  }

  redirectByRole(){
    if(this.userData.role == 'acheteur'){
      console.log(UserHelper.getUser());
      this.router.navigate(['acheteur/home']);
    }else{
      this.router.navigate(['vendeur/home']);
    }
// if(UserHelper.getUser()?.user.profil_terminer==false){
//   console.log("oui");
  
// }else {
//   this.router.navigate(['/home']);
// }
  }
}
