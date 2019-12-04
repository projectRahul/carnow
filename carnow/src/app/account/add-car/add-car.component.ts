import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iaccount } from './../Iaccount';
import { AccountService } from './../account.service';
import { NotifierService } from 'angular-notifier';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  private readonly notifier: NotifierService;
  state_list : any;
  city_list : any;
  get_fuel_type : any;
  get_vehicle_type : any;
  get_make : any;
  get_modal : any;
  filesCount : any;
  urls = [];
  emptyvar;

  addcarForm : FormGroup;

  constructor(private acf: FormBuilder,
  		private router: Router,
        private account_service : AccountService,
        private notifierService: NotifierService,
        private cookieService: CookieService) { 
  			this.notifier = notifierService;
  }

  ngOnInit() {

  	this.account_service.getState(this.emptyvar)
      .subscribe( data => {
        if(data.status == '1'){
           this.state_list = data.data;
        }else{
          // this.notifier.notify( 'danger', data.message );
        }
    });


  	this.account_service.getFuelType(this.emptyvar)
      .subscribe( data => {
        if(data.status == '1'){
           this.get_fuel_type = data.data;
        }else{
          // this.notifier.notify( 'danger', data.message );
        }
    });


  	this.account_service.getVehicleType(this.emptyvar)
      .subscribe( data => {
        if(data.status == '1'){
           this.get_vehicle_type = data.data;
        }else{
          // this.notifier.notify( 'danger', data.message );
        }
    });


  	this.account_service.getMake(this.emptyvar)
      .subscribe( data => {
        if(data.status == '1'){
           this.get_make = data.data;
        }else{
          // this.notifier.notify( 'danger', data.message );
        }
    });



    this.addcarForm = this.acf.group({
      color: ['',[Validators.required]],
      fuel_type: ['',[Validators.required]],
      transmission: ['',[Validators.required]],
      vehicle_type: ['',[Validators.required]],
      registration_date: ['',[Validators.required]],
      ownertype: ['',[Validators.required]],
      maker: ['',[Validators.required]],
      model: ['',[Validators.required]],
      expected_price: ['',[Validators.required]],
      negotiable: ['',[Validators.required]],
      KMS: ['',[Validators.required]],
      engineCC: ['',[Validators.required]],
      mileage: ['',[Validators.required]],
      state: ['',[Validators.required]],
      city: ['',[Validators.required]],
      pincode: ['',[Validators.required]],
      about: ['',[Validators.required]],
      images: ['',[Validators.required]],
    });

  }


  	stateOnChange(stateValue) {
      let x : any = {"state" : stateValue.target.value};
	    this.account_service.getCity(x)
	      .subscribe( data => {
	        if(data.status == '1'){
	           this.city_list = data.data;
	        }else{
	          // this.notifier.notify( 'danger', data.message );
	        }
	    });
	}
 

  	makeOnChange(makeValue) {
      let x : any = {"brand_name" : makeValue.target.value};
	    this.account_service.getModal(x)
	      .subscribe( data => {
	        if(data.status == '1'){
	           this.get_modal = data.data;
	        }else{
	          // this.notifier.notify( 'danger', data.message );
	        }
	    });
	}


	onSelectFile(event) {
	    if (event.target.files && event.target.files[0]) {
	        var filesAmount = event.target.files.length;
	        for (let i = 0; i < filesAmount; i++) {
	                var reader = new FileReader();
	                reader.onload = (event:any) => {
	                   this.urls.push(event.target.result); 
	                }
	                reader.readAsDataURL(event.target.files[i]);
	        }
	        const files = event.target.files;
          this.addcarForm.get('images').setValue(files);
          this.filesCount = event.target.files.length;
	    }
	  }
	removeImage(j){
		this.urls.splice(j, 1);

		// this.file.splice(j,1);
		// console.log(this.file);
	}
	onSubmit(){
		const fd = new FormData();
		fd.append('color', this.addcarForm.get('color').value);
    fd.append('fuel_type', this.addcarForm.get('fuel_type').value);
    fd.append('transmission', this.addcarForm.get('transmission').value);
    fd.append('vehicle_type', this.addcarForm.get('vehicle_type').value);
    fd.append('registration_date', this.addcarForm.get('registration_date').value);
    fd.append('ownertype', this.addcarForm.get('ownertype').value);
    fd.append('maker', this.addcarForm.get('maker').value);
    fd.append('model', this.addcarForm.get('model').value);
    fd.append('expected_price', this.addcarForm.get('expected_price').value);
    fd.append('negotiable', this.addcarForm.get('negotiable').value);
    fd.append('KMS', this.addcarForm.get('KMS').value);
    fd.append('engineCC', this.addcarForm.get('engineCC').value);
    fd.append('mileage', this.addcarForm.get('mileage').value);
    fd.append('state', this.addcarForm.get('state').value);
    fd.append('city', this.addcarForm.get('city').value);
    fd.append('pincode', this.addcarForm.get('pincode').value);
    fd.append('about', this.addcarForm.get('about').value);
    for (var i = 0; i < this.addcarForm.get('images').value.length; i++) {
      fd.append('images', this.addcarForm.get('images').value[i]);
    }
	    this.account_service.addCar(<any>fd)
	      .subscribe( data => {
	        // console.log(data.status);
	        if(data.status == '1'){
	           this.notifier.notify( 'success', data.message );
	        }else{
	          this.notifier.notify( 'danger', data.message );
	        }
	    });
	}

}
