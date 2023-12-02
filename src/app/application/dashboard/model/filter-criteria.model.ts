export class FilterCriteria{
    startDate? : string | Date;
    endDate? : string | Date;
    loanLowerLimit? : number | null;
    loanUpperLimit? : number | null;
    accountType? : string;
    filterAdded? : boolean;
    constructor(){
        this.startDate = '',
        this.endDate = '',
        this.loanLowerLimit = null,
        this.loanUpperLimit = null,
        this.accountType = '',
        this.filterAdded = false
    }
}