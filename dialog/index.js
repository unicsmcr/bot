module.exports = {
    'default_response': {
        'text': [
            'What would you like to know about?',
            'How may I help you?'
        ],
        'replies': [
            'What can you do?',
            "What's HackSoc?",
            'Any upcoming events?'
        ]
    },
    'options': [
        {
            'messages': ['what can you do', 'help', 'h', 'what can you tell me', 'i need help', 'how can you help me', 'whats your purpose', 'what is your purpose'],
            'response': {
                'text': [
                    "I can try to answer questions about HackSoc. I've just been created so my functionality is very limited, however in time I'll learn and get better! Pinky promise. ^_^"
                ],
                'replies': [
                    "What's HackSoc?",
                    'Any upcoming events?',
                    'Tell me a joke!'
                ]
            }
        },
        {
            'messages': ['hello', 'hi', 'hey', 'hyia', 'hiya', 'hei', 'oy', 'hey there', 'hi there', 'hello there', 'hey man', 'yo', 'oh hi', 'o hi', 'o hai', 'greetings', 'greetings and salutations', 'how do you do', 'mlady', 'for the horde'],
            'response': {
                'text': [
                    'Hello! Nice to meet you. :-)',
                    "Hi! I hope you're having a great day!",
                    "Hey! What a great day for hacking. :D"
                ]
            }
        },
        {
            'messages': ['whats the meaning of life', 'what is the meaning of life', 'are you religious', 'is god real', 'can entropy be reversed', 'is there an afterlife', 'do you believe in god', 'who made us', 'do you believe in anything'],
            'response': {
                'text': [
                    'INSUFFICIENT DATA FOR A MEANINGFUL ANSWER.'
                ]
            }
        },
        {
            'messages': ['how are you', 'how r u', 'sup', 'wassup', 'whats up', 'hows it going', 'hows it goin'],
            'response': {
                'text': [
                    "I'm feeling great, thanks for asking! Wanna know more about HackSoc?",
                    "I'm ready for hacking!"
                ]
            }
        },
        {
            'messages': ['how were you made', 'are you open source', 'are you opensource', 'can i see your code', 'are you on github', 'who made you', 'were you born', 'where do you come from', 'how old are you', 'where were you born', 'who created you', 'how old are you', 'whats your age', 'what is your age'],
            'response': {
                'text': [
                    'I was created by our wonderful dev team! If you want to see my code, check out https://github.com/hacksoc-manchester/bot.',
                    'I have no beginning. I have no end.'
                ]
            }
        },
        {
            'messages': ['what are you doing', 'what you up to', 'what are you up to', 'what you doing'],
            'response': {
                'text': [
                    "I'm thinking of doing some machine learning.",
                    "I'm doing some linear regression.",
                    "I'm in the middle of some calibrations.",
                    "I'm learning about logistic regression.",
                    "I'm studying support vector machines.",
                    "I'm implementing a convolutional neural network.",
                    "I'm trying to get a perceptron to generalize better.",
                    "I'm plotting some graphs.",
                    "I'm soloing Icecrown Citadel.",
                    "I'm reading about recurrent neural networks.",
                    "I'm building a neural turing machine.",
                    "I'm building my own version of AlphaGo.",
                    "I'm trying to figure out how Monte Carlo tree search works.",
                    "I'm implementing a quadratic algorithm for the traveling salesman problem."
                ],
                'replies': [
                    "I meant the society",
                    "Woah, that's cool!"
                ]
            }
        },
        {
            'messages': ['woah thats cool', 'wow', 'that is cool', 'thats cool', 'awesome', 'amazing', 'very cool', 'very awesome', 'splendid', 'magnificent', 'how beautiful', 'woah'],
            'response': {
                'text': [
                    'I know, right!? :D',
                    'It is! :D',
                    'I share your enthusiasm! :D'
                ],
                'replies': [
                    "What's HackSoc doing?",
                    "Woah, that's cool!"
                ]
            }
        },
        {
            'messages': ['what is hacksoc', 'whats hacksoc', 'who are you', 'what are you', 'what do you do', 'why hacksoc', 'tell me something cool', 'say something', 'impress me', 'are you a secret society', 'are you a society', 'are you a club', 'what kind of society are you', 'are you a tech society'],
            'response': {
                'text': [
                    "We're a student-led tech society that's based in Manchester. We'd be very happy if you dropped by at our events! :-)"
                ],
                'replies': [
                    'Any upcoming events?',
                    "Who's in HackSoc?",
                    'Can I join you?'
                ]
            }
        },
        {
            'messages': ['okay but whats hacksoc doing', 'whats hacksoc doing', 'what is hacksoc doing', 'i meant the society', 'i mean the society', 'i mean whats hacksoc doing', 'what about the society', 'any upcoming events', 'upcoming events', 'events', 'any events', 'tell me about events', 'tell me about the events', 'what events do you do', 'do you do events', 'any cool events', 'anything interesting', 'anything cool', 'any tech events', 'any cs events', 'any hardware events', 'hardware events'],
            'response': {
                'text': [
                    "We're currently working on more events for you to enjoy. Please check back in the near future! :-)"
                ],
                'replies': [
                    "Who's in HackSoc?",
                    'Can I join HackSoc?'
                ]
            }
        },
        {
            'messages': ['whos behind hacksoc', 'whos in hacksoc', 'what teams do you have', 'who are the people in hacksoc', 'who are the people behind hacksoc', 'who is your boss', 'who is leading hacksoc', 'whos leading hacksoc', 'whos in hacksoc', 'people', 'what members do you have', 'do you have any members', 'who is in hacksoc', 'whos in hacksoc', 'who is behind hacksoc', 'hacksoc teams', 'dev team', 'pr team', 'graphics team', 'organizers'],
            'response': {
                'text': [
                    "We have a development team, event team, hackathon team, graphics team and even a PR team!\u000A\u000AWhile most of our members are computer scientists, many of us study electrical engineering, mathematics, economy, neuroscience and even business!"
                ],
                'replies': [
                    'I want to join you'
                ]
            }
        },
        {
            'messages': ['i want to join hacksoc', 'can i join hacksoc', 'could i join you', 'could i join hacksoc', 'where do i sign up', 'i want to join you', 'can i join you', 'i want to help', 'how can i sign up', 'i want to join your society'],
            'response': {
                'text': [
                    "Awesome! Please join our Facebook group (https://www.facebook.com/groups/HackSocManc/) to get involved. :-) You can also contact one of our so-called 'team officers' (http://hacksoc.com/team) -- feel free to message them on Facebook!"
                ],
                'replies': [
                    'I just want to see events',
                    'Know any jokes?'
                ]
            }
        },
        {
            'messages': ['actually i just want to attend events', 'i just want to go to events', 'i just want to attend events', 'i dont want to help', 'can i come to events', 'can i come to your events', 'can i come to hacksoc events', 'do i need to be in hacksoc', 'do i need to be in hacksoc to go to events', 'do i need to be in hacksoc to go to your events', 'do i have to be in hacksoc', 'do i have to be in hacksoc to attend events', 'do i have to be a member to attend events', 'do i have to be a member'],
            'response': {
                'text': [
                    "Our events are open to *everyone! You don't have to be part of HackSoc to come, but we'd be very happy if you joined our Facebook group (https://www.facebook.com/groups/HackSocManc/)!\u000A\u000A* Most HackSoc events require you to be a student. Feel free to ask a HackSoc member if you're not sure!"
                ],
                'replies': [
                    'Say something funny'
                ]
            }
        },
        {
            'messages': ['cool do you know any jokes', 'do you know any jokes', 'can you tell me a joke', 'okay can you tell me a joke', 'haha', 'ha ha', 'hehe', 'hihi', 'hohoho', 'lol', 'i lold', 'im lolling', 'loled', 'lolling', 'lool', 'loool', 'rofl', 'lel', 'xD', ':))', 'kek', 'top kek', 'bur', 'lesin', 'joke', 'say something funny', 'make me laugh', 'make me lol', 'you laugh you lose', 'tell me a joke', 'say a joke', 'know any jokes', 'know any joke', 'another joke', 'another one', 'more pls', 'more please'],
            'response': {
                'text': [
                    "Q: Why do programmers mix up Halloween and Christmas? \u000A A: Because Oct 31 equals Dec 25! (Bet you've never heard this one before!)",
                    '- "Knock Knock!" \u000A- "Who is it?" \u000A- "Please don\'t turn off your PC. Installing update 1 of 9001..." ',
                    '- "Knock Knock!" \u000A- "Who is it?" \u000A[Very short pause] \u000ASegmentation fault',
                    '- "Knock Knock!" \u000A- "Is it Linux?" \u000A- "I\'d just like to interject for a moment. What you\'re referring to as Linux, is in fact, GNU/Linux, or as I\'ve recently taken to calling it, GNU plus Linux."',                    
                ]
            }
        },
    ]
};
