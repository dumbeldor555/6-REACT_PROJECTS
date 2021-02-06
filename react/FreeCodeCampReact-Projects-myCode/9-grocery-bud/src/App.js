import './MannualCss/style.css';
import Provider, {Consumer} from './Context';
import Heading from './Component/layout/heading';
import InputField from './Component/layout/inputfield';
import ClearAll from './Component/layout/clear-all';
import Item from './Component/item/item';

function App() {
  return (
    <Provider>
      <Consumer>
          {value => {
            const {heading, clearItem, showClearAll, dispatch, inputItem} = value;
            return(
              <div className="whole-grocery-container">
                <Heading heading={heading} />
                <InputField inputItem ={ inputItem}/>
                  {/* here all the list item will go */}
                  <Item />
                {showClearAll &&  <ClearAll dispatch={dispatch} data={clearItem}/>}
              </div>
            )
          }}
      </Consumer>
    </Provider>
  );
}

export default App;
