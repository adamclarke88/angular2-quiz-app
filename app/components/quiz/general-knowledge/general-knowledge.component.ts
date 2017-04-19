import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'general-knowledge',
    templateUrl: 'app/components/quiz/general-knowledge/general-knowledge.component.html' 
})
export class GeneralKnowledgeComponent implements OnInit { 
        teams: string[];

        ngOnInit() {
         // this is where you would go call your service when you can be assed 
         this.teams = teams;
     }

 }

   export const teams = ["liverpool" , "arsenal", "stoke"]
 