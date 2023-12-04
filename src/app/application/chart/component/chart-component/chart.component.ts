import {Component, OnInit} from '@angular/core';
import { CompanyData } from '../../../../shared';
import { CompanyDataService } from '../../service';
import { take } from 'rxjs';

@Component({
    selector : 'app-chart',
    templateUrl : './chart.component.html',
    styleUrls : ['./chart.component.scss']
})

export class ChartComponent implements OnInit{
    companyData : CompanyData[] = [];
    public barChartOptions : any = {
        scaleShowVerticalLines : false,
        responsive : true,
        //maintainAspectRatio : false
    }
    public barChartLabels : string[] = [];
    public barChartType = 'bar';
    public barChartLegend = true;
    public barChartData : any[] = [
        {
            data : [],
            label : 'loan amount'
        },
        {
            data : [],
            label : 'Turnover'
        },
        {
            data : [],
            label : 'Raised Capital'
        },
        {
            data : [],
            label : 'Net Profit'
        }
    ]
    constructor(private _companyDataService : CompanyDataService){

    }
    ngOnInit(): void {
        this._getData();
        this._getBarData();
    }
    private _getData(){
        this._companyDataService.getCompanyDate().pipe(take(1)).subscribe((data)=>{
             this.companyData = data;
        },(error)=>{
            console.log(error);
        })
    }
  private _getBarData(){
    this.companyData.forEach(data=>{
        this.barChartLabels.push(data.companyName || '');
        this.barChartData[0].data.push(data.loanAmount);
        this.barChartData[1].data.push(data.turnOver);
        this.barChartData[2].data.push(data.raisedCapital);
        this.barChartData[3].data.push(data.netProfit);
    })
  }

}