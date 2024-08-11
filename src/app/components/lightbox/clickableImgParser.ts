import { Injectable } from '@angular/core';
import { HookParser, HookValue, HookComponentData, HookBindings, ParseOptions } from 'ngx-dynamic-hooks';
import { ClickableImgComponent } from './clickableImg.component';

@Injectable({ 
  providedIn: 'root' 
})
export class ClickableImgParser implements HookParser {

  findHookElements(contentElement: any): any[] {
    // Find all img-elements with the lightbox class
    return Array.from(contentElement.querySelectorAll('img.lightbox'));
  }

  loadComponent(): HookComponentData {
    return {
      component: ClickableImgComponent,   // Load our component
      hostElementTag: 'lightbox-img'      // As img-elements can't have content, replace them with '<lightbox-img>' elements
    };
  }

  getBindings(hookId: number, hookValue: HookValue): HookBindings {
    // Read the image urls from the element attributes and pass along as inputs
    const imgElement: HTMLImageElement = hookValue.elementSnapshot;
    return {
      inputs: {
        src: imgElement.getAttribute('src'),
        srcLarge: imgElement.getAttribute('src-large')
      }
    }
  }
}