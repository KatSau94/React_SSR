interface IMyListProps {
    list: IItem[];
    onClick: (id: string) => void
}

interface IItem {
    value: string;
    id: string;
    //onClick: () => void
}

export function MyList({list, onClick}: IMyListProps){
   return( <ul>
        {list.map((item, index) => {
            <li onClick={() => onClick(item.id)} key={item.id}>{item.value}</li>
        })}
    </ul>)
}



