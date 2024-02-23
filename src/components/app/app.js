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
        
            ],
            term: '',
            filter : false,
            money : false
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

    // onIncrease = (increase, items) => {
    //     // if(increase){
    //     // console.log("true");
    //     // this.setState(({data}) => {
    //     //     const old = data;
    //     //     const newArr = data.filter(item => item.increase == true);
    //     //     return {data: newArr}
    //     // })}
    //     // else {
    //     //     console.log("False");
    //     //     this.setState ({
    //     //         data : old}
    //     //     )
    //     // }
      
    //         if(increase){

    //             console.log(items.filter(item =>
    //                 {return(item.increase  === true)}))


    //             return items.filter(item =>
    //                 {return(item.increase  === true)});
    //         } else{return console.log(items)};

    //         // if(term.length === 0)return items;

    //         // return items.filter(item => {
    //         //     return item.name.indexOf(term) > -1
    //         // })
    // }
 

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
    

    searchemp_appFilter = (items, term, filter, money) => {
        if (filter){
            return items.filter(item => { 
                return item.increase  === true });
        };
        if(money){
            return items.filter(item => {
                return item.salary > 999;
            })
        }

        if(term.length === 0 )return this.state.data;
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })

    }
   
    onUpdateSerch = (term) =>{
        this.setState({term});
    }
    onIncreaseUpd = (filter) =>{
        this.setState({filter});
    }
    onAllMore1000 = (money) =>{
        this.setState({money})
    }

    render(){
        const {data, term, filter, money} = this.state;
        const increased = this.state.data.filter(item =>item.increase).length;
        const visibleData = this.searchemp_appFilter(data, term, filter, money);
    return (
        <div className="app">
            <AppInfo 
                allData = {this.state.data}
                increased = {increased}/>



            <div className='search-panel'>
                <SearchPanel onUpdateSerch = {this.onUpdateSerch}/>
                <AppFilter onIncreaseUpd = {this.onIncreaseUpd}
                            onAllMore1000 = {this.onAllMore1000}/>
            </div>

           <EmployersList 
                    data = {visibleData}
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