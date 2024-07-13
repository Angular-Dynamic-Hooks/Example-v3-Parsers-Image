import { HookParser, HookValue, HookComponentData, HookBindings } from 'ngx-dynamic-hooks';
import { LightboxComponent } from './lightbox.component';

export class LightboxHookParser implements HookParser {

  public findHookElements(contentElement: any, context: any): any[] {
    // Find all img-elements with the lightbox class
    return Array.from(contentElement.querySelectorAll('img.lightbox'));
  }

  public loadComponent(hookId: number, hookValue: HookValue, context: any, childNodes: any[]): HookComponentData {
    return {
      // Load our Lightbox component for them
      component: LightboxComponent,
      // Since img-elements can't normally have content, replace them with 'lightbox-img' elements
      hostElementTag: 'lightbox-img'
    };
  }

  public getBindings(hookId: number, hookValue: HookValue, context: any): HookBindings {
    // Simply return the inputs for the component here
    const imgElement: HTMLImageElement = hookValue.elementSnapshot;
    return {
      inputs: {
        src: imgElement.getAttribute('src'),
        srcLarge: imgElement.getAttribute('src-large')
      }
    }
  }
}
