import { useDispatch, useSelector } from "react-redux";
import Button from "./utility/Button";
import { qty_decrement, qty_increment } from "./redux/shoping cart/action";

function App() {

  const cart = useSelector(state => state.cart.value);

  const middleImg = 'https://freesvg.org/img/Shopping-Cart-Icon-3.png';
  const dispatch = useDispatch();


    const incrementHandler = (value) => {
      dispatch(qty_increment(value))
      console.log('increment')
    }
    const decrementHandler = (value) => {
      dispatch(qty_decrement(value))
    }
  

  
  return (
    <div>
      {/* header */}
      <h1 className="text-2xl selection:text-yellow-500 font-bold text-center first-letter:text-lime-400 underline hover:underline-offset-4 hover:translate mt-10 text-violet-500 decoration-sky-500">
        Shoping Cart's
      </h1>
      <hr className="mt-10 " />
      <div className="flex justify-around">
        {/* products */}
        <div className="box-border rounded-lg w-[280px] md:w-[300px] xl:w-[420px] h-auto  shadow-lg shadow-yellow-300/50 ">
          <div className="flex items-center p-5 h-2 md:h-14 xl:h-16 justify-between ">
            <img className="w-20 h-10 md:h-14 xl:h-16 bg-slate-300" src="" alt="" />
            <p className="place-self-center ">test-1</p>
            <Button he={12} wd='12' bc={'lime-400'} arr={'+'} />
          </div>
          <hr />
        </div>
        {/* col-2 */}
        <img className="invisible md:visible box-border w-40 h-auto mt-10" src={middleImg} alt="middleImg" />
        {/* card aria */}
        <div>
          <div className="box-border h-auto bg-slate-300 w-[220px] md:w-[280px] xl:w-[420px] rounded-lg p-10">
            {/* card item */}
            <div className="flex items-center justify-around py-5">
              <p>product name:</p>
              <div className="w-14 flex items-center justify-around mb-1 ">
                <Button he='6' wd='6' bc={'lime-400'} onClick={()=>incrementHandler(1)} arr={'+'} />
                <span>{cart}</span>
                <Button he='6' wd='6' bc='red-500' onClick={()=>decrementHandler(1)} arr={'-'} />
              </div>
            </div>
            <br />
            <h4 className="text-center font-bold text-violet-500">Total Price:<span className="text-sky-500"> 1330</span></h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

