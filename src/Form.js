import { useRef } from "react";
import classes from'./form.module.css'
function Form(){
    const inputText=useRef();
    const selectLevel=useRef()
      function submitHandler(event){
        event.preventDefault()
        const enteredName=inputText.current.value
        const selectedLevel=selectLevel.current.value

        console.log(`entered name:${enteredName}`)
        console.log(`selected level:${selectedLevel}`)
      }
   return(
    <form onSubmit={submitHandler}className={classes.for} >
      <label className={classes.lab}>Your Name</label><br/>
        <input type="text" ref={inputText}/><br/>
      <label className={classes.lab}>choose your program</label><br/>
      <select ref={selectLevel}>
        <option value="mastery">Mastery</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
      </select><br/>
      <button className={classes.btn}>Submit</button>
    </form>
   )
}
export default Form;