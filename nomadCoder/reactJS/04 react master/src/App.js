import styled, { keyframes } from 'styled-components';

{/* <div style={{ display: "flex" }}>
  <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div>
  <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
</div> */}

/* const Father = styled.div`
display: flex;
`

const Box = styled.div`
background-color: ${props => props.bgColor};
width: 100px;
height: 100px;
`
const Circle = styled(Box)`
border-radius : 50%;
`

const Text = styled.span`
color: white;
`

const Btn = styled.button`
color:white;
background-color:tomato;
border:0;
border-radius:15px;
`

const Input = styled.input.attrs({ required: true })`
background-color : tomato;` */


const Wrapper = styled.div`
display:flex;
`

const animation = keyframes`
0% {
  transform:rotate(0deg);
  border-radius:0px;
}
50%{
  transform:rotate(360deg);
  border-radius:100px;

}
100%{
  transform:rotate(0deg);
  border-radius:0px;

}`


const Box = styled.div`
height :200px;
width: 200px;
background-color:tomato;
display:flex;
justify-content: center;
align-items: center;
animation: ${animation} 1s linear infinite;
span{
  font-size: 30px;
  &:hover{
    transform:scale(2)
  }
  &:active{
    opacity: 0;
  }
}
`


function App() {
  return (

    <Wrapper>
      <Box>
        <span>🎃</span>
      </Box>
    </Wrapper>
    /*     <Father as='header' >
          <Box bgColor='teal'>
            <Text>Hello</Text>
          </Box>
          <Circle bgColor='tomato' />
       
          <Btn>Log In</Btn>
          <Btn as='a' href='/'>Log In</Btn>
          <Input />
        </Father> */

  );
}

export default App;
