import {Component, OnInit} from '@angular/core';
import {IAppState} from '../store/state/app.state';
import {select, Store} from '@ngrx/store';
import {selectConfig} from '../store/selectors/config.selectors';
import {Subject} from 'rxjs';
import {Joke} from '../model/joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  config$ = this.store.pipe(select(selectConfig));
  public joke$: Subject<Joke> = new Subject<Joke>();

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.getNewJoke();
  }

  getNewJoke(): void {
    this.config$.subscribe(config => {
      const joke = config.jokes[Math.floor(Math.random() * config.jokes.length)];
      this.joke$.next(joke);
    });
  }

}
