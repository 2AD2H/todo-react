import classNames from 'classnames'
import Image from 'next/image'

const Sidebar = () => {
  const wapper = classNames(
    'h-screen px-4 pt-8 pb-4 bg-neutral-800 flex justify-between flex-col w-80 text-white',
  )

  return (
    <div className={wapper}>
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div className="basis-20 flex py-2 space-x-4">
          <div className="">
            <div className="border-2 rounded-full p-3 w-16 h-16">
              <Image src="/avatar.svg" height={45} width={45}></Image>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <p>an tran</p>
            </div>
            <div>
              <p>aloalo@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Todo: fix search bar responsive (if needed) */}
        <div className="">
          <div className="pt-2 relative mx-auto text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            ></input>
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <Image src="/search.svg" height={18} width={18}></Image>
            </button>
          </div>
        </div>
        <div className="rounded-md flex justify-between items-center w-60 hover:bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-2 py-2">
          <div className="flex gap-4">
            <div>🤡</div>
            <div>My Day</div>
          </div>
          <div className="rounded-full bg-neutral-500 flex justify-center items-center px-3 py-1 text-sm">
            5
          </div>
        </div>
        <div className="rounded-md flex justify-between items-center w-60 hover:bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-2 py-2">
          <div className="flex gap-4">
            <div>🤡</div>
            <div>Important</div>
          </div>
          <div className="rounded-full bg-neutral-500 flex justify-center items-center px-3 py-1 text-sm">
            5
          </div>
        </div>
        <div className="rounded-md flex justify-between items-center w-60 hover:bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-2 py-2">
          <div className="flex gap-4">
            <div>🤡</div>
            <div>Planned</div>
          </div>
          <div className="rounded-full bg-neutral-500 flex justify-center items-center px-3 py-1 text-sm">
            5
          </div>
        </div>
        <div className="rounded-md flex justify-between items-center w-60 hover:bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-2 py-2">
          <div className="flex gap-4">
            <div>🤡</div>
            <div>Tasks</div>
          </div>
          <div className="rounded-full bg-neutral-500 flex justify-center items-center px-3 py-1 text-sm">
            5
          </div>
        </div>
        <hr className="border-neutral-600 w-60"></hr>
      </div>
    </div>
  )
}
export default Sidebar
