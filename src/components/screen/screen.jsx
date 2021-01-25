import { render } from '@testing-library/react';
import React from 'react';

import './screen.scss';

// class Screen extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         input: '',
//         submit: '0'
//       };
//     }

//     handleChange = (event) => {
//       this.setState({
//         input: event.target.value
//       });
//     }

//     handleSubmit = (event) => {
//       event.preventDefault()
//       this.setState({
//         submit: this.state.input
//       });
//     }

//     result = () => {
//         try {
//             return eval(this.state.submit)
//         } catch(e) {
//             return "ERROR"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                     value={this.state.input}
//                     onChange={this.handleChange} />
//                     <button type='submit'>=</button>
//                 </form>
//                 <h1>{this.result()}</h1>
//             </div>
//         );
//     }
// };

const Screen = ({handleSubmit, handleChange, input, result, ...rest}) => {
    console.log(input)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onKeyPress={console.log} />
                <button type='submit'>=</button>
            </form>
            <h1>{result()}</h1>
        </div>
    )
}

export default Screen;
