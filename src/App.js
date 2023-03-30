// import Welcome from './components/Welcome';
// function App() {
//     return (
//         <div className="App">
//             <Welcome name="Admin" />
//         </div>
//     );
// }
// export default App;
// import AddComponent from "./components/AddComponent";
// function App() {
//   return <AddComponent firstNumber={1} secondNumber={2} />;
// }
// export default App;
function Alert(props) {
    return(<div className="alert alert-warning" role="alert">
        {props.text}
    </div>)
  }
  export default Alert;