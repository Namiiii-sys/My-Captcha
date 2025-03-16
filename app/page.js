import captcha from "./components/captcha/captcha"

function Home() {
  return (
    <>
    
    <main className="pt-20 flex relative items-center justify-center gap-4 ">
    <h2 className="text-white absolute text-3xl font-bold text-center pt-18 mt-6">Select All Dogs:</h2>
      <input className=" w-100 bg-white/10 px-2 rounded" type="text" placeholder="Message"/>
      <div>
        <captcha/>
      </div>
      <button className="border px-4 py-1 text-xs text-white bg-white/20 rounded hover:bg-gray-400">Send</button>
    </main>
    </>
  )
}

export default Home
