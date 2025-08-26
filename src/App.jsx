import './App.css'

function App() {
  return (
    <>
      <div className='grid grid-cols-12 h-screen text-center'>
        <div className='col-span-2 bg-zinc-800'>Recent Searches</div>
        <div className='col-span-10 bg-zinc-900'>
          <div className='h-110 p-10'>
            <h1>Hello user ask me anything</h1>
          </div>
          <div className='bg-zinc-800 w-1/2 text-white m-auto border border-zinc-400 rounded-4xl p-1 pr-5 flex'>
            <input type='text' className='w-full h-full p-3 outline-none' placeholder='Ask me anything' />
            <button>Ask</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
