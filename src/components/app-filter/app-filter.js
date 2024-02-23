import { Component } from 'react';
import './app-filter.css'


class AppFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
            increase : false, 
            money : false
        }
    }

    onIncrease = () =>{

        this.setState({
            increase: !this.state.increase
            
        })

        this.props.onIncreaseUpd(this.state.increase);
    }

    onMoney = () =>{
        this.setState({
            money: !this.state.money
        })
        const m = this.state.money;
        this.props.onAllMore1000(m);
    }
    render(){
    return(
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                Все сотрудники
            </button>

            <button 
                className="btn btn-outline-light"
                type="button"
                onClick={this.onIncrease}
               >
                На повышение
            </button>

            <button 
                className="btn btn-outline-light"
                type="button"
                onClick={this.onMoney}>
                З/П больше 1000$
            </button>
        </div>
        );
    }
}

export default AppFilter;