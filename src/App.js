import React from 'react'
import styled from 'styled-components/macro'

function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `

  //  return <div className="App">"Hello World"</div>
  return (
    <Wrapper>
      <Title>"Hello World"</Title>
    </Wrapper>
  )
}

export default App
