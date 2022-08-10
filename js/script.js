const togglers = document.querySelectorAll('.toggle')


function resetQuestions(){
    const questions = document.querySelectorAll('.question')
    questions.forEach( (question) => {
        if (question.classList.contains('bold')){
            question.classList.remove('bold')
        }
    })
    const answers = document.querySelectorAll('.answer')
    answers.forEach( (answer) => {
        if(!answer.classList.contains('hidden')){
            answer.classList.add('hidden')
        }
    })
    togglers.forEach((toggle) => {
        if (toggle.classList.contains('rotate')){
            toggle.classList.remove('rotate')
        }
    })

}

togglers.forEach((toggle) => {
    toggle.addEventListener('click', (e)=> {

        resetQuestions()
        e.target.classList.add('rotate')
        e.target.previousElementSibling.classList.add('bold')
        e.target.previousElementSibling.firstChild.nextElementSibling.classList.remove('hidden')
        e.target.previousElementSibling.firstChild.nextElementSibling.classList.add('light')

    })
})