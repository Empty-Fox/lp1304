
    var avatar = 'images/avatar.png';
    var lines = [
        {
            "text": "Hi, my name is Emma. I'm your personal assistant",
            "wait": 1,
            "interface": null,
            "question": null,
            "next_true": null,
            "next_false": null
        },
        {
            "text": "<strong>I have great news</strong> <br> Now you have the opportunity to register for free on the largest dating site. We have many profiles of women who are single and looking for relationships.",
            "wait": 1,
            "interface": "searchgender",
            "question": "searchgender",
            "next_true": 10,
            "next_false": 10
        },
        {
            "text": "I will help you register and after registration I show you a photo of women who want to meet. ",
            "wait": 3,
            "interface": "searchgender",
            "question": "searchgender",
            "next_true": 10,
            "next_false": 10
        },
        {
            "text": "if you are ready, click continue",
            "wait": 20,
            "interface": "searchgender",
            "question": "searchgender",
            "next_true": 10,
            "next_false": 10
        },
        {
            "text": "Let's go)! I'm sure you'll find a special girl",
            "wait": 20,
            "interface": "searchgender",
            "question": "searchgender",
            "next_true": 10,
            "next_false": 10
        },
        {
            "text": "I'm waiting ...",
            "wait": 3,
            "interface": "searchgender",
            "question": "searchgender",
            "next_true": 10,
            "next_false": 10
        },
        {
            "text": "?",
            "wait": 0,
            "interface": "searchgender",
            "question": "searchgender",
            "next_true": 10,
            "next_false": 10
        },
        {
            "text": "СomeOn",
            "wait": 0,
            "interface": "searchgender",
            "question": "searchgender",
            "next_true": 10,
            "next_false": 10
        },
        {
            "text": "<strong>Super<\/strong>",
            "wait": 1,
            "interface": "city",
            "question": "city",
            "next_true": 20,
            "next_false": 15
        },
        {

            "text": "Before registering I will ask you short and quick questions to make sure you are serious about dating",
            "wait": 1,
            "interface": "city",
            "question": "city",
            "next_true": 20,
            "next_false": 15
        },
        {
            "text": "<strong> QUESTION #1 </strong>",
            "wait": 1,
            "interface": "city",
            "question": "city",
            "next_true": 20,
            "next_false": 15
        },
        {
            "text": "Are you already 18?",
            "wait": 2,
            "interface": "city",
            "question": "city",
            "next_true": 20,
            "next_false": 15
        },
        {
            "text": "Click YES or NO",
            "wait": 30,
            "interface": "city",
            "question": "city",
            "next_true": 20,
            "next_false": 15
        },
        {
            "text": "?",
            "wait": 30,
            "interface": "city",
            "question": "city",
            "next_true": 20,
            "next_false": 16
        },
        {
            "text": "You must click the button to continue",
            "wait": 30,
            "interface": "city",
            "question": "city",
            "next_true": 20,
            "next_false": 17
        },
        {
            "text": "",
            "wait": 0,
            "interface": "city",
            "question": "city",
            "next_true": 20,
            "next_false": 15
        },
        {
            "text": "",
            "wait": 0,
            "interface": "city",
            "question": "city",
            "next_true": 20,
            "next_false": 20
        },
        {
            "text": "",
            "wait": 0,
            "interface": "city",
            "question": "city",
            "next_true": 20,
            "next_false": 20
        },
        {
            "text": "<strong>QUESTION #2</strong>",
            "wait": 1,
            "interface": "date",
            "question": "date",
            "next_true": 30,
            "next_false": 26
        },
        {
            "text": "Do you want serious relationship?",
            "wait": 22,
            "interface": "date",
            "question": "date",
            "next_true": 30,
            "next_false": 26
        },
        {
            "text": "If you are ready for a serious relationship, click YES, If you are not ready - to click NO",
            "wait": 3,
            "interface": "date",
            "question": "date",
            "next_true": 30,
            "next_false": 26
        },
        {
            "text": "So...  what is your choice?",
            "wait": 0,
            "interface": "date",
            "question": "date",
            "next_true": 30,
            "next_false": 26
        },
        {
            "text": "?",
            "wait": 0,
            "interface": "date",
            "question": "date",
            "next_true": 30,
            "next_false": 26
        },
        {
            "text": "",
            "wait": 0,
            "interface": "date",
            "question": "date",
            "next_true": 30,
            "next_false": 26
        },
        {
            "text": "",
            "wait": 0,
            "interface": "date",
            "question": "date",
            "next_true": 30,
            "next_false": 27
        },
        {
            "text": "",
            "wait": 0,
            "interface": "date",
            "question": "date",
            "next_true": 30,
            "next_false": 28
        },
        {
            "text": "",
            "wait": 0,
            "interface": "date",
            "question": "date",
            "next_true": 30,
            "next_false": 29
        },
        {
            "text": "",
            "wait": 0,
            "interface": "date",
            "question": "date",
            "next_true": 30,
            "next_false": 26
        },
        {
            "text": "<strong>QUESTION #3</strong>",
            "wait": 1,
            "interface": "gender",
            "question": "gender",
            "next_true": 40,
            "next_false": 40
        },
        {
            "text": "How do you feel if a woman makes the first step?",
            "wait": 20,
            "interface": "gender",
            "question": "gender",
            "next_true": 40,
            "next_false": 40
        },
        {
            "text": "Just click on the button GOOD or BAD",
            "wait": 20,
            "interface": "gender",
            "question": "gender",
            "next_true": 40,
            "next_false": 40
        },
        {
            "text": "Come on, we are already at the finish line",
            "wait": 20,
            "interface": "gender",
            "question": "gender",
            "next_true": 40,
            "next_false": 40
        },
        {
            "text": "?",
            "wait": 0,
            "interface": "gender",
            "question": "gender",
            "next_true": 40,
            "next_false": 40
        },
        {
            "text": "",
            "wait": 0,
            "interface": "gender",
            "question": "gender",
            "next_true": 40,
            "next_false": 40
        },
        {
            "text": "",
            "wait": 0,
            "interface": "gender",
            "question": "gender",
            "next_true": 40,
            "next_false": 40
        },
        {
            "text": "",
            "wait": 0,
            "interface": "gender",
            "question": "gender",
            "next_true": 40,
            "next_false": 40
        },
        {
            "text": "",
            "wait": 0,
            "interface": "gender",
            "question": "gender",
            "next_true": 40,
            "next_false": 40
        },
        {
            "text": "",
            "wait": 0,
            "interface": "gender",
            "question": "gender",
            "next_true": 40,
            "next_false": 40
        },
        {
            "text": "<strong>THANKS!</strong>",
            "wait": 1,
            "interface": "join",
            "question": "join",
            "next_true": 50,
            "next_false": 45
        },
        {
            "text": "We coped well",
            "wait": 1,
            "interface": "join",
            "question": "join",
            "next_true": 50,
            "next_false": 45
        },
        {
            "text": "Now, all you have to do is create your profile and start dating girls from our site",
            "wait": 5,
            "interface": "join",
            "question": "join",
            "next_true": 50,
            "next_false": 45
        },
        {
            "text": "Good luck and nice dating )",
            "wait": 0,
            "interface": "join",
            "question": "join",
            "next_true": 50,
            "next_false": 45
        },
        {
            "text": "",
            "wait": 0,
            "interface": "join",
            "question": "join",
            "next_true": 50,
            "next_false": 45
        },
        {
            "text": "",
            "wait": 0,
            "interface": "join",
            "question": "join",
            "next_true": 50,
            "next_false": 46
        },
        {
            "text": "",
            "wait": 0,
            "interface": "join",
            "question": "join",
            "next_true": 50,
            "next_false": 47
        },
        {
            "text": "",
            "wait": 0,
            "interface": "join",
            "question": "join",
            "next_true": 50,
            "next_false": 45
        },
        {
            "text": "",
            "wait": 0,
            "interface": "join",
            "question": "join",
            "next_true": 50,
            "next_false": 45
        },
        {
            "text": "",
            "wait": 0,
            "interface": "join",
            "question": "join",
            "next_true": 50,
            "next_false": 45
        }
    ];

