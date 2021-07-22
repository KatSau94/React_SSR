interface IMyListProps {
    list: IItem[];
}

interface IItem {
    value: string;
    id: string;
   onClick: (id: string) => void
}

export function MyList({list}: IMyListProps){
   return( 
        <ul>
            {list.map((item, index) => (
                <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
            ))}
        </ul>
    )
}

interface IGenericListProps {
    list: IGenericItem[];
}

interface IGenericItem {
    text: string;
    id: string;
   onClick: (id: string) => void;
   className?: string;
   As?: 'a' | 'li' | 'button' | 'div';
   href?: string
}

export function GenericList({list}: IGenericListProps){
    return (
        <>
            {list.map(({As = 'div', text, onClick, className, id, href}) => (
                <As 
                className={className} 
                onClick={() => onClick(id)}
                key={id}
                href={href}>
                    {text}
                </As>
            ))}
        </>
    )
}


