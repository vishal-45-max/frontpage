import styled from'styled-components'
import GlobalStyle from './styles/GlobalStyles'
import Button from './ui/Button'


const H1 = styled.h1`
  background-color:red;
`
// const Button = styled.button`
//   background-color: var(--color-brand-600);
//   font-weight : 500;
//   border : none;
//   text-transform: capitalize;
//   font-size:1.4rem;
//   color: var(--color-brand-50);
//   border-radius:var(--border-radius-sm);
//   padding:1.2rem 1.6rem;
//   cursor: pointer;
// `
const Input = styled.input`
  height:2rem;
  padding:10px;
  border-radius:8px;
`
const Dav =styled.div`
  background-color:yellow;
  display:block;
`
function App() {
  return (
    <Dav>
      <GlobalStyle/>
      <H1>the wild oasis</H1>
      <Button>check in</Button> 
      <Button>check out</Button> 
      <Input type="text" name="" id="" placeholder='Number of Guest'/> 
      <Input type="text" name="" id="" placeholder='Number of Guest'/> 
    </Dav>
  )
}
export default App;