import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }      from '../app/app.routing';
import { appRoutingProviders }      from '../app/app.routing';

import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { IntroComponent }      from '../app/components/intro/intro.component';
import { ContactComponent }      from '../app/components/contact/contact.component';
import { FooterComponent }      from '../app/components/footer/footer.component';
import { HighScoresComponent }      from '../app/components/quiz/high-scores/high-scores.component';
import { FootballComponent }      from '../app/components/quiz/football/football.component';
import { GeneralKnowledgeComponent }      from '../app/components/quiz/general-knowledge/general-knowledge.component';
import { GeographyComponent }      from '../app/components/quiz/geography/geography.component';
import { MusicComponent }      from '../app/components/quiz/music/music.component';

@NgModule({
  imports: [ BrowserModule, 
            routing 
           ],
  declarations: [ 
                  AppComponent,
                  IntroComponent,
                  NavbarComponent,
                  FootballComponent,
                  GeneralKnowledgeComponent,
                  GeographyComponent,
                  MusicComponent,
                  HighScoresComponent,
                  ContactComponent,
                  FooterComponent
                ],
  providers: [appRoutingProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
