import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import './rxjs-lessons';
import './canvas';

import './rxjs-subject';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
