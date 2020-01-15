import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover-more',
  templateUrl: './popover-more.page.html',
  styleUrls: ['./popover-more.page.scss'],
})
export class PopoverMorePage implements OnInit {

  constructor(
    private profileService: ProfileService,
    private popoverController:PopoverController,
    private router:Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.profileService.logout().then(()=>{
      
    });
    this.DismissClick();
  }
  async DismissClick() {
    await this.popoverController.dismiss();
  }

  repayments(){
    this.router.navigateByUrl("fullscreen")
  }

  
}