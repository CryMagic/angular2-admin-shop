import { Component, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'admin-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements AfterViewInit{
    ngAfterViewInit(){
        $(".page-topbar .message-toggle-wrapper").addClass("showopacity");
        $(".page-topbar .notify-toggle-wrapper").addClass("showopacity");
        $(".page-topbar .searchform").addClass("showopacity");
        $(".page-topbar li.profile").addClass("showopacity");
    }
}