import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react'




const App = () => {
  const [text, settext] = useState('')
  const [countword, setcountword] = useState(0)
  const [character, setcharacter] = useState(0)
  const [statement, setstatement] = useState(0)
  const [question, setquestion] = useState(0)
  const [exclamation, setexclamation] = useState(0)
  const [replaceText, setreplaceText] = useState("")
  const [paste, setpaste] = useState("")


  useEffect(() => {

    if (text == "") {
      setcountword(0)
    }
    else {
      let str = text.trim()
      const words = str.split(/\s+/)
      setcountword(words.length)

    }
  }, [text])

  useEffect(() => {
    let mystatement = text
    setcharacter(mystatement.length)
  }, [text])

  useEffect(() => {
    let count = 0
    for (let i = 0; i < text.length; i++) {
      if (text[i] == "?") {
        count++

      }
    }
    setquestion(count)
  }, [text])

  useEffect(() => {
    let count = 0
    for (let i = 0; i < text.length; i++) {
      if (text[i] == "!") {
        count++

      }
    }
    setexclamation(count)
  }, [text])


  useEffect(() => {
    let count = 0
    for (let i = 0; i < text.length; i++) {
      if (text[i] == "\n") {
        count++

      }
    }
    setstatement(count)
  }, [text])


  const LowerCase = () => {
    settext(text.toLowerCase())
  }
  const UpperCase = () => {
    settext(text.toUpperCase())
  }

  const Base64 = () => {

    let result = window.btoa(text)
    settext(result)

  }


  const DecodeToString = () => {
    let result1 = window.atob(text)
    settext(result1)
  }



  const CopyText = () => {
    var copyText = document.getElementById("exampleFormControlTextarea1");

    if (text.length == 0) {
      alert("Please write text first")
    }
    else {
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      setpaste(copyText.value)
      alert("Copied the text: " + copyText.value)
    }
  }

  const PasteText = () => {
    settext(text + paste)
  }

  const ExtractNumber = () => {
    const condition = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let mytext = ""
    for (let i = 0; i < text.length; i++) {
      if (text[i] in condition) {

        mytext += text[i]

      }
    }
    settext(mytext)
  }

  const ReverseText = () => {
    let mytext = ""
    for (let i = text.length - 1; i > -1; i--) {
      mytext += text[i]
    }
    settext(mytext)
  }

  const ReplaceText = () => {

    let x = window.prompt("Enter the text that you want to chnage!")
    setreplaceText(x)

    let y = window.prompt("Enter the text you want!")
    settext(text.replaceAll(x, y))

  }

  const RemoveSpecialChar = () => {
    settext(text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''));
  }

  const RemoveWhiteSpace = () => {
    let space = text.trim()
    settext(space)
  }




  return (
    <>





      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label text-4xl font-bold text-5xl ">Analyze Your Text</label>
        <textarea onChange={(e) => { settext(e.target.value) }} value={text} className="form-control border-2  mt-3 bg-slate-100" id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>

      <button onClick={LowerCase} className='bg-blue-500  rounded py-2 px-3 font-bold text-white transition duration-500 hover:bg-blue-700  ' >toLowerCase</button>
      <button onClick={UpperCase} className='bg-blue-500  rounded py-2 px-3 font-bold  text-white transition duration-500 hover:bg-blue-700 ml-2 '>toUpperCase</button>
      <button onClick={Base64} className='bg-blue-500  rounded py-2 px-3 font-bold  text-white transition duration-500 hover:bg-blue-700 ml-2 '>Base64</button>
      <button onClick={DecodeToString} className='bg-blue-500  rounded py-2 px-3 font-bold  text-white transition duration-500 hover:bg-blue-700 ml-2 '>DecodeToString</button>
      <button onClick={() => settext("")} className='bg-blue-500  rounded py-2 px-3 font-bold  text-white transition duration-500 hover:bg-blue-700 ml-2 '>Clear Text</button>
      <button onClick={CopyText} className='bg-blue-500  rounded py-2 px-3 font-bold  text-white transition duration-500 hover:bg-blue-700 ml-2 '>Copy to Clipboard</button>
      <button onClick={PasteText} className='bg-blue-500  rounded py-2 px-3 font-bold  text-white transition duration-500 hover:bg-blue-700 ml-2 mt-3 '>Paste Text</button>
      <button onClick={ExtractNumber} className='bg-blue-500  rounded py-2 px-3 font-bold  text-white transition duration-500 hover:bg-blue-700 ml-2 '>Extract Number</button>
      <button onClick={ReverseText} className='bg-blue-500  rounded py-2 px-3 font-bold  text-white transition duration-500 hover:bg-blue-700 ml-2 mt-3 '>Reverse Text</button>
      <button onClick={ReplaceText} className='bg-blue-500  rounded py-2 px-3 font-bold  text-white transition duration-500 hover:bg-blue-700 ml-2  '>Replace Text</button>
      <button onClick={RemoveSpecialChar} className='bg-blue-500  rounded py-2 px-3 font-bold  text-white transition duration-500 hover:bg-blue-700 ml-2  '>Remove Special Characters</button>
      <button onClick={RemoveWhiteSpace} className='bg-blue-500  rounded py-2 px-3 font-bold  text-white transition duration-500 hover:bg-blue-700 ml-2 text-white  '>Remove White Space</button>


      <h1 className="text-3xl font-bold mt-4">Your text summary</h1>
      <div className='text-xl'>
        {countword} words {character} characters {statement} statements {question} questions {exclamation} exclamations.


      </div>


      <div>
        <div><h1 className='text-3xl font-bold mt-3'>Preview</h1></div>
        <p >{text ? text : "Nothing to preview!"}  </p>
      </div>


    </>
  )
}

export default App