import { component$ } from '@builder.io/qwik';
import { ResultItem } from '../result-item/result-item';

export const ResultList = component$(() => {
  return (
    <ul>
      <li>
        <ResultItem />
      </li>
      <li>
        <ResultItem />
      </li>
      <li>
        <ResultItem />
      </li>
    </ul>
  );
});
