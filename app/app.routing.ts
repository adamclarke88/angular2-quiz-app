import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent }      from '../app/components/intro/intro.component';
import { ContactComponent }      from '../app/components/contact/contact.component';
import { HighScoresComponent }      from '../app/components/quiz/high-scores/high-scores.component';
import { FootballComponent }      from '../app/components/quiz/football/football.component';
import { GeneralKnowledgeComponent }      from '../app/components/quiz/general-knowledge/general-knowledge.component';
import { GeographyComponent }      from '../app/components/quiz/geography/geography.component';
import { MusicComponent }      from '../app/components/quiz/music/music.component';

const appRoutes: Routes = [

    {path: '', component: IntroComponent},
    {path: 'intro', component: IntroComponent},
    {path: 'football', component: FootballComponent},
    {path: 'general-knowledge', component: GeneralKnowledgeComponent},
    {path: 'geography', component: GeographyComponent},
    {path: 'music', component: MusicComponent},
    {path: 'high-scores', component: HighScoresComponent},
    {path: 'contact', component: ContactComponent}
   
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

