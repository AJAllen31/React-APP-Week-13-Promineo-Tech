import { Component } from "react";

export default class App extends Component {
    render() {
        return (
        <div className= 'container'>
            <form class='App App-header App-link'>
                <div className='position-absolute top-50 start-50 translate-middle border border-5 border-info'>
                    <h3>USER LOGIN</h3>
                    <label>
                        USERNAME:
                        <input class='m-1' type="text" name="name" /><br/>
                        PASSWORD:
                        <input class='m-1' type="text" name="name" />
                    </label><br/>
                    <input class='btn btn-outline-info m-1' type="SUBMIT" value="SUBMIT" />
                </div>
            </form>
        </div> 
        );
    }
}