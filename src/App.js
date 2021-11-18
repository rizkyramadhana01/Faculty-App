// import Welcome from './components/Welcome';
// import Hello from './components/Hello';


// function App() {
//   return(
//     <div>
//       <Welcome name="Septiano" prodi="TI" />
//       <Welcome name="Fitriani" prodi={2} gender="Female" />

//       <Hello name="Jordan" prodi="SI" year={2021} />
//     </div>
//   );
// }
// import React from 'react'

// function App(){
//   return(
//     <div>
//     <h1>React Hook: useState</h1>
//     </div>
//   );
// }
// export default App;

// import React, { useState, useMemo } from 'react';
// import { Routes, Route, Link } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import { UserContext } from './UserContext';

// function App()  {
//   const [ user, setUser ] = useState('Guest');

//   const userValueProvider = useMemo(() => ({user, setUser}), [user, setUser]);

//   return(
//     <div>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//       </nav>

//       <UserContext.Provider value={userValueProvider}>
//         <Routes>
//           <Route path="/" element={<Home />}  />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </UserContext.Provider>
//     </div>
//   );
// }

// export default App;


import Todos from './components/todos/Todos';

function App(){
  return(
    <div>
      <Todos />
    </div>
  );
}

export default App;