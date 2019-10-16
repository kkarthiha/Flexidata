import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import {DynamicDialogRef} from 'primeng/api';
import {DynamicDialogConfig} from 'primeng/api';
import { dealdetails } from 'src/Datamodel/Dealdeatails.component';
import {MessageService} from 'primeng/api';
import { GridComponent } from 'src/app/grid/grid.component';
import {SelectItem} from 'primeng/api';
import{filterdetails} from 'src/Datamodel/FilterDetails.components';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { ArrayDataSource } from '@angular/cdk/collections';





@Component({
  selector: 'app-popupdeatils',
  templateUrl: './popupdeatils.component.html',
  styleUrls: ['./popupdeatils.component.css'],
  providers: [MessageService]
})
export class PopupdeatilsComponent implements OnInit {

  DealsColumns: dealdetails;
  Deal:GridComponent;
  deals:any[]=[];
  dealids:filterdetails[]=[];
  dealnames:filterdetails[]=[];
  frequency:filterdetails[]=[];
  type:filterdetails[]=[];
  status:filterdetails[]=[];

  selecteddealname:any[]=[];
  selectedfrequency:any[]=[];
  selectedtype:any[]=[];
  selectedstatus:any[]=[];

  
  selecteddeals: any[]=[];
  filterdeals: any[]=[];

  
  FilterData :dealdetails[];
  
  @Output() messageEvent = new EventEmitter<string[]>();

  //public ref: DynamicDialogRef, public config: DynamicDialogConfig 
            
    constructor(public ref: DynamicDialogRef,public config: DynamicDialogConfig ,private messageService: MessageService) { 
        //debugger;
        this.deals =config.data.id;
       this.filterdeals = config.data.saved;
       this.selecteddeals=[];
        this.Collectdata();
        if(this.filterdeals)
                this.filterdeals.forEach(element => {
            this.SearchFilter(element.label,element.value)
          });
    }


    SearchFilter(field:string,value:string){
       // debugger;
        switch (field) {
          case "dealid":
          if(value!="")
          {
            this.selecteddeals.push({label:'dealid',value:value});
        //   this.dealids=[];
        //   this.selecteddeals.forEach(element => {
        //     this.dealids(element.label.toLocaleLowerCase().match(field))
        //   });

         //this.dealids.push(this.selecteddeals);
        }
          else if(value=="")
            this.ngOnInit();
         break;
         
          case "dealname":
          if(value!="")
            {
              
                this.selecteddealname.push({label:'dealname',value:value});
            }
      
            else if(value=="")
              this.ngOnInit();
           break;
      
           case "frequency":
          if(value!="")
            {
                this.selectedfrequency.push({label:'frequency',value:value});}
      
            else if(value=="")
              this.ngOnInit();
           break;
      
           case "type":
          if(value!="")
            {
                this.selectedtype.push({label:'type',value:value});}
            else if(value=="")
              this.ngOnInit();
           break;

           case "status":
          if(value!="")
            {
                this.selectedstatus.push({label:'status',value:value});}
      
            else if(value=="")
              this.ngOnInit();
           break;
           
          default:
         
              }
                // this.Filterdeals.forEach(a=>{
                // this.CumFilterdeals.push(a);
                // } 
                // );
            }


            
     Collectdata()
     {
        debugger;

        // var arrayCompare = require("array-compare")
        // var index = require('indexof');
        this.deals.forEach(a=>{
            debugger;
            // var value  = a.dealid
            // var ab = this.dealids.filter(b=>b.value==a.dealid).length;
            if(this.dealids.filter(b=>b.value==a.dealid).length==0)
            {
              this.dealids.push({label:'dealid',value:a.dealid});
            }
            } 
            );
           

    this.deals.forEach(a=>{
        if(this.dealnames.filter(b=>b.value==a.dealname).length==0)
        {
      this.dealnames.push({label:'dealname',value:a.dealname});
        }
          } 
     );

     this.deals.forEach(a=>{
        if(this.frequency.filter(b=>b.value==a.frequency).length==0)
        {
        this.frequency.push({label:'frequency',value:a.frequency});
        }
            } 
       );

       this.deals.forEach(a=>{
        if(this.type.filter(b=>b.value==a.type).length==0)
        {
        this.type.push({label:'type',value:a.type});
        }
            } 
       );

       this.deals.forEach(a=>{
        if(this.status.filter(b=>b.value==a.status).length==0)
        {
        this.status.push({label:'status',value:a.status});
        }
            } 
       );
     }
    ngOnInit() {
     // debugger;
      this.DealsColumns ={
        dealid : "Deal Id",
        dealname: " Deal Name",
        frequency : "Frequency",
        amethod:"Accounting Method",
        type:"Type",
        status:"Status",
        lastupdated:"Last Updated"
      }


      
  
  

    }

    // selectColumn(DealsColumns: dealdetails) {
    //     this.ref.close(DealsColumns);
    // }

    index: number = -1;
    //FilterData:string[];

    
    sendMessage() {
      //  debugger;
       // this.selecteddeals.push(this.selecteddealname);

    
      
        this.selecteddealname.forEach(a=>{

            this.selecteddeals.push(a);
            } 
            );

        this.selectedfrequency.forEach(a=>{

            this.selecteddeals.push(a);
            } 
            );

                this.selectedtype.forEach(a=>{

                    this.selecteddeals.push(a);
                    } 
                    );

                    this.selectedstatus.forEach(a=>{

                        this.selecteddeals.push(a);
                        } 
                        );

                       

        this.ref.close(this.selecteddeals);
    }

    // sendMessage() {
    //     debugger;
       

    //     this.messageEvent.emit(this.FilterData);
    //   }

    onTabClose(event) {
        this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
    }
    
    onTabOpen(event) {
        this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }
    
    openNext() {
        this.index = (this.index === 3) ? 0 : this.index + 1;
    }
    
    openPrev() {
        this.index = (this.index <= 0) ? 3 : this.index - 1;
    }
  

}
