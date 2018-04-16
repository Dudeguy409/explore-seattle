import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SouvenirIdeasComponent } from './components/souvenir-ideas/souvenir-ideas.component';
import { MuseumsComponent } from './components/museums/museums.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { SeasonalActivitiesComponent } from './components/seasonal-activities/seasonal-activities.component';
import { LeavenworthComponent } from './components/leavenworth/leavenworth.component';
import { WoodinvilleComponent } from './components/woodinville/woodinville.component';
import { CityFromAboveComponent } from './components/city-from-above/city-from-above.component';
import { SkiingComponent } from './components/skiing/skiing.component';
import { CityParksComponent } from './components/city-parks/city-parks.component';
import { HikingComponent } from './components/hiking/hiking.component';
import { GamesAndBarcadesComponent } from './components/games-and-barcades/games-and-barcades.component';
import { FirstTripComponent } from './components/first-trip/first-trip.component';
import { CitySightsComponent } from './components/city-sights/city-sights.component';
import { NightlifeComponent } from './components/nightlife/nightlife.component';
import { SugarBombComponent } from './components/sugar-bomb/sugar-bomb.component';
import { GermanBeerComponent } from './components/german-beer/german-beer.component';
import { KaraokeComponent } from './components/karaoke/karaoke.component';
import { CraftBreweriesComponent } from './components/craft-breweries/craft-breweries.component';
import { CraftCocktailsComponent } from './components/craft-cocktails/craft-cocktails.component';
import { IrishPubComponent } from './components/irish-pub/irish-pub.component';
import { NeighborhoodComponent } from './components/neighborhood/neighborhood.component';
import { WaterActivitiesComponent } from './components/water-activities/water-activities.component';
import { OutdoorActivitiesComponent } from './components/outdoor-activities/outdoor-activities.component';
import { HomeComponent } from './components/home/home.component';
import { RoutableComponent } from './components/routable/routable.component';

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
    RoutableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }