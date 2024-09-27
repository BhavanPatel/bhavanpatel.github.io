import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { onLCP, onINP, onCLS } from 'web-vitals';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

declare var gtag: any;

function getDebugInfo(name: any, attribution: any) {
  if (attribution) {
    if (name === 'LCP') {
      return {
        debug_url: attribution.url,
        debug_time_to_first_byte: attribution.timeToFirstByte,
        debug_resource_load_delay: attribution.resourceLoadDelay,
        debug_resource_load_time: attribution.resourceLoadTime,
        debug_element_render_delay: attribution.elementRenderDelay,
        debug_target: attribution.element || '(not set)',
      };
    } else if (name === 'INP') {
      return {
        debug_event: attribution.interactionType,
        debug_time: Math.round(attribution.interactionTime),
        debug_load_state: attribution.loadState,
        debug_target: attribution.interactionTarget || '(not set)',
        debug_interaction_delay: Math.round(attribution.inputDelay),
        debug_processing_duration: Math.round(attribution.processingDuration),
        debug_presentation_delay: Math.round(attribution.presentationDelay),
      };
    } else if (name === 'CLS') {
      return {
        debug_time: attribution.largestShiftTime,
        debug_load_state: attribution.loadState,
        debug_target: attribution.largestShiftTarget || '(not set)',
      };
    }
  }

  return {
    debug_target: '(not set)',
  };
}

function sendToGoogleAnalytics(metrics: any) {
  const { name, delta, value, id, entries, attribution } = metrics;
  console.log(metrics);
  // gtag('event', name, {
  //   value: delta,
  //   metric_id: id,
  //   metric_value: value,
  //   metric_delta: delta,
  //   ...getDebugInfo(name, attribution),
  // });
}

onLCP(sendToGoogleAnalytics, { reportAllChanges: true });
onCLS(sendToGoogleAnalytics, { reportAllChanges: true });
onINP(sendToGoogleAnalytics, { reportAllChanges: true });
