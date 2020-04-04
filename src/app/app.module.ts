import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';




import { MapComponent } from './components/shared/map/map.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PopupSmallComponent } from './components/airmeteo/popup-small/popup-small.component';
import { PopupFullComponent } from './components/airmeteo/popup-full/popup-full.component';
import { PopupFullHeatmapComponent } from './components/airmeteo/popup-full-heatmap/popup-full-heatmap.component';
import { HeatmapBtnComponent } from './components/airmeteo/heatmap-btn/heatmap-btn.component';
import { HeatmapDiscardBtnComponent } from './components/airmeteo/heatmap-discard-btn/heatmap-discard-btn.component';
import { GraphComponent } from './components/airmeteo/graph/graph.component';
import { StationsListComponent } from './components/airmeteo/stations-list/stations-list.component';
import { ParametersListComponent } from './components/airmeteo/parameters-list/parameters-list.component';
import { StationsListHeatmapComponent } from './components/airmeteo/stations-list-heatmap/stations-list-heatmap.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,

    MapComponent,
    HeaderComponent,
    FooterComponent,
    PopupSmallComponent,
    PopupFullComponent,
    PopupFullHeatmapComponent,
    HeatmapBtnComponent,
    HeatmapDiscardBtnComponent,
    GraphComponent,
    StationsListComponent,
    ParametersListComponent,
    StationsListHeatmapComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
