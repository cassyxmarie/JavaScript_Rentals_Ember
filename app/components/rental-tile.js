<li>{{rental.owner}}'s {{rental.type}} in {{rental.city}}
    {{#if isImageShowing }}
      <p><img src={{rental.image}} alt={{rental.type}} {{action 'imageHide'}}></p>
     {{else}}
       <button {{action 'imageShow'}}>Show image</button>
    {{/if}}
</li>
