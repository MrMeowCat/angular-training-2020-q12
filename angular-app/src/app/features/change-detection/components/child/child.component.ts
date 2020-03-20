import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  text: string;

  @ContentChild('contentChild')
  contentChild: ElementRef<HTMLElement>;

  otherText: string = 'default';

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    console.log('CHILD CONSTRUCTOR');
    setTimeout(() => {
      console.log('SetTimeout triggered change detection CHILD');
      this.otherText = 'other text';
      this.changeDetectorRef.detectChanges();
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHILD CHANGES', changes);
  }

  ngOnInit(): void {
    console.log('CHILD INIT');
  }

  ngDoCheck(): void {
    console.log('CHILD CHECK');
  }

  ngAfterContentInit(): void {
    console.log('CHILD CONTENT INIT', this.contentChild);
  }

  ngAfterContentChecked(): void {
    console.log('CHILD CONTENT CHECKED');
  }

  ngAfterViewInit(): void {
    console.log('CHILD VIEW INIT');
  }

  ngAfterViewChecked(): void {
    console.log('CHILD VIEW CHECKED');
  }

  ngOnDestroy(): void {
    console.log('CHILD DESTROY');
  }

}
