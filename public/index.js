/* global PRIVATEASER*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <div class="actor"
        style = '
        font-family : "Lucida Console", Monaco, monospace;
        font-size : 15px;
        '>
          <span
          style = '
          color:#6BD3B8;
          text-transform: uppercase;
          font-weight: bold;
          '>
          ${actor.who} -> </span>
          <span
          style = '
          text-transform: capitalize;
          '>
          ${actor.type}</span>
          <span
          style = '
          color:red;
          '>
          ${actor.amount}</span>
          </br></br>
        </div>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = ' ';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const bar = PRIVATEASER.getBar();
    const time = document.querySelector('.js-time').value;
    const persons = document.querySelector('.js-persons').value;
    const option = document.querySelector('.js-option').checked;
    const actors = PRIVATEASER.payActors(bar, time, persons, option);

    render(actors);

    return;
  });
})();
