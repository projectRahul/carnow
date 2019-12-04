import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  username : String = '';
  user_type : String = '';
  pageName : string;
  	
  constructor(private router:Router,
        private cookieService: CookieService) {
  		if(this.cookieService.get('token')==''){
	  		this.router.navigate(['./']);
	  	}else{
	  		this.username = this.cookieService.get('name');
	  		this.user_type = this.cookieService.get('user_type');
	      // console.log(this.username);
	  	}
    }

  ngOnInit() {
    let getActivePageName = this.router.url.split("/");
    this.pageName = getActivePageName[getActivePageName.length - 1];
  }

}
