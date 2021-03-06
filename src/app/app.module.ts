import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DadosProvider } from '../providers/dados/dados';
import { KeysPipe } from '../pipes/keys/keys';

// paginas
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TelefonesPage } from '../pages/telefones/telefones';
import { HorariosPage } from '../pages/horarios/horarios';
import { MapaPage } from "../pages/mapa/mapa";
import { ArquivosPage } from "../pages/arquivos/arquivos";
import { LinksPage } from "../pages/links/links";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TelefonesPage,
    HorariosPage,
    MapaPage,
    ArquivosPage,
    LinksPage,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { mode: 'md' }),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TelefonesPage,
    HorariosPage,
    ArquivosPage,
    LinksPage,
    MapaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DadosProvider
  ]
})
export class AppModule {}
