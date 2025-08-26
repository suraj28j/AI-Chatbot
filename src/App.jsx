import { useState } from 'react'
import './App.css'
import { API_KEY, URL } from './constants';

function App() {

  const [question, setQuestion] = useState("");
  const [result, setResult] = useState([]);

  const payload = {
    "contents": [
      {
        "parts": [
          {
            // "text": "Explain how AI works in a few words"
            "text": question
          }
        ]
      }
    ]
  }

  const askQuestion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": API_KEY
      },
      body: JSON.stringify(payload),
    })

    const res = await response.json()
    let dataString = res.candidates[0].content.parts[0].text.split("* ")
    dataString = dataString.map((item) => item.trim())
    console.log("Response : ", dataString);
    setResult(dataString)
  }
  return (
    <>
      <div className='grid grid-cols-12 h-screen text-center'>
        <div className='col-span-2 bg-zinc-800'>Recent Searches</div>
        <div className='col-span-10 bg-zinc-900'>
          <div className='container h-140 pt-16 ps-24 pe-24 overflow-y-scroll'>
            <div className=' text-white'>
              <ul>
                {
                  result.map((item, index) => (
                    <li className='text-left p-1' key={index}>{item}</li>
                  ))
                }
              </ul>
            </div>

          </div>
          <div className='bg-zinc-800 w-1/2 text-white m-auto border border-zinc-400 rounded-4xl p-1 pr-5 flex'>
            <input type='text' className='w-full h-full p-3 outline-none' placeholder='Ask me anything' value={question} onChange={(e) => setQuestion(e.target.value)} />
            <button onClick={askQuestion}>Ask</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
