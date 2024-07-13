import { HookParser, HookValue, HookComponentData, HookBindings } from 'ngx-dynamic-hooks';
import { LightboxComponent } from './lightbox.component';

export class LightboxHookParser implements HookParser {

  public findHookElements(contentElement: any, context: any): any[] {
    // Find all img-elements with the lightbox class
    return Array.from(contentElement.querySelectorAll('img.lightbox'));
  }

  public loadComponent(hookId: number, hookValue: HookValue, context: any, childNodes: any[]): HookComponentData {
    return {
      component: LightboxComponent,   // Load our Lightbox component
      hostElementTag: 'lightbox-img'  // As img-elements can't have content, replace them with 'lightbox-img' elements
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
