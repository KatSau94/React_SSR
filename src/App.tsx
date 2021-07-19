import React from 'react';
import "./main.global.css";
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { MyHooks } from './hooks';
import { getValue } from './utils/react/pickFromSynteticEvent';
import { assignId, generateId } from './utils/react/generateRandomIndex';
import { MyList } from './GenerateList';

const LIST = [
    {value: 'some'},
    {value: 'some1'},
    {value: 'some2'},
].map(generateId)

const l = LIST[0].id;

function AppComponent() {

    return (
        <Layout>
            <Header/>
            <Content>
                <CardsList/>
                <MyList list={LIST} onClick={console.log}/>
                
                {/* {LIST.map((item) => ({ ...item, onClick: () => {
                    console.log(item.id);
                }}))}/> */}
            </Content>
        </Layout>
    )
}

export const App = hot(() => <AppComponent/>);