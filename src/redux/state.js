import rootReducer from "./rootReducer";
import { createStore } from "redux";

export const defaultState = {
    quoteColors : [
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
        '#73A857'
    ],
    quoteObjects : [
        {
            quoteText : "It’s not the years in your life that count. It’s the life in your years.",
            quoteAuthor : "- Abraham Lincoln",
        },
        {
            quoteText : "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
            quoteAuthor : "- Leonardo da Vinci",
        },
        {
            quoteText : "I would rather die of passion than of boredom.",
            quoteAuthor : "- Vincent van Gogh",
        },
        {
            quoteText : "Nothing is impossible, the word itself says, “I’m possible!”",
            quoteAuthor : "- –Audrey Hepburn",
        },
        {
            quoteText : "We must balance conspicuous consumption with conscious capitalism.",
            quoteAuthor : "- Kevin Kruse",
        },
        {
            quoteText : "It is never too late to be what you might have been.",
            quoteAuthor : "- George Eliot",
        },
        {
            quoteText : "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
            quoteAuthor : "- Bob Dylan",
        },
        {
            quoteText : "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
            quoteAuthor : "- Dalai Lama",
        },
        {
            quoteText : "Too many of us are not living our dreams because we are living our fears.",
            quoteAuthor : "- Les Brown",
        },
        {
            quoteText : "The question isn’t who is going to let me; it’s who is going to stop me.",
            quoteAuthor : "- Ayn Rand",
        },
        {
            quoteText : "Build your own dreams, or someone else will hire you to build theirs.",
            quoteAuthor : "- Farrah Gray",
        },
        {
            quoteText : "If you want to lift yourself up, lift up someone else.",
            quoteAuthor : "- Booker T. Washington",
        },
        {
            quoteText : "Either you run the day, or the day runs you.",
            quoteAuthor : "- Jim Rohn",
        },
        {
            quoteText : "I am not a product of my circumstances. I am a product of my decisions.",
            quoteAuthor : "- Stephen Covey",
        },
        {
            quoteText : "Winning isn’t everything, but wanting to win is.",
            quoteAuthor : "- Vince Lombardi",
        },
        {
            quoteText : "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
            quoteAuthor : "- Erma Bombeck",
        },
        {
            quoteText : "The person who says it cannot be done should not interrupt the person who is doing it.",
            quoteAuthor : "- Chinese Proverb",
        },
        {
            quoteText : "The question isn’t who is going to let me; it’s who is going to stop me.",
            quoteAuthor : "- Ayn Rand",
        },
        {
            quoteText : "There are no traffic jams along the extra mile.",
            quoteAuthor : "- Roger Staubach",
        },
        {
            quoteText : "We become what we think about.",
            quoteAuthor : "- Earl Nightingale",
        },
        {
            quoteText : "There are no traffic jams along the extra mile.",
            quoteAuthor : "- Roger Staubach",
        },
        {
            quoteText : "The most common way people give up their power is by thinking they don’t have any.",
            quoteAuthor : "- Alice Walker",
        },
        {
            quoteText : "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
            quoteAuthor : "- Maya Angelou",
        },
        {
            quoteText : "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
            quoteAuthor : "- Helen Keller",
        },
        {
            quoteText : "Life is what happens to you while you’re busy making other plans.",
            quoteAuthor : "- John Lennon",
        },
    ],
}

export const store = createStore(
    rootReducer,
);
export const state = store.getState();