import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { onLCP, onINP, onCLS } from 'web-vitals';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

onLCP(console.log, { reportAllChanges: true });
onCLS(console.log, { reportAllChanges: true });
onINP(console.log, { reportAllChanges: true });
