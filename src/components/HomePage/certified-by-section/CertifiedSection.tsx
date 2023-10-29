interface CertiProps {
  img: any;
  text: string;
}
const certifiedSection: React.FC<CertiProps> = ({ img, text }) => {
  return (
    <div className=' w-32 md:w-80 p-2 gap-4 flex flex-col  items-center'>
      <div>
        <img src={`/HomePage/certified-by-section/${img}`} alt="test" />
      </div>
      <div className='md:pl-10 md:pr-10 font-normal text-xs md:text-sm leading-4 text-center text-[#475467]'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default certifiedSection;
