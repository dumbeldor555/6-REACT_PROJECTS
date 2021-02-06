import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state,action) => {
    switch(action.type) {
      case 'GO_FORWARD':
        console.log('going forward');
      return{
        ...state,
        index: (state.index < state.reviews.length -1) ? state.index + 1 : 0
      }
      case "GO_BACKWARD":
        console.log('going backward');
      return {
        ...state,
        index: (state.index > 0) ? state.index - 1 : state.reviews.length -1
      }
      case 'GO_RANDOM':
        console.log('going random');
      return{
        ...state,
        index: Math.floor(Math.random() * state.reviews.length)
      }
      default:
      return state;
    }
}

class Provider extends Component {

  state = {
   
    reviews : [
      {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
          'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
      },
      {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
          'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      },
      {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
          'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      },
    ],

    dispatch: (action) => {
      this.setState((state) => {
        // don't forget to return it
      return reducer(state, action);
      })

    },

    index: 0,
    rendomeIndex: 0,
  }

  render() {
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>   
    )
  }
}

const Consumer = Context.Consumer;

// exporting this two things 
export default Provider;
export {Consumer}