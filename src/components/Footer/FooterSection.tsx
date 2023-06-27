interface FooterProps {
    title: string;
    links: {
        subtitle: string;
        href: string;
    }[];
  }


export const FooterSection: React.FC<FooterProps>= ({title,links}) => {
    return (
    <div>
        <h2 className="mb-4 text-sm font-semibold font-small" style={{color:'#98A2B3'}}>{title}</h2>
        <ul className="font-medium" style={{color:'#667085'}}>
            {
                links.map((text) => (
                    <li className="mb-4">
                        <a href={text.href} className=" hover:underline">{text.subtitle}</a>
                    </li>
                ))
            }
        </ul>
    </div>
    )
  }

  
