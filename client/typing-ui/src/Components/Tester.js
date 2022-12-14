import React,{useContext, useEffect, useState} from 'react';
import './Tester.css';
import $ from 'jquery';
import axios from 'axios';
import Navbar from './Navbar';
import Context from '../Context/Context';
import { Navigate} from 'react-router-dom';

const Tester = () => { 
    const requiredWords = [
        {
            level: 1,
            wordset: [{
                id: 1,
                word: "A"
            },
            {
                id: 2,
                word: "salt"
            },
            {
                id: 3,
                word: "seller"
            },
            {
                id: 4,
                word: "used"
            },
            {
                id: 5,
                word: "to"
            },
            {
                id: 6,
                word: "carry"
            },
            {
                id: 7,
                word: "the"
            },
            {
                id: 8,
                word: "salt"
            },
            {
                id: 9,
                word: "bag"
            },
            {
                id: 10,
                word: "on"
            },
            {
                id: 11,
                word: "his"
            },
            {
                id: 12,
                word: "donkey"
            },
            {
                id: 13,
                word: "to"
            },
            {
                id: 14,
                word: "the"
            },
            {
                id: 15,
                word: "market"
            },
            {
                id: 16,
                word: "every"
            },
            {
                id: 17,
                word: "day."
            },
            {
                id: 18,
                word: "On"
            },
            {
                id: 19,
                word: "the"
            },
            {
                id: 20,
                word: "way"
            },
            {
                id: 21,
                word: "they"
            },
            {
                id: 22,
                word: "had"
            },
            {
                id: 23,
                word: "to"
            },
            {
                id: 24,
                word: "cross"
            },
            {
                id: 25,
                word: "a"
            },    
            {
                id: 26,
                word: "stream."
            },
            {
                id: 27,
                word: "One"
            },
            {
                id: 28,
                word: "day"
            },
            {
                id: 29,
                word: "the"
            },
            {
                id: 30,
                word: "donkey"
            },
            {
                id: 31,
                word: "suddenly"
            },
            {
                id: 32,
                word: "tumbled"
            },
            {
                id: 33,
                word: "down"
            },
            {
                id: 34,
                word: "the"
            },
            {
                id: 35,
                word: "stream"
            },
            {
                id: 36,
                word: "and"
            },
            {
                id: 37,
                word: "the"
            },
            {
                id: 38,
                word: "salt"
            },
            {
                id: 39,
                word: "bag"
            },
            {
                id: 40,
                word: "also"
            },
            {
                id: 41,
                word: "fell"
            },
            {
                id: 42,
                word: "into"
            },
            {
                id: 43,
                word: "the"
            },
            {
                id: 44,
                word: "water."
            },
            {
                id: 45,
                word: "The"
            },
            {
                id: 46,
                word: "salt"
            },
            {
                id: 47,
                word: "dissolved"
            }, 
            {
                id: 48,
                word: "in"
            },
            {
                id: 49,
                word: "the"
            }, 
            {
                id: 50,
                word: "water"
            }, 
            {
                id: 51,
                word: "and"
            },
            {
                id: 52,
                word: "hence"
            },
            {
                id: 53,
                word: "the"
            },
            {
                id: 54,
                word: "bag"
            },
            {
                id: 55,
                word: "became"
            },
            {
                id: 56,
                word: "very"
            },
            {
                id: 57,
                word: "light"
            },
            {
                id: 58,
                word: "to"
            },
            {
                id: 59,
                word: "carry."
            },
            {
                id: 60,
                word: "The"
            },
            {
                id: 61,
                word: "donkey"
            },
            {
                id: 62,
                word: "was"
            },
            {
                id: 63,
                word: "happy."
            },
            {
                id: 64,
                word: "Then"
            },
            {
                id: 65,
                word: "the"
            },
            {
                id: 66,
                word: "donkey"
            },
            {
                id: 67,
                word: "started"
            },
            {
                id: 68,
                word: "to"
            },
            {
                id: 69,
                word: "play"
            },
            {
                id: 70,
                word: "the"
            },
            {
                id: 71,
                word: "same"
            },
            {
                id: 72,
                word: "trick"
            },
            {
                id: 73,
                word: "every"
            },
            {
                id: 74,
                word: "day."
            },
            {
                id: 75,
                word: "The"
            },
            {
                id: 76,
                word: "salt"
            },
            {
                id: 77,
                word: "seller"
            },
            {
                id: 78,
                word: "came"
            },
            {
                id: 79,
                word: "to"
            },
            {
                id: 80,
                word: "understand"
            },
            {
                id: 81,
                word: "the"
            },
            {
                id: 82,
                word: "trick"
            },
            {
                id: 83,
                word: "and"
            },
            {
                id: 84,
                word: "decided"
            },
            {
                id: 85,
                word: "to"
            },
            {
                id: 86,
                word: "teach"
            },
            {
                id: 87,
                word: "a"
            },
            {
                id: 88,
                word: "lesson"
            },
            {
                id: 89,
                word: "to"
            },
            {
                id: 90,
                word: "it."
            },
            {
                id: 91,
                word: "The"
            },
            {
                id: 92,
                word: "next"
            },
            {
                id: 93,
                word: "day"
            },
            {
                id: 94,
                word: "he"
            },
            {
                id: 95,
                word: "loaded"
            },
            {
                id: 96,
                word: "a"
            },
            {
                id: 97,
                word: "cotton"
            },
            {
                id: 98,
                word: "bag"
            },
            {
                id: 99,
                word: "on"
            },
            {
                id: 100,
                word: "the"
            },
            {
                id: 101,
                word: "donkey."
            }]
        },
        {
            level: 2,
            wordset: [{
                id: 1,
                word: "The"
            },
            {
                id: 2,
                word: "Last"
            },
            {
                id: 3,
                word: "Leaf,"
            },
            {
                id: 4,
                word: "short"
            },
            {
                id: 5,
                word: "story"
            },
            {
                id: 6,
                word: "by"
            },
            {
                id: 7,
                word: "O.Henry"
            },
            {
                id: 8,
                word: "published"
            },
            {
                id: 9,
                word: "in"
            },
            {
                id: 10,
                word: "1907"
            },
            {
                id: 11,
                word: "in"
            },
            {
                id: 12,
                word: "his"
            },
            {
                id: 13,
                word: "collection"
            },
            {
                id: 14,
                word: "The"
            },
            {
                id: 15,
                word: "Trimmed"
            },
            {
                id: 16,
                word: "Lamp"
            },
            {
                id: 17,
                word: "and"
            },
            {
                id: 18,
                word: "Other"
            },
            {
                id: 19,
                word: "Stories."
            },
            {
                id: 20,
                word: "???The"
            },
            {
                id: 21,
                word: "Last"
            },
            {
                id: 22,
                word: "Leaf???"
            },
            {
                id: 23,
                word: "concerns"
            },
            {
                id: 24,
                word: "Johnsy,"
            },
            {
                id: 25,
                word: "a"
            },    
            {
                id: 26,
                word: "poor"
            },
            {
                id: 27,
                word: "young"
            },
            {
                id: 28,
                word: "woman"
            },
            {
                id: 29,
                word: "who"
            },
            {
                id: 30,
                word: "is"
            },
            {
                id: 31,
                word: "seriously"
            },
            {
                id: 32,
                word: "ill"
            },
            {
                id: 33,
                word: "with"
            },
            {
                id: 34,
                word: "pneumonia."
            },
            {
                id: 35,
                word: "She"
            },
            {
                id: 36,
                word: "believes"
            },
            {
                id: 37,
                word: "that"
            },
            {
                id: 38,
                word: "when"
            },
            {
                id: 39,
                word: "the"
            },
            {
                id: 40,
                word: "ivy"
            },
            {
                id: 41,
                word: "vine"
            },
            {
                id: 42,
                word: "on"
            },
            {
                id: 43,
                word: "the"
            },
            {
                id: 44,
                word: "wall"
            },
            {
                id: 45,
                word: "outside"
            },
            {
                id: 46,
                word: "her"
            },
            {
                id: 47,
                word: "window"
            }, 
            {
                id: 48,
                word: "loses"
            },
            {
                id: 49,
                word: "all"
            }, 
            {
                id: 50,
                word: "its"
            }, 
            {
                id: 51,
                word: "leaves,"
            },
            {
                id: 52,
                word: "she"
            },
            {
                id: 53,
                word: "will"
            },
            {
                id: 54,
                word: "also"
            },
            {
                id: 55,
                word: "die."
            },
            {
                id: 56,
                word: "Her"
            },
            {
                id: 57,
                word: "neighbour"
            },
            {
                id: 58,
                word: "Behrman"
            },
            {
                id: 59,
                word: "an"
            },
            {
                id: 60,
                word: "artist,"
            },
            {
                id: 61,
                word: "tricks"
            },
            {
                id: 62,
                word: "her"
            },
            {
                id: 63,
                word: "by"
            },
            {
                id: 64,
                word: "painting"
            },
            {
                id: 65,
                word: "a"
            },
            {
                id: 66,
                word: "leaf"
            },
            {
                id: 67,
                word: "on"
            },
            {
                id: 68,
                word: "the"
            },
            {
                id: 69,
                word: "wall."
            },
            {
                id: 70,
                word: "Johnsy"
            },
            {
                id: 71,
                word: "recovers,"
            },
            {
                id: 72,
                word: "but"
            },
            {
                id: 73,
                word: "Behrman,"
            },
            {
                id: 74,
                word: "who"
            },
            {
                id: 75,
                word: "caught"
            },
            {
                id: 76,
                word: "pneumonia"
            },
            {
                id: 77,
                word: "while"
            },
            {
                id: 78,
                word: "painting"
            },
            {
                id: 79,
                word: "leaf"
            },
            {
                id: 80,
                word: "dies."
            },
            {
                id: 81,
                word: "The"
            },
            {
                id: 82,
                word: "story"
            },
            {
                id: 83,
                word: "is"
            },
            {
                id: 84,
                word: "based"
            },
            {
                id: 85,
                word: "on"
            },
            {
                id: 86,
                word: "theme"
            },
            {
                id: 87,
                word: "that"
            },
            {
                id: 88,
                word: "life"
            },
            {
                id: 89,
                word: "is"
            },
            {
                id: 90,
                word: "precious"
            },
            {
                id: 91,
                word: "and"
            },
            {
                id: 92,
                word: "faith"
            },
            {
                id: 93,
                word: "and"
            },
            {
                id: 94,
                word: "hope"
            },
            {
                id: 95,
                word: "should"
            },
            {
                id: 96,
                word: "never"
            },
            {
                id: 97,
                word: "be"
            },
            {
                id: 98,
                word: "lost."
            },
            {
                id: 99,
                word: "Another"
            },
            {
                id: 100,
                word: "theme"
            },
            {
                id: 101,
                word: "that"
            },
            {
                id: 102,
                word: "story"
            },
            {
                id: 103,
                word: "is"
            },
            {
                id: 104,
                word: "that"
            },
            {
                id: 105,
                word: "devoted"
            },
            {
                id: 106,
                word: "friendship"
            },
            {
                id: 107,
                word: "can"
            },
            {
                id: 108,
                word: "be"
            },
            {
                id: 109,
                word: "succour"
            },
            {
                id: 110,
                word: "during"
            },
            {
                id: 111,
                word: "times"
            },
            {
                id: 112,
                word: "of"
            },
            {
                id: 113,
                word: "crisis."
            }
            ]
            
        },
        {
            level: 3,
            wordset: [{
                id: 1,
                word: "An"
            },
        {
                id: 2,
                word: "old"
            },
            {
                id: 3,
                word: "man"
            },
            {
                id: 4,
                word: "lived"
            },
            {
                id: 5,
                word: "in"
            },
            {
                id: 6,
                word: "the"
            },
            {
                id: 7,
                word: "village."
            },
            {
                id: 8,
                word: "He"
            },
            {
                id: 9,
                word: "was"
            },
            {
                id: 10,
                word: "one"
            },
            {
                id: 11,
                word: "of"
            },
            {
                id: 12,
                word: "the"
            },
            {
                id: 13,
                word: "most"
            },
            {
                id: 14,
                word: "unfortunate"
            },
            {
                id: 15,
                word: "people"
            },
            {
                id: 16,
                word: "in"
            },
            {
                id: 17,
                word: "the"
            },
            {
                id: 18,
                word: "world."
            },
            {
                id: 19,
                word: "The"
            },
            {
                id: 20,
                word: "whole"
            },
            {
                id: 21,
                word: "village"
            },
            {
                id: 22,
                word: "was"
            },
            {
                id: 23,
                word: "tired"
            },
            {
                id: 24,
                word: "of"
            },
            {
                id: 25,
                word: "him;"
            },
            {
                id: 26,
                word: "he"
            },
            {
                id: 27,
                word: "was"
            },
            {
                id: 28,
                word: "always"
            },
            {
                id: 29,
                word: "gloomy,"
            },
            {
                id: 30,
                word: "he"
            },
            {
                id: 31,
                word: "constantly"
            },
            {
                id: 32,
                word: "The"
            },
            {
                id: 33,
                word: "complained"
            },
            {
                id: 34,
                word: "and"
            },
            {
                id: 35,
                word: "was"
            },
            {
                id: 36,
                word: "always"
            },
            {
                id: 37,
                word: "in"
            },
            {
                id: 38,
                word: "a"
            },
            {
                id: 39,
                word: "bad"
            },
            {
                id: 40,
                word: "mood."
            },
            {
                id: 41,
                word: "The"
            },
            {
                id: 42,
                word: "longer"
            },
            {
                id: 43,
                word: "he"
            },
            {
                id: 44,
                word: "lived"
            },
            {
                id: 45,
                word: "the"
            },
            {
                id: 46,
                word: "more"
            },
            {
                id: 47,
                word: "bile"
            },
            {
                id: 48,
                word: "he"
            },
            {
                id: 49,
                word: "was"
            },
            {
                id: 50,
                word: "becoming"
            },
            {
                id: 51,
                word: "and"
            },
            {
                id: 52,
                word: "the"
            },
            {
                id: 53,
                word: "more"
            },
            {
                id: 54,
                word: "poisonous"
            },
            {
                id: 55,
                word: "were"
            },
            {
                id: 56,
                word: "his"
            },
            {
                id: 57,
                word: "words."
            },
            {
                id: 58,
                word: "People"
            },
            {
                id: 59,
                word: "avoided"
            },
            {
                id: 60,
                word: "him,"
            },
            {
                id: 61,
                word: "because"
            },
            {
                id: 62,
                word: "his"
            },
            {
                id: 63,
                word: "misfortune"
            },
            {
                id: 64,
                word: "became"
            },
            {
                id: 65,
                word: "contagious."
            },
            {
                id: 66,
                word: "It"
            },
            {
                id: 67,
                word: "was"
            },
            {
                id: 68,
                word: "even"
            },
            {
                id: 69,
                word: "unnatural"
            },
            {
                id: 70,
                word: "and"
            },
            {
                id: 71,
                word: "insulting"
            },
            {
                id: 72,
                word: "to"
            },
            {
                id: 73,
                word: "be"
            },
            {
                id: 74,
                word: "happy"
            },
            {
                id: 75,
                word: "near"
            },
            {
                id: 76,
                word: "him."
            },
            {
                id: 77,
                word: "But"
            },
            {
                id: 78,
                word: "one"
            },
            {
                id: 79,
                word: "day,"
            },
            {
                id: 80,
                word: "when"
            },
            {
                id: 81,
                word: "he"
            },
            {
                id: 82,
                word: "turned"
            },
            {
                id: 83,
                word: "eighty"
            },
            {
                id: 84,
                word: "years"
            },
            {
                id: 85,
                word: "old,"
            },
            {
                id: 86,
                word: "an"
            },
            {
                id: 87,
                word: "incredible"
            },
            {
                id: 88,
                word: "thing"
            },
            {
                id: 89,
                word: "happened."
            },
            {
                id: 90,
                word: "Instantly"
            },
            {
                id: 91,
                word: "everyone"
            },
            {
                id: 92,
                word: "started"
            },
            {
                id: 93,
                word: "hearing"
            },
            {
                id: 94,
                word: "the"
            },
            {
                id: 95,
                word: "rumour"
            },
            {
                id: 96,
                word: "that"
            },
            {
                id: 97,
                word: "an"
            },
            {
                id: 98,
                word: "old"
            },
            {
                id: 99,
                word: "man"
            },
            {
                id: 100,
                word: "is"
            },
            {
                id: 101,
                word: "happy"
            },
            {
                id: 102,
                word: "today,"
            },
            {
                id: 103,
                word: "he"
            },
            {
                id: 104,
                word: "doesn't"
            },
            {
                id: 105,
                word: "complain"
            },
            {
                id: 106,
                word: "about"
            },
            {
                id: 107,
                word: "anything,"
            },
            {
                id: 108,
                word: "he"
            },
            {
                id: 109,
                word: "smiles,"
            },
            {
                id: 110,
                word: "and"
            },
            {
                id: 111,
                word: "even"
            },
            {
                id: 112,
                word: "his"
            },
            {
                id: 113,
                word: "face"
            },
            {
                id: 114,
                word: "is"
            },
            {
                id: 115,
                word: "freshened"
            },
            {
                id: 116,
                word: "up."
            },
            {
                id: 117,
                word: "The"
            },
            {
                id: 118,
                word: "whole"
            },
            {
                id: 119,
                word: "village"
            },
            {
                id: 120,
                word: "gathered"
            },
            {
                id: 121,
                word: "together."
            },
            {
                id: 122,
                word: "When"
            },
            {
                id: 123,
                word: "the"
            },
            {
                id: 124,
                word: "villagers"
            },
            {
                id: 125,
                word: "asked"
            },
            {
                id: 126,
                word: "him"
            },
            {
                id: 127,
                word: "what"
            },
            {
                id: 128,
                word: "had"
            },
            {
                id: 129,
                word: "happened"
            },
            {
                id: 130,
                word: "to"
            },
            {
                id: 131,
                word: "him,"
            },
            {
                id: 132,
                word: "the"
            },
            {
                id: 133,
                word: "old"
            },
            {
                id: 134,
                word: "man"
            },
            {
                id: 135,
                word: "said"
            },
            {
                id: 136,
                word: "that"
            },
            {
                id: 137,
                word: "it"
            },
            {
                id: 138,
                word: "had"
            },
            {
                id: 139,
                word: "been"
            },
            {
                id: 140,
                word: "eighty"
            },
            {
                id: 141,
                word: "years"
            },
            {
                id: 142,
                word: "he"
            },
            {
                id: 143,
                word: "had"
            },
            {
                id: 144,
                word: "been"
            },
            {
                id: 145,
                word: "chasing"
            },
            {
                id: 146,
                word: "happiness"
            },
            {
                id: 147,
                word: "and"
            },
            {
                id: 148,
                word: "it"
            },
            {
                id: 149,
                word: "was"
            },
            {
                id: 150,
                word: "useless."
            },
            {
                id: 151,
                word: "And"
            },
            {
                id: 152,
                word: "then"
            },
            {
                id: 153,
                word: "he"
            },
            {
                id: 154,
                word: "decided"
            },
            {
                id: 155,
                word: "to"
            },
            {
                id: 156,
                word: "live"
            },
            {
                id: 157,
                word: "without"
            },
            {
                id: 158,
                word: "happiness"
            },
            {
                id: 159,
                word: "and"
            },
            {
                id: 160,
                word: "just"
            },
            {
                id: 161,
                word: "enjoy"
            },
            {
                id: 162,
                word: "life."
            },
            {
                id: 163,
                word: "That's"
            },
            {
                id: 164,
                word: "why"
            },
            {
                id: 165,
                word: "I"
            },
            {
                id: 166,
                word: "am"
            },
            {
                id: 167,
                word: "happy"
            },
            {
                id: 168,
                word: "now."
            }
            ]
        }
    ]
    const [requiredWordIndex, setRequiredWordIndex] = useState(0);
    const [requiredWord, setRequiredWord] = useState();
    const [attemptedWords, setAttemptedWords] = useState(0);
    const [incorrectWords, setIncorrectWords] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const [userLetterInput, setUserLetterInput] = useState([]);
    const [userAccuracy, setUserAccuracy] = useState(0);
    const [userWpmScore, setUserWpmScore] = useState(0);
    const [timeCount, setTimeCount] = useState(60);
    const [timer, setTimer] = useState(60);
    const [testStarted, setTestStarted] = useState(false);
    const [testRestartedAt, setTestRestartedAt] = useState(0);
    const [showReport, setShowReport] = useState(false);
    const [level, setLevel] = useState(0);
    const context = useContext(Context);
    const userInputHandler = (event) => {
        if(requiredWordIndex < requiredWords[level].wordset.length){
            var requiredObject = level ? requiredWords[level].wordset[requiredWordIndex] : requiredWords[0].wordset[requiredWordIndex];
            setRequiredWord(requiredObject.word);
        }
        if(event.key !== null){
            const keyName = event.key;
            if(event.keyCode > 64 && event.keyCode < 91){ 
                setUserLetterInput(prevState => [...prevState, keyName]); //setting state only on alphabet keycodes
            }else if(event.keyCode === 186 || event.keyCode === 188){
                setUserLetterInput(prevState => [...prevState, keyName]); //etting state for semi-colon and comma
            }else if(event.keyCode === 190 || event.keyCode === 222){
                setUserLetterInput(prevState => [...prevState, keyName]); //etting state for period and single quotes
            }
            if(userLetterInput.length === 1){
                setTestStarted(true);
            }
            if(keyName === ' '){
                const userinput = userLetterInput.toString();
                const toMatch = userinput.split(',').join('');
                const isMatched = toMatch.localeCompare(requiredWord);
                const nextword = requiredObject != null ? requiredObject.id + 1 : null;
                if(nextword === null || timeCount === 0){
                    setTestStarted(false);
                    console.log("inside nextword and timeCount === 0 block")
                    generateReport(userAccuracy, userWpmScore, level);
                    return;
                }
                if(isMatched !== 0){
                    $('#' + requiredObject.id).addClass('error');
                    $('#' + requiredObject.id).removeClass('underline');
                    setIncorrectWords(prevState => prevState + 1);
                }else{
                    $('#' + requiredObject.id).addClass('active');
                    $('#' + requiredObject.id).removeClass('underline');
                }
                $('#' + nextword).addClass('underline');
                setAttemptedWords(prevState => prevState + 1);
                setRequiredWordIndex(prevState => prevState + 1);
                setUserLetterInput([]);
            }else if(keyName === "Backspace"){
                let removed = userLetterInput.filter((_, index) => index !== userLetterInput.length - 1);
                setUserLetterInput(removed);
            }
            return keyName;
        }
    }
    const calculateAccuracy = (incorrectWords, attemptedWords) => {
        const correctWords = attemptedWords - incorrectWords;
        setCorrectWords(correctWords);
        const minutes = (timer - timeCount) / 60;
        const netWpm = correctWords / minutes;
        setUserWpmScore(netWpm.toFixed(0));
        const accuracy = (correctWords / attemptedWords) * 100;
        setUserAccuracy(accuracy.toFixed(2));
    }
    const setTimeCounter = (setTo) => {
        setTestRestartedAt(setTo);
        setTimeCount(setTo);
        setTimer(setTo);
        switch (setTo) {
            case 60:
                setLevel(0);
                $("#level0").addClass("active-bg");
                $("#level1").removeClass("active-bg");
                $("#level2").removeClass("active-bg");
                break;
            case 180:
                setLevel(1);
                $("#level1").addClass("active-bg");
                $("#level0").removeClass("active-bg");
                $("#level2").removeClass("active-bg");
                break;
            case 300:
                setLevel(2);
                $("#level2").addClass("active-bg");
                $("#level0").removeClass("active-bg");
                $("#level1").removeClass("active-bg");
                break;
            default:
                setLevel(0);
                break;
        }
        setAttemptedWords(0);
        setCorrectWords(0);
        setIncorrectWords(0);
        setUserAccuracy(0);
        $(".requiredWord").removeClass("error");
        $(".requiredWord").removeClass("underline");
        $(".requiredWord").removeClass("active");
        $(".user-typebox").val("");
        setRequiredWordIndex(0);
        setUserLetterInput([]);
    }
    const generateReport = (userAccuracy, userWpmScore, level) => {
        axios.post("http://localhost:3002/api/insert/user/report", {email: context.user, accuracy: userAccuracy, wpmScore: userWpmScore, timeSpan: level })
        .then(res =>{
            if(res.status === 200){
                console.log(res.status);
                console.log(res.data);
            }
            console.log(res);
        });
    }
    const resetTest = () => {
        setTestStarted(false);
        if(showReport === true){
            testRestartedAt !== 0 ? setTimeCounter(testRestartedAt) : setTimeCounter(60);
            setShowReport(false);
        }else{
            testRestartedAt !== 0 ? setTimeCounter(testRestartedAt) : setTimeCounter(61);  
        }
    }
    useEffect(()=>{
        calculateAccuracy(incorrectWords, attemptedWords);
    },[attemptedWords, incorrectWords, timeCount]);
    useEffect(()=>{
        if(testStarted === true && timeCount > 0){
           setTimeout(() => {
                setTimeCount(prevState => prevState - 1)
           }, 1000);
        }
        if(timeCount === 0){
            setShowReport(true);
            generateReport(userAccuracy, userWpmScore, level);
        }
        if(testStarted === false && showReport === false){
            testRestartedAt !== 0 ? setTimeCounter(testRestartedAt) : setTimeCounter(60);  
        }
    },[testStarted, timeCount]);
        if(context.isLoggedIn === true){
            return (
              <React.Fragment>
                <Navbar />
                <div className="tester" style={{ maxWidth: "100%" }}>
                  <h1 className="text-center text-theme fw-bold">Typing Test</h1>
                  <p className="text-center my-3">
                    Start typing in the below box to know your best Words Per
                    Minute Score.
                  </p>
                  <div className="container-fluid tester-body d-flex justify-content-center">
                    {!showReport && (
                      <div className="col-sm-10">
                        <div className="float-end ms-4" id="statistics">
                          
                          <div className="col-sm-12 row m-0 mt-4 d-flex float-end flex-column" style={{gap: "1rem"}}>
                            <div className="col-sm-12 bg-white display-card text-center p-3">
                              <p className="h6">Accuracy</p>
                              <span className="fw-bold h5">
                                {userAccuracy > 0
                                  ? userAccuracy + " %"
                                  : 0 + " %"}
                              </span>
                            </div>
                            <div className="col-sm-12 bg-white display-card text-center p-3">
                              <p className="h6">Words/min</p>
                              <span className="fw-bold h5">
                                {userWpmScore > 0
                                  ? userWpmScore + " WPM"
                                  : 0 + " WPM"}
                              </span>
                            </div>
                            <div className="col-sm-12 bg-white display-card text-center p-3">
                              <p className="h6">Errors</p>
                              <span className="fw-bold h5">
                                {incorrectWords}
                              </span>
                            </div>
                            <button className='btn btn-theme text-white py-2 my-auto' onClick={resetTest} style={{fontSize: "1.2rem"}}>Reset Test</button>
                          </div>
                        </div>
                        <div className="row justify-content-center menu-row mt-2">
                        <div className="circular-counter text-center d-flex justify-content-center col-sm-3">
                            <svg
                              className="progress-ring-basic"
                              height="120"
                              width="120"
                            >
                              <circle
                                className="progress-ring__circle__basic"
                                strokeWidth="6"
                                fill="transparent"
                                r="50"
                                cx="60"
                                cy="60"
                                strokeLinecap="round"
                                id="circle2"
                                stroke="#8a2be2"
                                style={{
                                  strokeDasharray: 314.159,
                                  strokeDashoffset: 0,
                                }}
                              ></circle>
                            </svg>
                            <span className="fw-bold time-counter">
                              {timeCount > 0 ? timeCount : timeCount}s
                            </span>
                        </div>
                        <div className="d-flex py-5 col-sm-5 align-items-center col-12" style={{maxHeight: "50px", width: "fit-content"}}>
                            <p className="mr-1 pt-2 h5 my-auto">Time Modes:</p>
                            <button
                              className="btn mx-2 my-auto menu-btn"
                              id="level0"
                              onClick={() => setTimeCounter(60)}
                            >
                              1 Minute
                            </button>
                            <button
                              className="btn mx-2 my-auto menu-btn"
                              id="level1"
                              onClick={() => setTimeCounter(180)}
                            >
                              3 Minute
                            </button>
                            <button
                              className="btn mx-2 my-auto menu-btn"
                              id="level2"
                              onClick={() => setTimeCounter(300)}
                            >
                              5 Minute
                            </button>
                            
                        </div>
                        </div>
                        <div className="row justify-content-center task-row mt-4">
                          <div className="task-card">
                            <div className="word-section">
                              {requiredWords[level].wordset.map(
                                (requiredWord) => (
                                  <span
                                    className="requiredWord"
                                    id={requiredWord.id}
                                    key={requiredWord.id}
                                  >
                                    {requiredWord.word}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row input-row mt-4">
                          <input
                            className="form-control mx-auto user-typebox"
                            placeholder="Start Typing..."
                            onKeyDown={userInputHandler}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {showReport === true && (
                  <div className="container" style={{ maxWidth: "50rem", height: "25rem"}}>
                    <div id="cards_landscape_wrap-2" className='h-100'>
                      <div className="container h-100">
                        <div className="row h-100">
                          <div className="col-xs-12 h-100 p-0">
                              <div className="card-flyer h-100">
                                <div className="text-box row m-0 p-4 h-100">
                                  <div className="image-box col-sm-4 p-0">
                                    <img
                                      src="https://www.downloadclipart.net/large/award-ribbon-badge-transparent-png.png"
                                      alt="img"
                                      width="100%"
                                    />
                                  </div>
                                  <div className="text-container col-sm-8 p-3">
                                    <h3 className='fw-bold h3 py-2 text-theme'>Thank you for taking the test!</h3>
                                    <div className='pt-4'>
                                        <h4> You Typed with a speed of &nbsp;
                                            <span className='text-theme'>{userWpmScore > 0 ? userWpmScore + " WPM" : 0 + " WPM"}.</span>
                                        </h4>
                                        <h5>The Accuracy of your typing was &nbsp;
                                            <span className='text-primary'>{userAccuracy > 0 ? userAccuracy + " %" : 0 + " %"}</span>
                                        </h5>
                                    </div>
                                    <h6 className='text-warning my-3'>Check your Inbox for complete Report of your Test.</h6>
                                    <div className='mt-3'>
                                    <p className='py-3'>You can do better on your next turn. Click below to take the test again!</p>
                                    <button className='btn btn-theme px-3 py-2 text-white' onClick={resetTest}>Reappear Test</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
        }else{
            return(
               <Navigate to="/"/>
            )
        }
    }
 
export default Tester;