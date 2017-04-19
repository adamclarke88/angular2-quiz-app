import { Component, OnInit, ViewChildren } from '@angular/core';
import { FootballQuestion, FootballQuestions } from './football-questions'; 

@Component({
    selector: 'football',
    templateUrl: 'app/components/quiz/football/football.component.html' 
})

export class FootballComponent implements OnInit { 

questions: FootballQuestion[]; 


ngOnInit() {
         // this is where you would go call your service  
         this.questions = FootballQuestions;
     }

     showHint(question: FootballQuestion){
         question.hintText = question.hint;
     }

     checkAnswer(question: FootballQuestion, option: string) {
         if(option == question.answer){
            question.status = "correct";
            console.log("correct");

         }else{
            question.status = "incorrect";
            console.log("incorrect");
         }
     }
}


