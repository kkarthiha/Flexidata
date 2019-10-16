import { Component, OnInit,ViewChild, AfterViewInit  } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import { dealdetails } from 'src/Datamodel/Dealdeatails.component';
import {DialogService} from 'primeng/api';
import { PopupdeatilsComponent } from '../popupdeatils/popupdeatils.component';
import {MessageService} from 'primeng/api';
import { filterdetails } from 'src/Datamodel/FilterDetails.components';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [DialogService,MessageService]
})
export class GridComponent implements OnInit {
// deals :  {
//      dealid: string,
//      dealname : string,
//      frequency : string,
//      amethod : string,
//      type:string,
//      status:string,
//      lastupdated:string
//  }[];


deals:dealdetails[];
Clonedeals:dealdetails[]=[];
dealid:string;
dealname:string;
frequency:string;
type:string;
SavedDeals:dealdetails[]=[];
Filterdeals:any[]=[];
CumFilterdeals:any[]=[];
selecteddeals:filterdetails[];
selectable = true;
removable = true;
visible = true;
count:number;
idx:number;
i:number;

addOnBlur = true;
// readonly separatorKeysCodes: number[] = [ENTER, COMMA];
// fruits: Fruit[] = [
//   {name: 'Lemon'},
//   {name: 'Lime'},
//   {name: 'Apple'},
// ];
message:string;
  constructor(public dialogService: DialogService , public messageService: MessageService) {
};


display: boolean = false;

showDialog() {
  debugger;
  this.display = true;
  
}

receiveMessage($event) {
  debugger;
  this.message = $event
}




// add(event: MatChipInputEvent): void {
//   const input = event.input;
//   const value = event.value;

//   // Add our fruit
  
//   if ((value || '').trim()) {
//     this.fruits.push({name: value.trim()});
//   }

//   // Reset the input value
//   if (input) {
//     input.value = '';
//   }
// }

remove(deal: filterdetails): void {
  debugger;
   this.Clonedeals=[];
    const index = this.selecteddeals.indexOf(deal);
    this.deals.forEach(a=>{this.Clonedeals.push(a)});

    this.selecteddeals.splice(index, 1);
  if (index >= 0) {
   
        if (deal.label.toLocaleLowerCase().match("frequency"))
        {
        this.deals.forEach(a=>{ 
          
          if (a.frequency.toLocaleLowerCase().match(deal.value.toLocaleLowerCase()))
          {
            const idx = this.selecteddeals.indexOf(deal);
            this.deals.splice(idx,1)
          }
        });
        }
    
        else if (deal.label.toLocaleLowerCase().match("dealid"))
        {
        this.deals.forEach(a=>{ 
          if (a.dealid.toLocaleLowerCase().match(deal.value.toLocaleLowerCase()))
          {
            const idx = this.selecteddeals.indexOf(deal);
            this.deals.splice(idx,1)
          }
        });
        }
        else if (deal.label.toLocaleLowerCase().match("dealname"))
        {
        this.deals.forEach(a=>{ 
          if (a.dealname.toLocaleLowerCase().match(deal.value.toLocaleLowerCase()))
          {
            const idx = this.selecteddeals.indexOf(deal);
            this.deals.splice(idx,1)
          }
        });
        }
    
        else if (deal.label.toLocaleLowerCase().match("amethod"))
        {
        this.deals.forEach(a=>{ 
          if (a.amethod.toLocaleLowerCase().match(deal.value.toLocaleLowerCase()))
          {
            const idx = this.selecteddeals.indexOf(deal);
            this.deals.splice(idx,1)
          }
        });
        }
    
        else if (deal.label.toLocaleLowerCase().match("type"))
        {
        this.deals.forEach(a=>{ 
          if (a.type.toLocaleLowerCase().match(deal.value.toLocaleLowerCase()))
          {
            const idx = this.selecteddeals.indexOf(deal);
            this.deals.splice(idx,1)
          }
        });
        }
    
        else if (deal.label.toLocaleLowerCase().match("status"))
        {
          
        this.Clonedeals.forEach(a=>{ 
          debugger;
         if (a.status.toLocaleLowerCase().match(deal.value.toLocaleLowerCase()))
          {
             var indx = this.deals.indexOf(a);
             this.deals.splice(indx,1);
          }
        });
   
    }

  }
   if(this.deals.length==0) 
  {
    this.deals =[];
    this.ngOnInit();
  }
}


Search(field:string){
  debugger;
  switch (field) {
    case "dealid":
    if(this.dealid!="")
    {
    this.deals = this.deals.filter(res=>{
      return res.dealid.toLocaleLowerCase().match(this.dealid.toLocaleLowerCase())
    }
    );}
    else if(this.dealid=="")
      this.ngOnInit();
   break;
   
    case "dealname":
    if(this.dealname!="")
      {
      this.deals = this.deals.filter(res=>{
        return res.dealname.toLocaleLowerCase().match(this.dealname.toLocaleLowerCase())
      }
      );}

      else if(this.dealname=="")
        this.ngOnInit();
     break;

     case "frequency":
    if(this.frequency!="")
      {
      this.deals = this.deals.filter(res=>{
        return res.frequency.toLocaleLowerCase().match(this.frequency.toLocaleLowerCase())
      }
      );}

      else if(this.frequency=="")
        this.ngOnInit();
     break;

     case "type":
    if(this.type!="")
      {
      this.deals = this.deals.filter(res=>{
        return res.type.toLocaleLowerCase().match(this.type.toLocaleLowerCase())
      }
      );}

      else if(this.type=="")
        this.ngOnInit();
     break;
     
    default:
      
        }
      }


