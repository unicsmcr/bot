module.exports = {
    'default_response': {
        'text': [
            'Hey there! How may I help you?',
            'Hello! How may I help you?'
        ],
        'replies': [
            'What can you do?',
            "What's HackSoc?",
            'Any upcoming events?'
        ]
    },
    'options': [
        {
            'messages': ['hello', 'hi', 'hey', 'hyia', 'hei', 'oy', 'greetings', 'how do you do', 'mlady', 'for the horde'],
            'response': {
                'text': [
                    'Hello! Nice to meet you. :-)',
                    "Hi! I hope you're having an awesome day!"
                ]
            }
        },
        {
            'messages': ['what is hacksoc', 'whats hacksoc', 'who are you', 'what are you', 'what do you do', 'why hacksoc'],
            'response': {
                'text': [
                    "We're a student-led tech society that's based in Manchester. We'd be very happy if you dropped by at our events! :-)"
                ],
                'replies': [
                    'Any upcoming events?',
                    "Who's behind HackSoc?",
                    'I want to join HackSoc'
                ]
            }
        },
        {
            'messages': ['haha', 'ha ha', 'hehe', 'hihi', 'hohoho', 'lol', 'lool', 'loool', 'rofl', 'lel', 'xD', ':))', 'kek', 'top kek', 'bur', 'lesin', 'joke', 'tell me a joke', 'say a joke', 'know any jokes', 'know any joke'],
            'response': {
                'text': [
                    "Q: Why do programmers mix up Halloween and Christmas? \u000A A: Because Oct 31 equals Dec 25! (Bet you've never heard this one before!)",
                    '- "Knock Knock!" \u000A - "Who is it?" \u000A - "Please don\'t turn off your PC. Installing update 1 of 9001..." ',
                    '- "Knock Knock!" \u000A - "Who is it?" \u000A [Very short pause] \u000A Segmentation fault',
                    '- "Knock Knock!" \u000A - "Is it Linux?" \u000A - "I\'d just like to interject for a moment. What you\'re referring to as Linux, is in fact, GNU/Linux, or as I\'ve recently taken to calling it, GNU plus Linux."',                    
                ]
            }
        },
    ]
}