

export class Student{
    id:number;
    name:string;
    marks:number;
    dob:Date;
  
    constructor(rollno?:number, name?:string, marks?:number, dob?:Date){
        this.id=rollno;
        this.name=name;
        this.marks=marks;
        this.dob=dob;
    }
}