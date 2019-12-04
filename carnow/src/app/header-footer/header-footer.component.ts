import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iregisterlogin } from './../Iregisterlogin';
import { RegisterloginService } from './../registerlogin.service';
import { NotifierService } from 'angular-notifier';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent implements OnInit {

  registerForm : FormGroup;
  loginForm : FormGroup;
  private readonly notifier: NotifierService;
  user_login: boolean = false; 
  seller: boolean = false; 
  name: string = ''; 

  constructor(private rf: FormBuilder,
        private lf: FormBuilder,
        private router: Router,
        private register_login_service : RegisterloginService,
        private notifierService: NotifierService,
        private cookieService: CookieService,) { 
          this.notifier = notifierService;
          if(this.cookieService.get('token') !=''){
              this.user_login = true;
              this.name = this.cookieService.get('name');
              this.seller = (this.cookieService.get('user_type') == 'seller')?true:false;
          }
      }

  ngOnInit() {
    this.registerForm = this.rf.group({
      user_type: ['',[Validators.required]],
      name: ['',[Validators.required]],
      email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      mobile: ['',Validators.compose([Validators.required,Validators.pattern('[1-9]{1}[0-9]{9}')])],
      password: ['',[Validators.required]],
      cpassword: ['',[Validators.required]],
    });

    this.loginForm = this.lf.group({
      user_type: ['',[Validators.required]],
      email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['',[Validators.required]],
    });

  }

  onSubmit(){
    if(this.registerForm.get('user_type').value == ''){
      this.notifier.notify( 'danger', "Select User Type" );
      return false;
    }
    if(this.registerForm.get('password').value != this.registerForm.get('cpassword').value){
      this.notifier.notify( 'danger', "Password and confirm password should be the same" );
      return false;
    }
    this.register_login_service.addUser(this.registerForm.value)
      .subscribe( data => {
        console.log(data.status);
        if(data.status == '1'){
           this.notifier.notify( 'success', data.message );
        }else{
          this.notifier.notify( 'danger', data.message );
        }
    });
  }

  onLoginSubmit(){
    if(this.loginForm.get('user_type').value == ''){
      this.notifier.notify( 'danger', "Select User Type" );
      return false;
    }
    
    this.register_login_service.login(this.loginForm.value)
      .subscribe( data => {
        // console.log(data.status);
        if(data.status == '1'){
           this.notifier.notify( 'success', 'Login Successfull' );
           this.cookieService.set( 'name', data.data[0]['name'],0.25);
           this.cookieService.set( 'user_type', data.data[0]['user_type'],0.25);
           this.cookieService.set( 'token', data.data[1]['token'],0.25);
           this.router.navigate(['./']);
        }else{
          this.notifier.notify( 'danger', data.message );
        }
    });
  }

  myModal88(action){
  	if(action == 'close'){
  		document.getElementById('myModal88').style.display = 'none';
  	}else{
  		document.getElementById('myModal88').style.display = 'block';
  	}
  }

  login_signup_tab_control(tabName){
  	if(tabName == 'signup'){
  		document.getElementById('resp-tab-content-2').style.display = 'block';
  		document.getElementById('resp-tab-content-1').style.display = 'none';
  	}else if(tabName == 'signin'){
  		document.getElementById('resp-tab-content-1').style.display = 'block';
  		document.getElementById('resp-tab-content-2').style.display = 'none';
  	}
  }
}
