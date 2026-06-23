import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import styled from 'styled-components'

const StyleAppLayout = styled.div`
    display : grid;
    grid-template-columns : 26rem 1fr;
    height : 100vh;
    grid-template-rows : auto 1fr;
`
const Main = styled.main`
    background-color : var(--color-grey-50);
    padding : 4rem 4.8rem 6.4rem;
`
export default function AppLayout() {
  return (
    <StyleAppLayout>
        <Header></Header>
        <Sidebar/>
        <Main>
            <Outlet/>    
        </Main>      
    </StyleAppLayout>
  )
}
