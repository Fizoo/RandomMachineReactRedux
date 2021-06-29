import {createStore} from "redux";

const RANDOM_BTN = 'RANDOM_BTN';

const style = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'];
const data = [
    {
    text: 'Believe you can and you’re halfway there.',
    author: '- Theodore Roosevelt'
    },
    {
        text: 'Fall seven times and stand up eight.',
        author: '- Japanese Proverb'
    },
    {
        text: 'Winning isn’t everything, but wanting to win is.',
        author: '- Vince Lombardi'
    },
    {
        text: 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
        author: '- Plato'
    },
    {
        text: 'Strive not to be a success, but rather to be of value.',
        author: '- Albert Einstein'
    },
    {
        text: 'Every child is an artist. The problem is how to remain an artist once he grows up.',
        author: '- Pablo Picasso'
    },
    {
        text: 'If you want to lift yourself up, lift up someone else.',
        author: '- Booker T. Washington'
    },
    {
        text: 'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.',
        author: '- Ann Landers'
    },
    {
        text: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
        author: '- Anne Frank'
    },
    {
        text: 'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.',
        author: '- Jamie Paolinetti'
    },
    {
        text: 'Certain things catch your eye, but pursue only those that capture the heart.',
        author: '- Ancient Indian Proverb'
    },
    {
        text: 'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.',
        author: '- Jamie Paolinetti'
    }

]


let initialState = {
    index: 0,
    style: style,
    data: data
}


let randomReducer = (state = initialState, action) => {

    switch (action.type) {

        case RANDOM_BTN:
            return {
                index: action.randomNumber,
                style: state.style,
                data: state.data
            }
        default:
            return state;
    }
}
export let store = createStore(randomReducer)

export const RandomActionCreatorRandom = (randomNumber) => ({type: RANDOM_BTN, randomNumber})


