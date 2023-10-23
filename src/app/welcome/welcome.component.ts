//package com.akhilesh.sprngboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


//@ComponentScan(
//    value = "com.akhilesh.sprinboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


//public class SpringBootFirstApp implements SomeInterface{
export class WelcomeComponent implements OnInit{

  message : string = 'Some Welcome message'
  name= ''
  //public SpringBootFirstWebApp(){
  
  //Dependency injection
  //ActivatedRoute
  constructor(private route: ActivatedRoute){}

  //void init(){
  ngOnInit(): void {
    console.log(this.message)
    //params is map and name is key
    // console.log(this.route.snapshot)
    console.log(this.route.snapshot.params['name']); //6
    this.name = this.route.snapshot.params['name']
  }
}
