import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/routable/page-not-found/page-not-found.component';
import { AboutMeComponent } from './components/routable/about-me/about-me.component';
import { SouvenirIdeasComponent } from './components/routable/souvenir-ideas/souvenir-ideas.component';
import { MuseumsComponent } from './components/routable/museums/museums.component';
import { RestaurantsComponent } from './components/routable/restaurants/restaurants.component';
import { SeasonalActivitiesComponent } from './components/routable/seasonal-activities/seasonal-activities.component';
import { LeavenworthComponent } from './components/routable/leavenworth/leavenworth.component';
import { WoodinvilleComponent } from './components/routable/woodinville/woodinville.component';
import { CityFromAboveComponent } from './components/routable/city-from-above/city-from-above.component';
import { SkiingComponent } from './components/routable/skiing/skiing.component';
import { CityParksComponent } from './components/routable/city-parks/city-parks.component';
import { HikingComponent } from './components/routable/hiking/hiking.component';
import { GamesAndBarcadesComponent } from './components/routable/games-and-barcades/games-and-barcades.component';
import { FirstTripComponent } from './components/routable/first-trip/first-trip.component';
import { CitySightsComponent } from './components/routable/city-sights/city-sights.component';
import { NightlifeComponent } from './components/routable/nightlife/nightlife.component';
import { SugarBombComponent } from './components/routable/sugar-bomb/sugar-bomb.component';
import { GermanBeerComponent } from './components/routable/german-beer/german-beer.component';
import { KaraokeComponent } from './components/routable/karaoke/karaoke.component';
import { CraftBreweriesComponent } from './components/routable/craft-breweries/craft-breweries.component';
import { CraftCocktailsComponent } from './components/routable/craft-cocktails/craft-cocktails.component';
import { IrishPubComponent } from './components/routable/irish-pub/irish-pub.component';
import { NeighborhoodComponent } from './components/routable/neighborhood/neighborhood.component';
import { WaterActivitiesComponent } from './components/routable/water-activities/water-activities.component';
import { OutdoorActivitiesComponent } from './components/routable/outdoor-activities/outdoor-activities.component';
import { HomeComponent } from './components/routable/home/home.component';
import {SubMenuTogglerService} from './services/sub-menu-toggler.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactMeComponent } from './components/routable/contact-me/contact-me.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlurbComponent } from './components/blurb/blurb.component';
import { BlurbListComponent } from './components/blurb-list/blurb-list.component';

const appRoutes : Routes = [
{path:"",component:HomeComponent},
{path:"first_trip_top_tips",component:FirstTripComponent},
{path:"city_sights",component:CitySightsComponent},
{path:"nightlife",component:NightlifeComponent},
{path:"nightlife/sugar_bombs",component:SugarBombComponent},
{path:"nightlife/german_beer",component:GermanBeerComponent},
{path:"nightlife/karaoke",component:KaraokeComponent},
{path:"nightlife/craft_breweries",component:CraftBreweriesComponent},
{path:"nightlife/craft_coctails",component:CraftCocktailsComponent},
{path:"nightlife/irish_pubs",component:IrishPubComponent},
{path:"nightlife/neighborhoods",component:NeighborhoodComponent},
{path:"nightlife/games_and_barcades",component:GamesAndBarcadesComponent},
{path:"outdoor_activities",component:OutdoorActivitiesComponent},
{path:"outdoor_activities/water_activities",component:WaterActivitiesComponent},
{path:"outdoor_activities/hiking",component:HikingComponent},
{path:"outdoor_activities/city_parks",component:CityParksComponent},
{path:"outdoor_activities/skiing",component:SkiingComponent},
{path:"city_from_above",component:CityFromAboveComponent},
{path:"woodinville_wine_tasting",component:WoodinvilleComponent},
{path:"leavenworth",component:LeavenworthComponent},
{path:"seasonal_activities",component:SeasonalActivitiesComponent},
{path:"restaurants",component:RestaurantsComponent},
{path:"museums",component:MuseumsComponent},
{path:"souvenir_ideas",component:SouvenirIdeasComponent},
{path:"about_the_author",component:AboutMeComponent},
{path:"contact",component:ContactMeComponent},
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutMeComponent,
    SouvenirIdeasComponent,
    MuseumsComponent,
    RestaurantsComponent,
    SeasonalActivitiesComponent,
    LeavenworthComponent,
    WoodinvilleComponent,
    CityFromAboveComponent,
    SkiingComponent,
    CityParksComponent,
    HikingComponent,
    GamesAndBarcadesComponent,
    FirstTripComponent,
    CitySightsComponent,
    NightlifeComponent,
    SugarBombComponent,
    GermanBeerComponent,
    KaraokeComponent,
    CraftBreweriesComponent,
    CraftCocktailsComponent,
    IrishPubComponent,
    NeighborhoodComponent,
    WaterActivitiesComponent,
    OutdoorActivitiesComponent,
    HomeComponent,
    NavBarComponent,
    ContactMeComponent,
    HeaderComponent,
    FooterComponent,
    BlurbComponent,
    BlurbListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SubMenuTogglerService],
  bootstrap: [AppComponent]
})
export class AppModule { }