import React ,{useState} from 'react';

import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';
import Showtickets from './showtickets/showtickets';

class Calculator extends React.Component {
   
    state = {
        equation: '',
        result: 0,
        source:[],
        sourceInput:'',
        counter:0
    };
    onButtonPress = event => {
        let equation = this.state.equation;
        let main_source='';
        const pressedButton = event.target.innerHTML;

        if (pressedButton === 'C') return this.clear();
        else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.')
        {
            equation += pressedButton;
            this.setState({equation: equation});
        } 
        else if (pressedButton === '+'){
            const total_count = equation.length;
            
            if(total_count === 6){
                main_source = equation;
                
                this.setState({
                    ...this.state,
                    sourceInput: main_source
                  });

                const newRadioValue = main_source;
                this.state.source.push(newRadioValue);
                this.setState({equation: '', result: 0});
                

            }else if(total_count > 6){
                main_source = equation.substring(0, 6);
                
                this.setState({
                    ...this.state,
                    sourceInput: main_source
                  });

                const newRadioValue = main_source;
                this.state.source.push(newRadioValue);
                this.setState({equation: '', result: 0});
            }else{
                console.log("Invalid");
            }
            
        }
        else {
            equation = equation.trim();
            equation = equation.substr(0, equation.length - 1);
            this.setState({equation: equation});
        }
    }

    clear() {
        
        this.setState({equation: '', result: 0});
    }

    Randomfn(){
        let main_source = '';
        main_source =  Math.floor(100000 + Math.random() * 900000);
                
        this.setState({
            ...this.state,
            sourceInput: main_source
            });

        const newRadioValue = main_source;
        this.state.source.push(newRadioValue);
        this.setState({equation: main_source, result: main_source});
       
    }
    
    render() {
        
       
        return (
            <main style={{width:'50%'}}>
                <div className="calculator">
                    <Screen equation={this.state.equation} result={this.state.result} />
                    <Keypad onButtonPress={this.onButtonPress} />
                </div>
                
                <div className ="generatingtickets">
                    <div>
                        <br></br>
                        <h1 style={{textAlign:'center'}}>Your Selected Tickets</h1>
                        <br></br>
                        {
                            
                            this.state.source.map((val, index) => {
                                let count = index +1;
                                let i= 0;
                                
                                return (
                                    <div>
                                        <div class="card" style={{textAlign:'center',marginLeft:'99px'}}>
                                            
                                            <div class="container" key={index} >
                                                <h4><b>Ticket - #{count} &nbsp;&nbsp;&nbsp;</b></h4> 
                                                <i class="fa fa-trash-o" aria-hidden="true" 
                                                    style={{fontSize:'15px',color:'red',cursor:'pointer',float:'right'} }
                                                ></i>
                                                 <br></br>
                                                <span className="badge-primary">{val}</span> 
                                                
                                            </div>
                                        </div>
                                        
                                        <br></br>
                                    </div>
                                );
                            })
                        }
                        
                    </div>
                    
                </div>
                
            </main>
            
        );
    }
}

export default Calculator;

