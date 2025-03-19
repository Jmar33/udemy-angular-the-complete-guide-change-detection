import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

// OnPush strategy is a powerful resource that allows the change detection just occurs when we have 
// a change in a input, in a event inside a component, from a child component, an event in the component itself or 
// when we have a manually change

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  count = signal(0);

  ngOnInit(): void {
    setTimeout(() => {
      this.count.set(0)
    }, 4000);

    setTimeout(() => {
      console.log('time expired!')
    }, 5000);
  }

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
