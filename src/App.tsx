import React from 'react';
import "./main.global.css";
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { MyHooks } from './hooks';
import { getValue } from './utils/react/pickFromSynteticEvent';
import { assignId, generateId, generateRandomString } from './utils/react/generateRandomIndex';
import { GenericList, MyList } from './GenerateList';
import { merge } from './utils/js/merge';
import { Dropdown } from './shared/Dropdown';

// const LIST = [
//     {value: 'some'},
//     {value: 'some1'},
//     {value: 'some2'},
// ].map(generateId)

const LIST = [
    {As: 'li' as const, text: 'some'},
    {As: 'li' as const, text: 'some1'},
    {As: 'li' as const, text: 'some2'},
].map(generateId)

function AppComponent() {

    const [list, setList] = React.useState(LIST);
    
    const handleItemClick = (id: string) => {
        setList(list.filter((item)=>item.id !== id));
        console.log(list);
    }

    const handleAdd = () => {
        setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const})))
    }
    
    return (
        <Layout>
            <Header/>
            <Content>
                <CardsList/>
                {/* <button onClick={handleAdd}>Add Element</button> */}
                {/* <MyList list={list.map(merge({onClick: handleItemClick}))}/> */}
                {/* <GenericList list={list.map(merge({onClick: handleItemClick}))}/> */}
            </Content>
            {/* <Dropdown 
                onClose={() => console.log('closed')} 
                onOpen={() => console.log('opened')} 
                button={<button>Test</button>} 
                isOpen={true}>
                <CardsList/>
            </Dropdown> */}
        </Layout>
    )
}

export const App = hot(() => <AppComponent/>);