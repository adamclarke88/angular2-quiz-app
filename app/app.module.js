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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_routing_1 = require('../app/app.routing');
var app_routing_2 = require('../app/app.routing');
var navbar_component_1 = require('../app/components/navbar/navbar.component');
var intro_component_1 = require('../app/components/intro/intro.component');
var contact_component_1 = require('../app/components/contact/contact.component');
var footer_component_1 = require('../app/components/footer/footer.component');
var high_scores_component_1 = require('../app/components/quiz/high-scores/high-scores.component');
var football_component_1 = require('../app/components/quiz/football/football.component');
var general_knowledge_component_1 = require('../app/components/quiz/general-knowledge/general-knowledge.component');
var geography_component_1 = require('../app/components/quiz/geography/geography.component');
var music_component_1 = require('../app/components/quiz/music/music.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                intro_component_1.IntroComponent,
                navbar_component_1.NavbarComponent,
                football_component_1.FootballComponent,
                general_knowledge_component_1.GeneralKnowledgeComponent,
                geography_component_1.GeographyComponent,
                music_component_1.MusicComponent,
                high_scores_component_1.HighScoresComponent,
                contact_component_1.ContactComponent,
                footer_component_1.FooterComponent
            ],
            providers: [app_routing_2.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map