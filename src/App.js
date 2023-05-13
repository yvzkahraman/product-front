import React from "react";
import ProductDetail from "./ProductDetail";
import Card from "./components/Card";
import { Link } from "react-router-dom";

/* HOF => HOC */
/*prop  */
class App extends React.Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.updateCarInfo = this.updateCarInfo.bind(this);
  }

  state = {

    products: [
      {
        name: 'Product-1',
        price: 1000
      },
      {
        name: 'Product-2',
        price: 1001
      }
    ],
    car: {
      name: 'BMW',
      model: '116i',
      year: 2014
    }
  }


  updateCarInfo(name) {
    this.setState(prevState => (
      {
        car: {
          ...prevState.car,
          name: name,
        }
      }
    )
    )
  }

  productName = 'iphone'

  // products.Foreach(x=>{
  //   console.log(x.Name)
  // })
  render() {
    /*react-router-dom */
    /* Routing*/
    return (<>
      <div className="text-center pt-5 mt-5">

        <Link to="/product-list" className="p-2">Product List</Link> |
        <Link to="/category-list" className="p-2">Category List</Link>
        |
        <Link to="/product-func-list" className="p-2">Product List Func Component</Link>

      </div>

      {/* <p>Hello  {this.state.product}</p>
      {
        this.state.products.map((product) => {
          return (
            <div>
              Name = <span> {product.name}</span> <br></br>

              <button onClick={() => { }}>Detail</button>
            </div>);
        })
      }
      <p>


        <Card yavuz={"test"} selim={"test1"} work={"ONF"} nesne={this.state.car} update={this.updateCarInfo}></Card>
      </p>


      <button onClick={() => {
        // console.log("Clicked")
        console.log("Degismeden önce", this.state.product)
        this.setState({
          product: "Iphone"
        })
        console.log("Degistikten sonra", this.state.product)
      }}>Click Me</button> */}
    </>)
  }
}

export default App;




//         function App() {

//   /* JSX  */
//   /* Class Func */
//   return (
//         <div className="App">
//           <header className="App-header">

//             <p>
//               ONF - React
//             </p>

//           </header>
//         </div>
//         );



// }

//         export default App;
