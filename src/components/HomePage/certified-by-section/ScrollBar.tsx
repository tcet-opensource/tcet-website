
interface CertiProps {
  img: any;
  text: string;
}
const ScrollBar: React.FC<CertiProps> = ({ img, text }) => {
  return (
    <div>
      <a href="/">
        <div className=' hover:bg-slate-200 w-max h-14  p-3 gap-2 items-center flex flex-row border border-solid border-gray-300 shadow-sm rounded-lg '>
          <div>
            <img src={`/HomePage/certified-by-section/${img}`} alt="test" />
          </div>
          <div className='font-normal text-base leading-normal md:ml-3 md:self-center'>
            <p>{text}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ScrollBar;
