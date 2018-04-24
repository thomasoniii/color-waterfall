This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Check it out live [here](https://thomasoniii.github.io/color-waterfall)

Or clone it yourself and start it up - standard create-react-app. npm install && npm start.

This is a fast proof-of-concept to play around with changing HSV color values to show closeness of relationships
of children in a tree.

Click on the colored divs to add children, which{"'"}ll crack their hue values in half. Each step down
also decreases the brightness by 5% down to a minimum of 15%.

The hope is to create hierarchical structures which are grouped by color - so you can see the relationship of
a child with a parent farther up its lineage, while simultaneously distinguishing neighbors - closer relatives (siblings,
cousins) should be more closely colored.

Note that colors are recycled - so you may end up with reddish children on two different parts of the hierarchy. The hope
is that they are far enough distanced from each other that the user won't assume they're related. The only significant color
relationships should be parental.
