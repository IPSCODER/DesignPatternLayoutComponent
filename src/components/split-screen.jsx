import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
`
const Panel = styled.div`
flex: ${(p) => p.flex};
`

const SplitScreen = ({children,LeftWidth=1,RightWidth=1}) => {
    const [left,right] = children;
  return (
    <Container>
        <Panel flex={LeftWidth} >
            {left}
        </Panel>
        <Panel flex={RightWidth} >
            {right}
        </Panel>
    </Container>
  )
}

export default SplitScreen