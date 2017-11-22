import { Component } from '@angular/core';
@Component({
    selector: 'loading-image',
    
    template: `
    <img src="{{loadImg}}">
  `
})
export class LoadingImage {
    loadImg = 'resource/images/preloader.gif';
}