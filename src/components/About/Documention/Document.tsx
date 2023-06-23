

interface DocumentProps {
  title: string;
  url: string;
  img: string,
}


export const Documentation = ({ title, url, img }: DocumentProps) => {
  return (
    <div className=''>
      <a href={url}>
        <div className=' p-3 gap-1 items-center flex flex-row  border border-solid shadow-sm rounded-lg hover:cursor-pointer '>
          <div>
            <img src={img} alt="test" />
          </div>
          <div className='font-normal  text-base leading-normal '>
            <p>{title}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Documentation

