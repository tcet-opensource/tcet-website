
interface CertiProps {
    img: any;
    text:string;
  }
  const certifiedSection2: React.FC<CertiProps> = ({ img,text }) => {
    return (
      <div className=' w-fit h-16  p-3 gap-2 items-center flex flex-col md:flex-row border border-solid border-gray-300 shadow-sm md:shadow-md rounded-lg sm:self-stretch'>
        <div>
          <img src={img} alt="test" /> 
        </div>
        <div className='font-normal text-base leading-normal md:ml-3 md:self-center'>
        <p>{text}</p>
        </div>
      </div>
    )
  }
  
  export default certifiedSection2
  