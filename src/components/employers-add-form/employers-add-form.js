import { Component } from 'react';
import './employers-add-form.css'

// const EmployersAddForm =()=>{
class EmployersAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            salary : '',
            namePlaceholder : 'Как его зовут?',
            salaryPlaceholder : 'З/П В $'
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = (e) =>{
        e.preventDefault();
      
        if(!(this.state.name === '' || this.state.salary === '') && isNaN(this.state.name)) {
            this.props.onAdd(this.state.name, this.state.salary);
        }
        this.setState({
            namePlaceholder: 'Необходимо ввести имя!',
            salaryPlaceholder: 'Необходимо ввести зарплату!'
        })
        
        // this.props.onAdd(this.state.name, this.state.salary);
        // this.setState({
        //     name: '',
        //     salary: ''
        // })
    }


    render(){
    // const {onAdd} = this.props;
    const {name, salary} = this.state;
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form 
                className="add-form d-flex"
                onSubmit = {this.onSubmit}>
                    
                    <input type="text"
                        className="forn-control new-post-label"
                        placeholder= {this.state.namePlaceholder}
                        name = "name"
                        value={name}
                        onChange={this.onValueChange}/>

                    <input type="number"
                        className="form-control new-post-label"
                        placeholder= {this.state.salaryPlaceholder} 
                        name = "salary"
                        value={salary}
                        onChange={this.onValueChange}/>
                    
                    <button type="submit "
                        className="btn btn-outline-light"
                        // onClick={()=> onAdd(name, salary) }>Добавить</button>
                         >Добавить</button>

                </form>
        </div>
    )
    }
}

export default EmployersAddForm;