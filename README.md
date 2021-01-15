# KonamiKey

This library was inspired by the [useKonamiCode hook](https://usehooks.com/useKonamiCode/).

## Installation

```sh
npm install konami-key
```

## Usage

Simply import the module and you're done:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KonamiKeyModule } from 'konami-key';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KonamiKeyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Trigger the Animation

Open your page and fire the Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)!
