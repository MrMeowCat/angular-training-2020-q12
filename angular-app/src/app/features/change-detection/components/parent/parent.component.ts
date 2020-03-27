import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  text: string = 'Child';

  constructor() {
    console.log('PARENT CONSTRUCTOR');
    setTimeout(() => {
      console.log('SetTimeout triggered change detection PARENT');
      this.text = 'Child Button';
    }, 2000);
  }

  @HostListener('click')
  listenClick(): void {
    console.log('Events trigger change detection PARENT');
  }

  ngOnChanges(): void {
    console.log('PARENT CHANGES');
  }

  ngOnInit(): void {
    console.log('PARENT INIT');
  }

  ngDoCheck(): void {
    console.log('PARENT CHECK');
  }

  ngAfterContentInit(): void {
    console.log('PARENT CONTENT INIT');
  }

  ngAfterContentChecked(): void {
    console.log('PARENT CONTENT CHECKED');
  }

  ngAfterViewInit(): void {
    console.log('PARENT VIEW INIT');
  }

  ngAfterViewChecked(): void {
    console.log('PARENT VIEW CHECKED');
  }

  ngOnDestroy(): void {
    console.log('PARENT DESTROY');
  }
}
