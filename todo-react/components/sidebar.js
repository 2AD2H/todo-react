import classNames from 'classnames'
import Image from 'next/image'

const Sidebar = () => {
  const wapper = classNames(
    'h-screen px-4 pt-8 pb-4 bg-lime-100 flex justify-between flex-col w-80',
  )

  return (
    <div className={wapper}>
      <div className="flex flex-col">
        <div className="basis-20 flex">
          <div>
            <Image src="/avatar.svg" height={50} width={50}></Image>
          </div>
          <div className='flex flex-col pl-4'>
            <div>
                <p>an tran</p>
            </div>
            <div>
                <p>aloalo@gmail.com</p>
            </div>
          </div>
        </div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
      </div>
    </div>
  )
}
export default Sidebar
