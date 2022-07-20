# Things to Do! 
[x] setup: 
    [x] delete unnecessary files 
    [x] get something showing up on the page 
    [x] update README
    [x] update Notes: requirements
[x]  explore API: 
    [x] kinds of data to work with
    [x] different options 
[x] wireframe design
    [x] category "screen" 
    [x] question "screen"
    [x] correct/incorrect answer
[x] plan components
[x] list of categories from the Trivia API showing up on the page.
    [x] CategoryList component 
    [x] ajax request made 
    [x] data rendered on page 
[x] trivia categories selectable
    [x] each category button
    [x] button event handler to change selection state
    [x] ternary: selection state ? go to questions screen (send selected category for API request): category list screen 
[ ] question component 
    [x] make file
    [x] connect file
    [x] pass in selectedCat as props 
    [ ] axios request for questions 
        [x] hardcode category
        [ ] category from data
    [ ] state: question 
    [ ] state: index 
    [ ] display one question 
        [ ] and it's answers 
    [ ] make answers clickable 
    [ ] click launches compare function 
    [ ] result of compare function render correct or incorrect screen 
[ ] correct component
    [ ] make file
    [ ] connect file 
    [ ] next button
    [ ] button clicked goes to next question 
    [ ] pass as props: question, index
[ ] incorrect component  
    [ ] make file
    [ ] connect file 
    [ ] next button
    [ ] button clicked goes to next question 
    [ ] pass as props: question, index   

## Goals in order: 
[x] list of categories from the Trivia API showing up on the page.
[ ] trivia categories selectable. 
    [ ] request 10+ questions for that category
    [ ] limit to multiple choice (for now)
[ ] show the questions one at a time w/ answers
    [ ] just show the first question to start with.
    [ ] show the answer choices for that question (any order)
    [ ] user sees the next question by clicking a button
[ ] user can select their answer choice. 
    [ ] NEED: answer they selected
    [ ] NEED: correct answer
    [ ] compare correct and chosen answers 
[ ] Tell the user if they got the question right.
    [ ] OR keep track of questions answered correctly and tally them at the end (something like, “You got 6 out of 10 questions right!”).
[ ] Have a way for the quiz to end and optionally go back to the list of categories to start another quiz.


## Requirements
[ ] A user can select a category and take a quiz in that category. A quiz should have at least 10 questions in it. 
[ ] A quiz shows the user one question at a time. The possible answers should be shown in a random order so that the correct answer isn't in the same place every time.
[ ] The application tracks the user's answers and shows results. You might do this as they go through each question or at the end, or both.
[ ] Your React application should be broken up into 3 or more components.
[ ] Your application should have two or more "screens." In a traditional web application, we'd think of these as different pages or views.
[ ] Your application uses React's state to manage data.
[ ] Your application uses Open Trivia Database's API.
[ ] Your application is styled.



## API Notes
- (Amy said we don't need tokens)
- category lookup: https://opentdb.com/api_category.php
    {
    "trivia_categories" [
        {
            "id': 9,
            "name": "General Knowledge"
        },
        ]
    }
- questions from a category: https://opentdb.com/api.php?amount=10&category=9
    {
	"response_code": 0,
	"results": [
		{
			"category": "General Knowledge",
			"type": "multiple",
			"difficulty": "medium",
			"question": "According to the BBPA, what is the most common pub name in the UK?",
			"correct_answer": "Red Lion",
			"incorrect_answers": [
				"Royal Oak",
				"White Hart",
				"King&#039;s Head"
			]
		},}        
- use API helper https://opentdb.com/api_config.php
options: 
- number of questions (10-50)
- category
- difficulty (any, easy, med, hard)
- type (any, mc, t/f)


