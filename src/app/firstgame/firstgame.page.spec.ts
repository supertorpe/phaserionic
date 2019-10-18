import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstGamePage } from './firstgame.page';

describe('FirstGamePage', () => {
  let component: FirstGamePage;
  let fixture: ComponentFixture<FirstGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstGamePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
