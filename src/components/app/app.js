import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

// function App(){
class App extends Component{
   
    constructor(props){
        super(props);
        this.state = {
             data: [
                {name: 'Kanat Z.' , salary: 800, increase : true, star: false, id: 1},
                {name: 'Igor V.' , salary: 1000, increase : false, star: false, id: 2 },
                {name: 'Alexey S.' , salary: 1500, increase : false, star: false,id: 3 },
                {name: 'ASA S.' , salary: 15000, increase : true, star: false, id: 4}
        
            ]
        }
        this.maxId = this.state.data.length;
    }

 
    deleteItem = (id) =>{
        // console.log(id);
        this.setState(({data}) =>{
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index+1);

            // const newArr = [...before, ...after];

            
            return{
                data:data.filter(item => item.id !== id)
            }
        })
    }


    addItem = (name, salary) => {
        const newItem ={
            name, salary, increase:false, star:false, id: ++this.maxId
        }
        this.setState(({data}) =>{
          const newArr = [...data,newItem];
          return {
            data: newArr
          }
        })
    }

    onToggleIncrease = (id) =>{
        console.log(`Increase this ${id}`)

        this.setState(({data}) =>({
            // const index = data.findIndex(elem => elem.id === id);

            // const old = data[index];
            // const newItem = {...old, increase: !old.increase};
            // const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];

            // return {data:newArr};

            
            data: data.map(item =>{
                if(item.id === id){
                    return{...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }
    onToggleRise = (id) => {
        console.log(`Rise this ${id}`)

        this.setState(({data}) =>({
            // const index = data.findIndex(elem => elem.id === id);

            // const old = data[index];
            // const newItem = {...old, increase: !old.increase};
            // const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];

            // return {data:newArr};

            
            data: data.map(item =>{
                if(item.id === id){
                    return{...item, star: !item.star}
                }
                return item;
            })
        }))
    }

    // addItem = (name, salary) => {
    //     this.setState(prevState => {
    //         const newData = [...prevState.data]; // Create a copy of the original array
    //         const maxId = prevState.maxId + 1; // Increment maxId
    //         newData.push({ name, salary, maxId }); // Add new item to the copy
    //         return {
    //             data: newData, // Set state with the new array
    //             maxId: maxId // Update maxId in state
    //         };
    //     });
    // };
    
   
    render(){
        const increased = this.state.data.filter(item =>item.increase).length
    return (
        <div className="app">
            <AppInfo 
                allData = {this.state.data}
                increased = {increased}/>



            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>

            </div>

           <EmployersList 
                    data = {this.state.data}
                    onDelete = {this.deleteItem}
                    onToggleIncrease ={this.onToggleIncrease}
                    onToggleRise = {this.onToggleRise}
           />
           <EmployersAddForm
                onAdd = {this.addItem}/>
        </div>
    );
    }
}


export default App;