// import logo from './logo.svg';
// import './App.css';

function App() {

  // const students= ["Raaz", "Prasad", "Mayur", "Mansi"];
  const students = [
    {name:"Abul", Email:"abc@gmail.com",Id:"253166"},
    {name:"Rahul", Email:"rahul@gmail.com",Id:"253100"},
    {name:"Prince", Email:"prince@gmail.com",Id:"253186"},
    {name:"Guddu", Email:"guddu@gmail.com",Id:"253196"}
  ]
  // map looping
 /* students.map((key)=>{
    console.warn("my name is :", key)
  });
  */

  //in for loop
 /*
  for (let i =0; i <students.length; i++){
    console.log("in for loop", students[i])
  }
  */
  return (
    <div className="App">
      <h1>Handle Array with List</h1>
      <table border={1} bgcolor="lightblue">
        <tr bgcolor="skyblue" color="white">
        <td>Name</td>
        <td>Email</td>
        <td>User Id</td>
        </tr>
      {
        students.map((item)=>
            <tr>
              <td>{item.name}</td>
              <td>{item.Email}</td>
              <td>{item.Id}</td>
            </tr>
        )
      }
      </table>
    </div>
  );
}

export default App;
