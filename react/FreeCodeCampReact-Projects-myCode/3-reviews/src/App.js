
import './MannualCss/style.css';
import Provider from './Context';
import {Consumer} from './Context';
import Heading from './Components/layouts/Heading';
import Profile from './Components/profiles/Profile';
function App() {
  return (
    <Provider>
      <Consumer>
        { value => {
          return(
            <div className="container">
            < Heading heading='Our Reviews' />
            {/* thats the horizontal line  */}
            <hr className="horizontalLine"/>
            < Profile />
          </div>
          );
        }
        }
      </Consumer>
    </Provider>
  );
}

export default App;
