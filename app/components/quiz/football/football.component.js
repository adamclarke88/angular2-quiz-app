"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var football_questions_1 = require('./football-questions');
var FootballComponent = (function () {
    function FootballComponent() {
    }
    FootballComponent.prototype.ngOnInit = function () {
        // this is where you would go call your service  
        this.questions = football_questions_1.FootballQuestions;
    };
    FootballComponent.prototype.showHint = function (question) {
        question.hintText = question.hint;
    };
    FootballComponent.prototype.checkAnswer = function (question, option) {
        if (option == question.answer) {
            question.status = "correct";
            console.log("correct");
        }
        else {
            question.status = "incorrect";
            console.log("incorrect");
        }
    };
    FootballComponent = __decorate([
        core_1.Component({
            selector: 'football',
            templateUrl: 'app/components/quiz/football/football.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FootballComponent);
    return FootballComponent;
}());
exports.FootballComponent = FootballComponent;
//# sourceMappingURL=football.component.js.map