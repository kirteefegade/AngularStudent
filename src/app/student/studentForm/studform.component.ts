import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/studentService';

@Component({
    selector:'./stud-form',
    templateUrl:'./studform.Component.html',
    styleUrls:['./studform.Component.css']
})
export class StudentFormComponent{
    id:number;
    name:string;
    marks:number;
    dob:Date;
    stud:Student[];

   @Input()addstud:boolean;
    @Input()updatestud:Student;
    @Output()myevent=new EventEmitter();
    @Output() flagEvent=new EventEmitter();
  
    student:Student;
    constructor(private studService:StudentService){
        
    }
    ngOnChanges(changes:SimpleChanges){
        //console.log(this.updatestud);
     if(this.addstud){
        if(changes["updatestud"].currentValue!=changes["updatestud"].previousValue){
            this.id=this.updatestud.id;
            this.name=this.updatestud.name;
            this.marks=this.updatestud.marks;
            this.dob=this.updatestud.dob;
        }
    }
    }
    addStudent(){
        this.student=new Student(this.id,this.name,this.marks,this.dob);
      
        this.studService.addStudent(this.student).subscribe(result=>{this.studService.getAllStudent().subscribe(result1=>{this.stud=result1;this.myevent.emit(this.stud); this.flagEvent.emit(false);});});
       
    }
    UpdateStudent(){
        this.student=new Student(this.id,this.name,this.marks,this.dob);
 
        this.studService.updateStudent(this.student).subscribe(result=>{this.studService.getAllStudent().subscribe(result1=>{this.stud=result1;this.myevent.emit(this.stud);this.flagEvent.emit(false);});})
      
    
       
    }
}