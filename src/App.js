
import './App.css';
import { Container, Content, Columns } from './styles';
import Button from './components/Button';
import { InputContainer } from './components/Input/styles';

import { useState } from 'react';


const App = () => {
  const[currentNumber, setCurrentNumber]= useState('0');
  const[firstNumber, setFirstNumber]= useState('0');
  const [operation, setOperation] =useState('0');
  const [result, setResult] = useState('')

  
const isOperator= (num)=>{
   if(num==='+' || num==='-'  || num==='X'  || num==='/' || num==='='){
   
    return true
   }
}
 
const calculator = (num)=>{
 
  switch(num){
    case'+':
    

    return Number(currentNumber) + Number(firstNumber);
    case'-':
    return Number(currentNumber) - Number(firstNumber);
    case'X':
    return Number(currentNumber) * Number(firstNumber);
    case'/':
    return Number(currentNumber) / Number(firstNumber);
    default:
      break;

  }

}


  const handleNum =(num)=>{
   
    
    if(isOperator(num)){
    
     setFirstNumber(currentNumber)
     setOperation(num)
     
     setCurrentNumber('0')
     console.log('firstnumber', firstNumber, 'cuurentnumber',currentNumber, 'operation', operation, 'result', result)


    
    }
  
    else {
    
      setCurrentNumber(prev =>`${prev==='0' || operation !=='0' ?'' :prev}${num}`)
 
      
     
   
    }

    if(currentNumber !=='0' & firstNumber !=='0' & operation !=='0'){
     
      setCurrentNumber(calculator(operation))
      setResult('1')
   
     setFirstNumber(calculator(operation))
     
      setOperation('0')
      console.log('firstnumber', firstNumber, 'cuurentnumber',currentNumber, 'operation', operation, 'result', result)
      
    
     
     
    } 
   

  }
  const handleClear= ()=>{
    setCurrentNumber('0')
  }



  
  return (
    
    <Container>
  
      <Content>
     
      <InputContainer value={currentNumber} disabled></InputContainer>
      <Columns>
      <Button label="CE" onClick={handleClear}></Button>
      <Button label="7" onClick={()=>handleNum('7')}></Button>
      <Button label="8" onClick={()=>handleNum('8')}></Button>
      <Button label="9" onClick={()=>handleNum('9')}></Button>
      <Button label="X" onClick={()=>handleNum('X')}></Button>
      <Button label="4" onClick={()=>handleNum('4')}></Button>
      <Button label="5" onClick={()=>handleNum('5')}></Button>
      <Button label="6" onClick={()=>handleNum('6')}></Button>
      <Button label="-" onClick={()=>handleNum('-')}></Button>
      <Button label="1" onClick={()=>handleNum('1')}></Button>
      <Button label="2" onClick={()=>handleNum('2')}></Button>
      <Button label="3" onClick={()=>handleNum('3')}></Button>
      <Button label="+" onClick={()=>handleNum('+')}></Button>
      <Button label="/" onClick={()=>handleNum('/')}></Button>
      <Button label="0" onClick={()=>handleNum('0')}></Button>
      <Button label="="onClick={()=>handleNum('=')}></Button>
      
      
      </Columns>
      
    
      </Content>
   
    </Container>
  );
}

export default App;
