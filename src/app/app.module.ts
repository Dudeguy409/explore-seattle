import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/routable/page-not-found/page-not-found.component';
import { SouvenirIdeasComponent } from './components/routable/souvenir-ideas/souvenir-ideas.component';
import { MuseumsComponent } from './components/routable/museums/museums.component';
import { RestaurantsComponent } from './components/routable/restaurants/restaurants.component';
import { SeasonalActivitiesComponent } from './components/routable/seasonal-activities/seasonal-activities.component';
import { LeavenworthComponent } from './components/routable/leavenworth/leavenworth.component';
import { WoodinvilleComponent } from './components/routable/woodinville/woodinville.component';
import { CityFromAboveComponent } from './components/routable/city-from-above/city-from-above.component';
import { SkiingAndSnowboardingComponent } from './components/routable/skiing-and-snowboarding/skiing-and-snowboarding.component';
import { CityParksComponent } from './components/routable/city-parks/city-parks.component';
import { GamesAndBarcadesComponent } from './components/routable/games-and-barcades/games-and-barcades.component';
import { FirstTripComponent } from './components/routable/first-trip/first-trip.component';
import { CitySightsComponent } from './components/routable/city-sights/city-sights.component';
import { NightlifeComponent } from './components/routable/nightlife/nightlife.component';
import { SugarBombsComponent } from './components/routable/sugar-bombs/sugar-bombs.component';
import { GermanBeerComponent } from './components/routable/german-beer/german-beer.component';
import { KaraokeComponent } from './components/routable/karaoke/karaoke.component';
import { CraftBreweriesComponent } from './components/routable/craft-breweries/craft-breweries.component';
import { CraftCocktailsComponent } from './components/routable/craft-cocktails/craft-cocktails.component';
import { WaterActivitiesComponent } from './components/routable/water-activities/water-activities.component';
import { HomeComponent } from './components/routable/home/home.component';
import { SubMenuTogglerService } from './services/sub-menu-toggler.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactMeComponent } from './components/routable/contact-me/contact-me.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlurbComponent } from './components/blurb/blurb.component';
import { BlurbListComponent } from './components/blurb-list/blurb-list.component';
import { LiveMusicComponent } from './components/routable/live-music/live-music.component';
import { NightclubsComponent } from './components/routable/nightclubs/nightclubs.component';
import { SafePipe } from './pipes/safe.pipe';
import { TransportationComponent } from './components/routable/transportation/transportation.component';
import { BallroomDancingComponent } from './components/routable/ballroom-dancing/ballroom-dancing.component';
import { WrestlingComponent } from './components/routable/wrestling/wrestling.component';
import { OlympicPeninsulaComponent } from './components/routable/olympic-peninsula/olympic-peninsula.component';
import { DeceptionPassComponent } from './components/routable/deception-pass/deception-pass.component';
import { CascadesComponent } from './components/routable/cascades/cascades.component';
import { OutsideOfTheCityComponent } from './components/routable/outside-of-the-city/outside-of-the-city.component';
import { AboutTheAuthorComponent } from './components/routable/about-the-author/about-the-author.component';
import { IrishPubsComponent } from './components/routable/irish-pubs/irish-pubs.component';
import { BestNeighborhoodsComponent } from './components/routable/best-neighborhoods/best-neighborhoods.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "first_trip", component: FirstTripComponent },
  { path: "city_sights", component: CitySightsComponent },
  { path: "city_sights/city_parks", component: CityParksComponent },
  { path: "city_sights/water_activities", component: WaterActivitiesComponent },
  { path: "city_sights/city_from_above", component: CityFromAboveComponent },
  { path: "city_sights/museums", component: MuseumsComponent },
  { path: "nightlife", component: NightlifeComponent },
  { path: "nightlife/best_neighborhoods", component: BestNeighborhoodsComponent },
  { path: "nightlife/craft_breweries", component: CraftBreweriesComponent },
  { path: "nightlife/craft_coctails", component: CraftCocktailsComponent },
  { path: "nightlife/sugar_bombs", component: SugarBombsComponent },
  { path: "nightlife/nightclubs", component: NightclubsComponent },
  { path: "nightlife/live_music", component: LiveMusicComponent },
  { path: "nightlife/games_and_barcades", component: GamesAndBarcadesComponent },
  { path: "nightlife/karaoke", component: KaraokeComponent },
  { path: "nightlife/ballroom_dancing", component: BallroomDancingComponent },
  { path: "nightlife/german_beer", component: GermanBeerComponent },
  { path: "nightlife/irish_pubs", component: IrishPubsComponent },
  { path: "nightlife/wrestling", component: WrestlingComponent },
  { path: "outside_of_the_city", component: OutsideOfTheCityComponent },
  { path: "outside_of_the_city/deception_pass", component: DeceptionPassComponent },
  { path: "outside_of_the_city/olympic_peninsula", component: OlympicPeninsulaComponent},
  { path: "outside_of_the_city/cascades", component: CascadesComponent },
  { path: "outside_of_the_city/skiing_and_snowboarding", component: SkiingAndSnowboardingComponent },
  { path: "outside_of_the_city/woodinville_wine_tasting", component: WoodinvilleComponent },
  { path: "outside_of_the_city/leavenworth", component: LeavenworthComponent },
  { path: "seasonal_activities", component: SeasonalActivitiesComponent },
  { path: "transportation", component: TransportationComponent },
  { path: "restaurants", component: RestaurantsComponent },
  { path: "souvenir_ideas", component: SouvenirIdeasComponent },
  { path: "about_the_author", component: AboutTheAuthorComponent },
  { path: "contact", component: ContactMeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SouvenirIdeasComponent,
    MuseumsComponent,
    RestaurantsComponent,
    SeasonalActivitiesComponent,
    LeavenworthComponent,
    WoodinvilleComponent,
    CityFromAboveComponent,
    SkiingAndSnowboardingComponent,
    CityParksComponent,
    GamesAndBarcadesComponent,
    FirstTripComponent,
    CitySightsComponent,
    NightlifeComponent,
    SugarBombsComponent,
    GermanBeerComponent,
    KaraokeComponent,
    CraftBreweriesComponent,
    CraftCocktailsComponent,
    IrishPubsComponent,
    BestNeighborhoodsComponent,
    WaterActivitiesComponent,
    HomeComponent,
    NavBarComponent,
    ContactMeComponent,
    HeaderComponent,
    FooterComponent,
    BlurbComponent,
    BlurbListComponent,
    LiveMusicComponent,
    NightclubsComponent,
    SafePipe,
    TransportationComponent,
    BallroomDancingComponent,
    WrestlingComponent,
    OlympicPeninsulaComponent,
    DeceptionPassComponent,
    CascadesComponent,
    OutsideOfTheCityComponent,
    AboutTheAuthorComponent,
    IrishPubsComponent,
    BestNeighborhoodsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SubMenuTogglerService],
  bootstrap: [AppComponent]
})
export class AppModule { }