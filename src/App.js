import React from 'react'
import { RegularList } from './components/list/Regular'
import { authors } from './data/authors'
import SmallListItems, { SmallAuthorListItem } from './components/authors/SmallListItems'
import LargeListItems, { LargeAuthorListItem } from './components/authors/LargeListItems'
import LargeListItens from './components/books/LargeListItens'
import { books } from './data/books'
import Numbered from './components/list/Numbered'
import { Modal } from './components/Modal'

const App = () => {
  return (
    <>
    {/* <RegularList items={authors} sourceName={'author'} ItemComponent={SmallAuthorListItem} />
    <Numbered items={authors} sourceName={'author'} ItemComponent={LargeAuthorListItem} />
    <RegularList items={books} sourceName={'book'} ItemComponent={LargeListItens} /> */}
  <Modal >
    <LargeListItens book={books[0]} />
  </Modal>

    </>
  )
}

export default App


// import React from 'react'
// import Splitscreen from "./components/split-screen"

// const LeftSideComp = ({title}) =>{
//   return (
//     <h2 style={{backgroundColor:'crimson'}} >I am {title}!</h2>
//   )
// }

// const RightSideComp = ({title}) =>{
//   return (
//     <h2 style={{backgroundColor:'blue'}} >I am {title}!</h2>
//   )
// }


// const App = () => {
//   return (
//     <Splitscreen Left={LeftSideComp} Right={RightSideComp} LeftWidth={1} RightWidth={3} >
//       <LeftSideComp title={'Left'} />
//       <RightSideComp title={'Right'} />
//     </Splitscreen>
//   )
// }

// export default App