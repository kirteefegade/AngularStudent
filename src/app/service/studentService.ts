import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Student } from '../model/student';


@Injectable()
export class StudentService{
    baseurl="http://localhost:3000/Student";
    constructor(private httpc:HttpClient){}
    
    getAllStudent():Observable<Student[]>{
        return this.httpc.get<Student[]>(this.baseurl);
    }
    addStudent(student:Student):Observable<Student>{
       // console.log("in service");
      //  console.log(student);
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
       return this.httpc.post<Student>(this.baseurl,student,httpOptions);
    }
    updateStudent(student:Student):Observable<Student>{
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
        return this.httpc.put<Student>(this.baseurl+"/"+student.id,student,httpOptions);
    }
    deleteStudent(id:number){
        return this.httpc.delete<Student>(this.baseurl+"/"+id);
    }
}