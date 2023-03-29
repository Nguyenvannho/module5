import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Bài 2
// const students = [
//   {
//     company: 'Alfreds Futterkiste',
//     contact: 'Maria Anders',
//     country: 'Germany'
//   },
//   {
//     company: 'Centro comercial Moctezuma',
//     contact: 'Francisco Chang',
//     country: 'Mexico'
//   },
//   {
//     company: 'Ernst Handel',
//     contact: 'Roland Mendel',
//     country: 'Austria'
//   },
//   {
//     company: 'Island Trading',
//     contact: 'Helen Bennett',
//     country: 'UK'
//   },
//   {
//     company: 'Laughing Bacchus Winecellars',
//     contact: 'Yoshi Tannamuri',
//     country: 'Canada'
//   },
//   {
//     company: 'Magazzini Alimentari Riuniti',
//     contact: 'Giovanni Rovelli',
//     country: 'Italy'
//   }
// ]
// root.render(
// <table>
//   <tr>
//     <th>Company</th>
//     <th>Contact</th>
//     <th>Country</th>
//   </tr>

//    {students.map(student => (
//   <tr>
//     <td>{student.company}</td>
//     <td>{student.contact}</td>
//     <td>{student.country}</td>
//   </tr>
// ))}
 
// </table>

// )
// Bài 3 :
// const element = (<div className="container">
//   <div className="card">
//     <div className="card--header" />
//     <img
//       className="avatar"
//       src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/337160339_877950236765186_5663538910116099910_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=39lfSKXTn2sAX_aipdc&_nc_ht=scontent.fdad3-5.fna&oh=00_AfCq3TkLq5WIqkhBoUEEvwLjWi-5K9U7n6YCj2VM2gvV7g&oe=6427E0F8"
//       alt="avatar"
//     />
//     <div className="card--body">
//       <div>
//         <p className="text-header">Vua lỳ đòn!</p>
//         <p className="text-sub">
//           Thích làm những gì mình thích ,
//           Hoặc những gì không thích thì mình không làm !!!
//         </p>
//         <button className="btn third">Follow cho tôi!</button>
//       </div>
//     </div>
//   </div>
// </div>
// );
// root.render(element);
// Bài 4 : 
const elm2 = (
  <div className="container d-flex align-items-center text-center">
    <div className="form-signin">
      <form>
        <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com" />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />
          <label>Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </div>
  </div>
);
root.render(elm2);



    


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