      SearchFilter(field:string,value:string){
        debugger;
        switch (field) {
          case "dealid":
          if(value!="")
          {
            if (this.Filterdeals.filter (res=>{
              return res.dealid.toLocaleLowerCase().match(value.toLocaleLowerCase())}
            ))
            
            {
            this.Filterdeals = this.SavedDeals.filter(res=>{
              return res.dealid.toLocaleLowerCase().match(value.toLocaleLowerCase())
          }
          );
        }
          
        }
          else if(value=="")
            this.ngOnInit();
         break;
         
          case "dealname":
          if(value!="")
            {

              if (this.Filterdeals.filter (res=>{
                return res.dealname.toLocaleLowerCase().match(value.toLocaleLowerCase())}
              ))
              
              {
              
            this.Filterdeals = this.SavedDeals.filter(res=>{
              return res.dealname.toLocaleLowerCase().match(value.toLocaleLowerCase())
            }
            );}
          }
                
            else if(value=="")
              this.ngOnInit();
           break;
      
           case "frequency":
          if(value!="")
            {
              if (this.Filterdeals.filter (res=>{
                return res.frequency.toLocaleLowerCase().match(value.toLocaleLowerCase())}
              ))
              
              {
            this.Filterdeals = this.SavedDeals.filter(res=>{
              return res.frequency.toLocaleLowerCase().match(value.toLocaleLowerCase())
            }
            );}
          }
      
            else if(value=="")
              this.ngOnInit();
           break;
      
           case "type":
          if(value!="")
            {

              if (this.Filterdeals.filter (res=>{
                return res.type.toLocaleLowerCase().match(value.toLocaleLowerCase())}
              ))
              
              {
            this.Filterdeals = this.SavedDeals.filter(res=>{
              return res.type.toLocaleLowerCase().match(value.toLocaleLowerCase())
            }
            );}
          }
      
            else if(value=="")
              this.ngOnInit();
           break;

           case "status":
          if(value!="")
            {
              if (this.Filterdeals.filter (res=>{
                return res.status.toLocaleLowerCase().match(value.toLocaleLowerCase())}
              ))
              
              {
            this.Filterdeals = this.SavedDeals.filter(res=>{
              return res.status.toLocaleLowerCase().match(value.toLocaleLowerCase())
            }
            );}
          }
      
            else if(value=="")
              this.ngOnInit();
           break;
           
          default:
         
              }
              // if (!this.CumFilterdeals.filter (res=>{
              //   return res.dealname.toLocaleLowerCase().match(value.toLocaleLowerCase())}
              // ))
              // if(!this.CumFilterdeals.some(res=>res.dealname))
              // {
                this.CumFilterdeals=[];
                this.Filterdeals.forEach(a=>{
                this.CumFilterdeals.push(a);
                } 
                );
              // }
            }

show() {
  //debugger;
   const ref = this.dialogService.open(PopupdeatilsComponent, {
    data: {
      id: this.SavedDeals,
      saved: this.selecteddeals
         },
      header: 'Advance Filter',
      width: '30%',
      height:'90%',
  });

  ref.onClose.subscribe((Filterdata: dealdetails[]) =>{
   // debugger;
    if (Filterdata) {
        this.AdvanceSearch(Filterdata);

    }
});
}

AdvanceSearch(Filterdata:any)
{
  debugger;
  if(Filterdata!="")
  {
 //this.deals = Filterdata;
  Filterdata.forEach(element => {
    this.SearchFilter(element.label,element.value)
  });
  this.deals=[];
 this.deals=this.CumFilterdeals;
 this.CumFilterdeals=[];
 this.selecteddeals = Filterdata;
  }
  else
  {
    this.ngOnInit();
    this.selecteddeals=[];
  }
}



ngOnInit() {
  
    this.deals = [
      {
      dealid : "1001",
      dealname: " A Deal",
      frequency : "Annual",
      amethod:"Equity",
      type:"LBO",
      status:"New",
      lastupdated:"23/01/2019"
     },
     {
      dealid : "1001",
      dealname: " Deal 2",
      frequency : "Quarter",
      amethod:"Equity",
      type:"LBO",
      status:"Pending",
      lastupdated:"23/01/2019"
     },
     {
      dealid : "1003",
      dealname: " Deal 3",
      frequency : "Annual",
      amethod:"Equity",
      type:"SIP",
      status:"Approved",
      lastupdated:"23/01/2019"
     },
     {
      dealid : "1004",
      dealname: " Deal 4",
      frequency : "Quarter",
      amethod:"Equity",
      type:"HF",
      status:"Hold",
      lastupdated:"23/01/2019"
     },
     {
      dealid : "1005",
      dealname: " B-Deal",
      frequency : "Quarter",
      amethod:"Equity",
      type:"SOC",
      status:"Approved",
      lastupdated:"23/01/2019"
     },
     {
      dealid : "1006",
      dealname: " Z Deal",
      frequency : "Annual",
      amethod:"Cost",
      type:"BLF",
      status:"Approved",
      lastupdated:"23/01/2019"
     }];
   this.SavedDeals=[];
   this.deals.forEach(element => {
     this.SavedDeals.push(element)
   });
  }




}

 

