import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {

  const ingredients = [
    '4 tbsp ghee, or a bit more butter cooked down',
    '1 Cinnamon Stick',
    '6 green cardamom pods, beat em up a lil',
    '4 cloves',
    '1 large onion finely chopped',
    '3-5 cloves garlic chopped finely',
    '1ish tbsp ginger finely chopped/grated',
    '1 can of tomatoes or a bunch of cherry tomatos',
    '1 tsp salt',
    'However much lamb/goat you want in there. I use a double or triple handful of cubed goat chunks',
    '1.5 cups beef or chicken stock'
  ];

  const spices = [
    '2 tbsp paprika , normal or sweet. Not the smoked stuff.',
    '3/4 tsp chilli powder or to taste. I get Kashmir chili powder from the local Indian mart.',
    '4 tsp ground coriander',
    '4 tsp ground cumin',
    '2 tsp turmeric powder',
    '1/4 tsp nutmeg. Sometimes I leave this out.',
    '1 or 2 tsp garam marsala, whatever feels right... It\'s garam marsala, it\'s all good',
    '1/2 tsp fennel powder',
    'Most import are the chili powder (try to get Kashmiri), coriander, cumin, garam marsala. Don\'t go hard with fennel or nutmeg.'
  ]

  const directions = <p>
<h4>Prep Steps for maximum ease and flow. One pot version.</h4>
    <p>
    Start by throwing the meat in the pot with some oil. Medium high heat. Some salt and pepper in there. Fry it so it gets a little crusty. This make the goat so much better.<br />
    Keep a side eye on the pot, when the cubes have a decent crust take it off heat and put them aside on a plate or bowl.<br />
    While that's cooking, prep the onion, garlic, ginger.<br />
    Get all your whole spices ready to chuck in. I put them in a little bowl. I also put all the ground spices together in their own little bowl<br /><br />

    Okay! So the goats browned and out of the pot, the other stuff is prepped. Add the ghee/butter to the pot along with the goat juices.<br />
    Get it pretty hot and "bloom" the whole spices. `\(Toss them in, they should sizzle in the ghee, til nice and fragrant. Don't burn them tho! yeesh\)`<br />
    Spices bloomed? Lower the heat and throw the onion in. Proceed til translucent or starting to caramelize. Translucent is quicker. Caramelized is better<br />
    When you judge the onions a minute or two from being done, get the ginger and garlic in there.<br />
    Finally, and this is an important step, when the onion, ginger, garlic mixture is done, throw the bowl of ground spices in.<br />
    You don't want to burn them! So keep stirring and add a bit of stock if you think they'll start to burn. We just want them to get a little toasted. 15/20 seconds. Then throw the can of tomatoes in (with the liquid)<br />
    If using Cherry tomatoes and not a can, throw those in with a little stock. Enough stock to make it a thin gravy consistency.<br /><br />

    Cook that mix up a little, and then throw the goat cubes back in.<br />
    Mix them up, get them covered, maybe a few minutes like that, then add the rest of the stock.<br />
    Stir, cover, bring to a boil and reduce to a simmer.<br />
    Leave it for at least an hour.<br />
    It'll be ready when the biggest goat chucks are tender<br />
    
    </p>
    

    <h4>Cooking whole spices</h4>

    <p>

    You can use ghee, butter, oil or a mix. Ghee for flavor. Butter for convenience. Oil if nothin else.<br />
    If using butter, put a bunch in and let it cook down til it smells bomb.<br /><br />
      Bloom whole spices in oil/ghee/butter. Careful, don't burn em.<br />
      Add onion cook til translucent or longer for more flav. <br />
      Add garlic and ginger.<br />
      Add tomato puree and salt.<br />
      Add a bit of oil or stock to keep from burning spices.<br /><br />
      Add and coat protein.
      Add the rest of the stock. Bring to a simmer.
      Lid on and simmer gently for a couple hours.
      Simmer with lid off to reduce.
      Stir in yogurt.
      Serve with rice.
    </p>





  </p>

  const listIngredients = ingredients.map(ingredient =>
    <li><label>
      <input type='checkbox'></input>
      {ingredient}
    </label></li>
  );

  const listSpices = spices.map(spice =>
    <li><label>
      <input type='checkbox'></input>
      {spice}
    </label></li>
  );

  return (
    <>
      <h1>BON DON'T FREAKING LOOK AT THIS</h1>
      <h4>especially my cinny sticks</h4>
      <h1>Al Rogan Josh</h1>
      <h3>Ingredients</h3>
      <ul>{listIngredients}</ul>
      <h3>Spices</h3>
      <ul>{listSpices}</ul>
      <h3>Directions</h3>
      <p>{directions}</p>

    </>
  )
}

export default App
