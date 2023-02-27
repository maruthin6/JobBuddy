import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-right: 20px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 400px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Ad = styled.div`
  flex: 1;
  max-width: 300px;
  margin-top: 20px;

  @media (max-width: 600px) {
    margin-top: 40px;
  }
`;

const JobDetailsPage = () => {

  const { jobId } = useParams();
  const [jobData, setJobData] = useState();
  const url = "https://59fqlz4m39.execute-api.us-west-2.amazonaws.com/dev/details?jobId=" + jobId

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setJobData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);


  return (

    <div className="App">

      <header className="header">
        <h1>Job Buddy</h1>
      </header>
      <div className="container">
        <div className="left-column">
          <h2>Left Column</h2>
        </div>
        <main className="main-content">
          <Container>
            <Image src="" alt="Hello" />
            <Content>
              <Heading>Your Heading</Heading>
              <Text>{JSON.stringify(jobData)}</Text>
              <Button>Button</Button>
            </Content>
          </Container>
        </main>
        <div className="right-column">
          <h2>Right Column</h2>
        </div>
      </div>


    </div>


  );
};

export default JobDetailsPage;
