import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {

  const ingredients = [
    '1 Cinnamon Stick',
    '6 green cardamom pods lightly bruised',
    '4 cloves',
    '1 large onion finely chopped',
    '3 cloves garlic finely minced',
    '1 Cinnamon Stick',
    '1 Cinnamon Stick',
    '1 Cinnamon Stick',
    '6 green cardamom pods lightly bruised',
    '4 cloves',
    '1 large onion finely chopped',
    '3 cloves garlic finely minced',
    '1 tbsp ginger finely grated',
    '5 tbsp tomato passata / puree',
    '1 tsp salt',
    '750g/1.5lb boneless lamb shoulder , cut into 3cm/1.2" cubes',
    '1.5 cups / 375ml chicken stock , salt reduced (broth)'
  ];

  const spices = [
    '2 tbsp paprika , normal or sweet',
    '3/4 tsp chilli powder or to taste',
    '4 tsp ground coriander',
    '4 tsp ground cumin',
    '2 tsp turmeric powder',
    '1/4 tsp nutmeg',
    '1 tsp garam marsala',
    '1/2 tsp fennel powder'
  ]

  const directions = <p>
<h4>Prep Steps for maximum ease and flow</h4>
    <p>
    I like to pre-brown the protein in a pan.<br />
    It's not necessary, but if you do, brown it and keep it slowly cooking in a pan.<br />
    When you reach the step to toss protein in, chuck it and the juices from the pan in.<br /><br />

    
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
