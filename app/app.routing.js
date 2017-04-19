"use strict";
var router_1 = require('@angular/router');
var intro_component_1 = require('../app/components/intro/intro.component');
var contact_component_1 = require('../app/components/contact/contact.component');
var high_scores_component_1 = require('../app/components/quiz/high-scores/high-scores.component');
var football_component_1 = require('../app/components/quiz/football/football.component');
var general_knowledge_component_1 = require('../app/components/quiz/general-knowledge/general-knowledge.component');
var geography_component_1 = require('../app/components/quiz/geography/geography.component');
var music_component_1 = require('../app/components/quiz/music/music.component');
var appRoutes = [
    { path: '', component: intro_component_1.IntroComponent },
    { path: 'intro', component: intro_component_1.IntroComponent },
    { path: 'football', component: football_component_1.FootballComponent },
    { path: 'general-knowledge', component: general_knowledge_component_1.GeneralKnowledgeComponent },
    { path: 'geography', component: geography_component_1.GeographyComponent },
    { path: 'music', component: music_component_1.MusicComponent },
    { path: 'high-scores', component: high_scores_component_1.HighScoresComponent },
    { path: 'contact', component: contact_component_1.ContactComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map