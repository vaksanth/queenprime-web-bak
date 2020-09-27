import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showOtp:any=false;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  navigateTopage(page){
    this.router.navigate([page]);
  }

  openModal(template: TemplateRef<any>) {
    this.showOtp=false;
    this.modalRef = this.modalService.show(template);
  }

  openTemplateOtp(){
    this.showOtp=true;
  }

  close(){
    this.modalRef.hide();
  }

}
