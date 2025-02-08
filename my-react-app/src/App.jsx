import Student from './Student.jsx'

function App() {

  return(
    <>
    <Student name = "Spongebob" age={30} isStudent={true} />
    <Student name = "Patrick" age={42} isStudent={false} />
    <Student name = "Steve" age={50} isStudent={false} />
    <Student name = "Trevor" age={27} isStudent={true} />
    <Student name ="Larry" age="30" />
    </>
  )
}

export default App;
