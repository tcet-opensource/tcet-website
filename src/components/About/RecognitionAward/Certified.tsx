interface CertiProps {
    img: any;
    text: string;
  }
  const certifiedSection: React.FC<CertiProps> = ({ img, text }) => {
    return (
      <div className=' w-80 h-36 p-2 gap-4 flex flex-col  items-center'>
        <div>
          <img src={`/HomePage/certified-by-section/${img}`} alt="test" />
        </div>
        <div className=' w-56 h-15 font-normal text-sm leading-4 text-center text-[#475467]'>
          <p>{text}</p>
        </div>
      </div>
    )
  }
  
  export default certifiedSection

