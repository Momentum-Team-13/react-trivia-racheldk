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
        [x] category from data
    [x] state: question 
    [x] state: index 
    [x] display one question 
        [x] and it's answers 
    [x] make answers clickable
    [x] fixed: answers take 2 clicks to fully register - something about lifecycles again?     
    [x] click launches compare function 
    [x] result of compare function updates answer state
[x] correct component
    [x] make file
    [x] connect file 
    [x] Fixed: Correct component already showing when question loads     
    [x] next button
    [x] button clicked goes to next question 
    [x] pass as props: index, statechanger function
[x] incorrect component  
    [x] make file
    [x] connect file 
    [x] next button
    [x] button clicked goes to next question 
    [x] pass as props: index, statechanger function 
[x] quiz can end 
    [x] new "screen" with:
        [x] if index = 9, show screen. or if index <9 show question screen 
        [x] game over
        [x] total score
        [x] start new game button (to return to first screen...by resetting selectedCat in CategoryList)
[ ] shuffle answers  
    (see bookmarked articles)
    [ ] move answer things to a separate component from the question? or have a giant component? 
    [ ] make array of correct and incorrect answers 
    [ ] randomize that array 
    [ ] randomizedArray.map() to render answers
[ ] make loading screen for when data isn't received yet 
[ ] deploy
[ ] style


[ ] disable buttons after user chooses answer? 
      

## Goals in order: 
[x] list of categories from the Trivia API showing up on the page.
[x] trivia categories selectable. 
    [x] request 10+ questions for that category
    [x] limit to multiple choice (for now)
[x] show the questions one at a time w/ answers
    [x] just show the first question to start with.
    [x] show the answer choices for that question (any order)
    [x] user sees the next question by clicking a button
[x] user can select their answer choice. 
    ~~[ ] NEED: answer they selected~~
    ~~[ ] NEED: correct answer~~
    [x] compare correct and chosen answers 
[x] Tell the user if they got the question right.
    [x] OR keep track of questions answered correctly and tally them at the end (something like, “You got 6 out of 10 questions right!”).
[x] Have a way for the quiz to end and optionally go back to the list of categories to start another quiz.
[ ] Deployed on Netlify

## Requirements
[x] A user can select a category and take a quiz in that category. A quiz should have at least 10 questions in it. 
[ ] A quiz shows the user one question at a time. The possible answers should be shown in a random order so that the correct answer isn't in the same place every time.
[x] The application tracks the user's answers and shows results. You might do this as they go through each question or at the end, or both.
[x] Your React application should be broken up into 3 or more components.
[x] Your application should have two or more "screens." In a traditional web application, we'd think of these as different pages or views.
[x] Your application uses React's state to manage data.
[x] Your application uses Open Trivia Database's API.
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


