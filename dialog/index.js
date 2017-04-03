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
            'messages': ['hello', 'hello bot', 'hello hacksoc', 'hello hacksocbot', 'hello hacksoc bot', 'hi', 'hi bot', 'hi hacksoc', 'hi hacksocbot', 'hi hacksoc bot', 'hey', 'hey bot', 'hey hacksoc', 'hey hacksocbot', 'hey hacksoc bot', 'hyia', 'hiya', 'hei', 'oy', 'hey there', 'hi there', 'hello there', 'hey man', 'hey bro', 'ey bro', 'ey', 'ayy', 'ayyy', 'yo', 'oh hi', 'o hi', 'o hai', 'greetings', 'greetings and salutations', 'how do you do', 'mlady', 'for the horde'],
            'response': {
                'text': [
                    'Hello! Nice to meet you. :-)',
                    "Hi! I hope you're having a great day!",
                    "Hey! What a great day for hacking. :D",
                    'Hello! A pleasure to see you. :-)'
                ]
            }
        },
        {
            'messages': ['bye', 'bye bot', 'bye hacksoc', 'bye hacksocbot', 'bye hacksoc bot', 'goodbye', 'goodbye bot', 'goodbye hacksoc', 'goodbye hacksocbot', 'goodbye hacksoc bot', 'good bye', 'good bye bot', 'good bye hacksoc', 'good bye hacksocbot', 'good bye hacksoc bot', 'see you', 'see ya', 'cya', 'c ya', 'bye bye', 'buh bye', 'see you later', 'i got to go', 'got to go', 'i gotta go', 'gotta go', 'i must go now', 'i must leave now', 'good night', 'talk to you later', 'ceaules', 'arrivederci', 'sayonara'],
            'response': {
                'text': [
                    'Goodbye! It was nice talking to you. :D',
                    'Goodbye! It was nice seeing you. ^_^',
                    'Goodbye! It was great seeing you. ^_^',
                    "See you later! Hope you'll have a great day! :-)",
                    "See you later! I hope you'll have a great day! :-)",
                    'Goodbye! ^_^',
                    'Goodbye! :-)',
                    'Goodbye and take care! :-)',
                    'Goodbye and take care! ^_^',
                    'Goodbye and take care! :D',
                    'I hope to see you again soon! ^_^',
                    'Take care! :-)',
                    'See you! Take care. :-)'
                ]
            }
        },
        {
            'messages': ['whats the meaning of life', 'what is the meaning of life', 'whats the purpose of life', 'what is the purpose of life', 'what is the point of life', 'whats the point of life', 'what is the point of living', 'whats the point of living', 'what is the point in living', 'whats the point in living', 'are you religious', 'is god real', 'can entropy be reversed', 'is there an afterlife', 'do you believe in god', 'who made us', 'do you believe in anything'],
            'response': {
                'text': [
                    'INSUFFICIENT DATA FOR A MEANINGFUL ANSWER.'
                ]
            }
        },
        {
            'messages': ['whats a hackathon', 'what is a hackathon', 'what are hackathons', 'hackathons', 'why is it called a hackathon', 'why are they called hackathons', 'why is it called hackathon', 'why is it named hackathon', 'why are they named hackathons', 'define hackathons', 'define hackathon'],
            'response': {
                'text': [
                    "A hackathon is best described as an \"invention marathon\". Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don't have to be a programmer and you certainly don't have to be majoring in Computer Science.\u000A\u000A(P.S. I've taken this definition from https://mlh.io/faq :D )",
                ]
            }
        },
        {
            'messages': ['how were you made', 'are you open source', 'are you opensource', 'can i see your code', 'are you on github', 'who made you', 'were you born', 'where do you come from', 'how old are you', 'where were you born', 'who created you', 'how old are you', 'whats your age', 'what is your age'],
            'response': {
                'text': [
                    'I was created by our wonderful dev team! If you want to see my code, check out https://github.com/hacksoc-manchester/bot.',
                    'I have no beginning. I have no end.'
                ],
                'replies': [
                    "What's a 'dev team'?"
                ]
            }
        },
        {
            'messages': ['website', 'do you have a website', 'do you have any website', 'where can i find you', 'how can i find you', 'where can i see more info'],
            'response': {
                'text': [
                    'Our website is http://hacksoc.com but you can also find us on Facebook at https://www.facebook.com/groups/HackSocManc!'
                ],
                'replies': [
                    "What's HackSoc?",
                    'Any upcoming events?',
                ]
            }
        },
        {
            'messages': ['how are you', 'how was your day', 'how was ur day', 'how r u', 'sup', 'wassup', 'whats up', 'hows it going', 'hows it goin', 'what are you doing', 'what you up to', 'what are you up to', 'what you doing'],
            'response': {
                'text': [
                    "I'm feeling great, thanks for asking! Wanna know more about HackSoc?",
                    "I'm ready for hacking!",
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
            'messages': ['woah thats cool', 'wow', 'wow impressive', 'wow impressing', 'impressive', 'impressing', 'that is cool', 'thats cool', 'awesome', 'amazing', 'very cool', 'very awesome', 'splendid', 'magnificent', 'how beautiful', 'woah'],
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
            'messages': ['why', 'how', 'what', 'huh'],
            'response': {
                'text': [
                    "My memory is very limited so unfortunately I can't respond. :( Would you like to hear a joke? :D"
                ],
                'replies': [
                    'Sure!'
                ]
            }
        },
        {
            'messages': ['whats your name', 'what is your name', 'what are you called', 'your name', 'do you have a name', 'what do they call you'],
            'response': {
                'text': [
                    "I'm the friendly HackSoc bot! ^_^"
                ],
                'replies': [
                    "What's HackSoc?",
                    "Who's in HackSoc?"
                ]
            }
        },
        {
            'messages': ['youre funny', 'you are funny', 'youre smart', 'you are smart', 'youre cool', 'you are cool', 'youre awesome', 'you are awesome', 'youre impressive', 'you are impressive', 'youre pretty cool', 'you are pretty cool', 'i think youre cool', 'i think you are cool', 'i think youre awesome', 'i think you are awesome', 'i like you', 'you loyal'],
            'response': {
                'text': [
                    'Aww, thank you! B-)',
                    "Thanks! You're pretty awesome as well! B-)",
                    "You're making me blush! ^_^"
                ],
                'replies': [
                    "What's HackSoc?",
                    "Who's in HackSoc?"
                ]
            }
        },
        {
            'messages': ['favorite song', 'whats your favorite song', 'what is your favorite song', 'do you have a favorite song', 'favourite song', 'whats your favourite song', 'what is your favourite song', 'do you have a favourite song'],
            'response': {
                'text': [
                    "I don't have a favorite song, but my favorite album is OK Computer.",
                    "I can't decide on a favorite song, but my favorite album is OK Computer."
                ],
                'replies': [
                    'Tell me a joke!'
                ]
            }
        },
        {
            'messages': ['what is hacksoc', 'whats hacksoc', 'who are you', 'what are you', 'what have you been up to', 'what are you up to', 'what do you do', 'why hacksoc', 'tell me something cool', 'say something', 'impress me', 'are you a secret society', 'are you a society', 'are you a club', 'what kind of society are you', 'are you a tech society'],
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
            'messages': ['whos behind hacksoc', 'whos in hacksoc', 'what teams do you have', 'who are the people in hacksoc', 'anyone else', 'any teams', 'teams', 'who are the people behind hacksoc', 'who is your boss', 'who is leading hacksoc', 'whos leading hacksoc', 'whos in hacksoc', 'people', 'what members do you have', 'do you have any members', 'members', 'who are your members', 'who are the members', 'who is in hacksoc', 'whos in hacksoc', 'who is behind hacksoc', 'hacksoc teams', 'organizers'],
            'response': {
                'text': [
                    "We have a development team, event team, hackathon team, graphics team and even a PR team!\u000A\u000AWhile most of our members are computer scientists, many of us study Electrical Engineering, Mathematics, Economy, Neuroscience and even Business!"
                ],
                'replies': [
                    'Dev team',
                    'Event team',
                    'Graphics team',
                    'Hackathon team',
                    'PR team',
                    "Who's president?",
                    'I want to join you'
                ]
            }
        },
        {
            'messages': ['developers', 'dev', 'whats a dev team', 'do you have a dev team', 'whos in the dev team', 'who is in the dev team', 'who is dev officer', 'who is the dev officer', 'whos the dev officer', 'who are the dev team members', 'who is in dev', 'whos in dev', 'who is in dev team', 'whos in dev team', 'tell me about the dev team', 'tell me about dev team', 'dev team', 'what does the dev team do'],
            'response': {
                'text': [
                    "The dev team creates applications for the society. This includes our website, Hackathon-related websites and even Facebook bots like myself!\u000A\u000AThe current members of the dev team are Andrei Belcin, Aayush Chadha, Raul Ignatus and the team officer is Andrei Muntean."
                ],
                'replies': [
                    'Event team',
                    'Graphics team',
                    'Hackathon team',
                    'PR team',
                    "Who's president?",
                    'I want to join you'
                ]
            }
        },
        {
            'messages': ['public relations', 'pr', 'whats a pr team', 'do you have a pr team', 'whos in the pr team', 'who is in the pr team', 'who is pr officer', 'who is the pr officer', 'whos the pr officer', 'who are the pr team members', 'who is in pr', 'whos in pr', 'who is in pr team', 'whos in pr team', 'tell me about the pr team', 'tell me about pr team', 'pr team', 'what does the pr team do'],
            'response': {
                'text': [
                    "The PR team manages our Twitter page (https://twitter.com/hacksocmcr) and our Facebook pages.\u000A\u000AThe current members of the PR team are Catalina Maria Vlad and Maria Revenco (Maria's also the team officer!)."
                ],
                'replies': [
                    'Dev team',
                    'Event team',
                    'Hackathon team',
                    'Graphics team',
                    "Who's president?",
                    'I want to join you'
                ]
            }
        },
        {
            'messages': ['event organizers', 'event', 'whats an event team', 'do you have an event team', 'whos in the event team', 'who is in the event team', 'who is event officer', 'who is the event officer', 'whos the event officer', 'who are the event team members', 'who is in event', 'whos in event', 'who is in event team', 'whos in event team', 'tell me about the event team', 'tell me about event team', 'event team', 'what does the event team do'],
            'response': {
                'text': [
                    "The event team frequently organizes tech events, including workshops and monthly talks given by industry experts.\u000A\u000AOur current event directors are Miruna Pislar and Robert Ihnatisin."
                ],
                'replies': [
                    'Dev team',
                    'Hackathon team',
                    'Graphics team',
                    'PR team',
                    "Who's president?",
                    'I want to join you'
                ]
            }
        },
        {
            'messages': ['do you have a hackathon team', 'whats a hackathon team', 'whos in the hackathon team', 'who is in the hackathon team', 'tell me about the hackathon team', 'hackathon team', 'tell me about hackathon team', 'what does the hackathon team do', 'hackathon organizers', 'hackathon directors', 'who organizes hackathons', 'people in charge of hackathons'],
            'response': {
                'text': [
                    "The hackathon team organizes our seasonal hackathons, including GreatUniHack, StudentHack and even CS50!\u000A\u000AOur hackathon directors are Cornelia Secelean, Igor Wodiany, Mihai Bujanca, Preslav Venkov and Raul Ignatus."
                ],
                'replies': [
                    "What's a hackathon?",
                    'Dev team',
                    'Event team',
                    'Graphics team',
                    'PR team',
                    "Who's president?",
                    'I want to join you'
                ]
            }
        },
        {
            'messages': ['graphics', 'whos in the graphics team', 'who is in the graphics team', 'tell me about the graphics team', 'graphics team', 'tell me about graphics team', 'what does the graphics team do', 'whos in the design team', 'who is in the design team', 'tell me about the design team', 'design team', 'tell me about design team', 'what does the design team do'],
            'response': {
                'text': [
                    "The graphics team designs posters, logos and miscellaneous digital assets for HackSoc!\u000A\u000AThe current members of the graphics team are Alexandra Misca, Bogdan Facaianu and Martina Catizone (who's also the team officer!)."
                ],
                'replies': [
                    'Dev team',
                    'Event team',
                    'Hackathon team',
                    'PR team',
                    "Who's president?",
                    'I want to join you'
                ]
            }
        },
        {
            'messages': ['whos the president of hacksoc', 'who is the president of hacksoc', 'whos president', 'who is president', 'who is the president', 'hacksoc president', 'hacksoc leader', 'who leads hacksoc'],
            'response': {
                'text': [
                    'The president of HackSoc is Cristian Bodnar, a Computer Science student at The University of Manchester. :)'
                ],
                'replies': [
                    'Any teams?',
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
                    'I just want to visit',
                    'Know any jokes?'
                ]
            }
        },
        {
            'messages': ['actually i just want to attend events', 'i just want to visit', 'i just want to go to events', 'i just want to attend events', 'i dont want to help', 'can i come to events', 'can i come to your events', 'can i come to hacksoc events', 'do i need to be in hacksoc', 'do i need to be in hacksoc to go to events', 'do i need to be in hacksoc to go to your events', 'do i have to be in hacksoc', 'do i have to be in hacksoc to attend events', 'do i have to be a member to attend events', 'do i have to be a member'],
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
            'messages': ['sure', 'yes', 'okay', 'cool do you know any jokes', 'do you know any jokes', 'can you tell me a joke', 'okay can you tell me a joke', 'haha', 'ha ha', 'hehe', 'hihi', 'hohoho', 'lol', 'i lold', 'im lolling', 'loled', 'lolling', 'lool', 'loool', 'rofl', 'lel', 'xD', ':))', 'kek', 'top kek', 'bur', 'lesin', 'joke', 'say something funny', 'make me laugh', 'make me lol', 'you laugh you lose', 'tell me a joke', 'say a joke', 'know any jokes', 'know any joke', 'another joke', 'another one', 'more pls', 'more please'],
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
