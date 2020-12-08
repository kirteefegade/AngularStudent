import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/studentService';

@Component({
    selector:"stud-detail",
    templateUrl:"./studdetail.Component.html",
    styleUrls: ["./studdetail.Component.css"]
})
export class StudentDetailComponent {
    sarr:Student[];
    flag=false;
    stud:Student;
    addflag=true;
    constructor(private studService:StudentService){
    }
    ngOnInit(){
        this.studService.getAllStudent().subscribe(result=>this.sarr=result);
    }
    displayForm(){
        this.flag=true;
        this.addflag=false;
    }

    updateStudent(student:Student){
        this.flag=true;
        this.stud=student;
    }
    deleteStudent(student:Student){
        this.studService.deleteStudent(student.id).subscribe(result=>{this.studService.getAllStudent().subscribe(result1=>this.sarr=result1)});
    }
}