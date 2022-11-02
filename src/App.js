import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  function handleClear(){
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  function handleAddNumber(num){
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  function handleSumNumbers(){

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    } else {
      const result = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(`${firstNumber} ${operation} ${currentNumber} = ${result}`))
      setOperation('')
    }

  }

  function handleMinusNumbers(){

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    } else {
      const result = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(`${firstNumber} ${operation} ${currentNumber} = ${result}`))
      setOperation('')
    }

  }

  function handleMultiplicationNumbers(){

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    } else {
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(`${firstNumber} ${operation} ${currentNumber} = ${result}`))
      setOperation('')
    }

  }

  function handleDivisonNumbers(){

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    } else {
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(`${firstNumber} ${operation} ${currentNumber} = ${result}`))
      setOperation('')
    }

  }

  function handleEquals(){

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
              handleMultiplicationNumbers();
              break;
          case '/':
              handleDivisonNumbers();
              break;
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={handleClear} width="75%" color="#dadce0"/>
          <Button label="x" onClick={handleMultiplicationNumbers} width="25%" color="#dadce0"/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="/" onClick={handleDivisonNumbers} color="#dadce0"/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers} color="#dadce0"/>
          
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers} color="#dadce0"/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} width="25%"/>
          <Button label="=" onClick={handleEquals} width="75%" color="#4285f4"/>
        </Row>        
      </Content>      
    </Container>
  );
}

export default App;
