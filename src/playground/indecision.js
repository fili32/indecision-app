console.log('App.js is running!')

// JSX - Javascript XML
// var element=<h1>This is JSX from app.js!</h1>
// only render the subtitle (and p tag) if subtitle exist
// render new p tag - if options.length > 0 "Here are yozr options" "No options"

const homepage = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options : [],
    decision: ''
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
      homepage.options.push(option);
      console.log(homepage.options)
      render();
      e.target.elements.option.value = '';
    }
    console.log('onSubmit')
} 

const removeAll = () => {
    console.log('before', homepage.options)
    homepage.options = []
    homepage.decision = ''
    render()
}

const onMakeDecision = () => {
    if (homepage.options.length>0) {
        const randomNum = Math.floor(Math.random() * homepage.options.length);
        homepage.decision = homepage.options[randomNum]
        render()
    }
}

const appRoot = document.getElementById('app');  

const render = () => {  
    const template = (
        <div>
            <h1>{homepage.title}</h1> 
            {homepage.subtitle && <p>{homepage.subtitle}</p>}
            {homepage.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
            <ol>
                {  
                    homepage.options.map((option) => <li key={homepage.options.indexOf(option)}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <button disabled={homepage.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={removeAll}>Remove All</button>
            {homepage.decision && <p>Do this: {homepage.decision}</p>}
        </div>
    ); 
    ReactDOM.render(template, appRoot)
}

render()