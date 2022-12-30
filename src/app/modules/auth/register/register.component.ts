import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserHelper } from 'src/app/shared/helpers/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  display: boolean = false;
  userData: any;
  message:any;
  showDialog() {
    this.display = true;
  }
  submitting = false;
  loading=false;
  registerForm = this.formBuilder.group({
    nom: new FormControl('', [ Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {}


  register() : void{

    this.submitting = true;
    this.display=false;
    // this.userData = UserHelper.getUser()?.user;
    let register={
      nom : this.registerForm.value.nom,
      prenom : this.registerForm.value.prenom,
      numero : ""+this.registerForm.value.numero,
      email : this.registerForm.value.email,
      role : this.registerForm.value.role,
      password : this.registerForm.value.password
    };
    this.submitting = true;
    console.log(register);
    
    
    this.authService.register(register).toPromise().then((data: any) => {
      this.submitting = false;
      console.log(register);
      UserHelper.connect(data);
      this.userData = UserHelper.getUser()?.user;

      if(this.userData.email == this.registerForm.value.email){
        this.redirectByRole();
        console.log("propre");
        
      }else{
        this.display = true;
        console.log("ndem");
        
      }
      // setTimeout(() =>
      //   {
      //     //this.router.navigate(['/auth']);
      //   },
      //   3000);
    },
    (res) => {
      this.submitting = false;
    });

  }

  redirectByRole(){
    if(this. userData.role == 'acheteur'){
      console.log(UserHelper.getUser());
      this.router.navigate(['acheteur/home']);
    }else{
      this.router.navigate(['vendeur/home']);
    }
  }
  
}
