import { Observable } from '../Observable';
import { EmptyObservable } from '../observable/EmptyObservable';
import { mergeMap } from './mergeMap';

/**
 * Returns an Observable that emits nothing and just completes.
 *
 * @return {Observable} An Observable that emits nothing and just completes.
 * @method discard
 * @owner Observable
 */
export function discard<T>(this: Observable<T>): Observable<never> {
  return mergeMap.call(this, () => EmptyObservable.create());
}
