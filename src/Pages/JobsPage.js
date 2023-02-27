import React from 'react'
import styled from 'styled-components';

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

export default function JobsPage() {
  return (
    <div>
      <header className="header">
        <h1>Job Buddy</h1>
      </header>
      <div className="container">
        <main className="main-content">
          <Container>
            <div>Jobs Page</div>
          </Container>
        </main>

      </div>
    </div>
  )
}
