// import logo from './logo.svg';
import { Container, Grid } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Result from './components/Result/Result';
import Selectbar from './components/Selectbar/Selectbar';
import Tenurebar from './components/Tenurebar/Tenurebar';
import { useState } from 'react';

function App() {

  const [data, setData] =  useState({
    homeValue: 3000,
    downPayment: 3000,
    loanAmount: 3000,
    loanTerm: 3000,
    interestRate: 5

  });



  //setA cant be used just like that, it needs a pirpose. for example you can use a button
  // and wehen the buttin is clicked you can set the value of a
  return (
    <div className="App">

      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs ={12} md={6}>
            <Selectbar data={data} setData={setData} />
            <Tenurebar />
          </Grid>
          <Grid item xs ={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}

export default App;
