import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{height: 50, background: "rgb(40, 150, 241)", display: "flex", alignItems: "center", paddingLeft: 16, paddingRight: 16}}>
        <h2 style={{margin: 0, color: "white"}}>UGCS</h2>
      </header>
      <main style={{maxWidth: 1024, margin: "auto"}}>
        <h1>Undergraduate Computer Science Club</h1>
        <p style={{maxWidth: 768, padding: 16, margin: "32px auto"}}>The mission of UGCS is to maintain a student-run computing environment that serves as sandbox for experimentation and innovation. Additionally, UGCS seeks to build an alumni network to help students navigate the internship and job search process.</p>
        <div style={{display: "flex", flexWrap: "wrap", padding: 8}}>
          <div style={{border: "1px solid rgb(40, 150, 241)", minWidth: 256, borderRadius: 4, flex: 1, margin: 8}}>
            <h2 style={{padding: 8, margin: 0, background: "rgb(40, 150, 241)", color: "white"}}>Computing</h2>
            <p style={{padding: 8}}>UGCS is working to provide the undergraduate community with dedicated CPU and GPU instances for machine learning and graphics projects.</p>
          </div>
          <div style={{border: "1px solid rgb(40, 150, 241)", minWidth: 256, borderRadius: 4, flex: 1, margin: 8}}>
          <h2 style={{padding: 8, margin: 0, background: "rgb(40, 150, 241)", color: "white"}}>Visualization</h2>
            <p style={{padding: 8}}>UGCS is working to provide a graphics visualization environment to allow experimentation with augmented/virtual reality and 3D displays. </p>
          </div>
          <div style={{border: "1px solid rgb(40, 150, 241)", minWidth: 256, borderRadius: 4,  flex: 1, margin: 8}}>
          <h2 style={{padding: 8, margin: 0, background: "rgb(40, 150, 241)", color: "white"}}>Networking</h2>
            <p style={{padding: 8}}>UGCS will organize computer science networking events where club members can meet recent alumni, hear about their experiences in industry, and gain referals for internships and jobs.</p>
          </div>
        </div>
        <h1>Event Calendar</h1>
        <div style={{padding: 16}}>
          <h3 style={{padding: 8, margin: 0, borderRadius: 4, background: "rgb(40, 150, 241)", color: "white"}}>October</h3>
          <div style={{display: "flex", alignItems: 'center', padding: 8, borderBottom: "1px solid rgb(40, 150, 241)"}}>
            <p style={{color: "rgb(40, 150, 241)", fontWeight: "bold", margin: 0, textAlign: "center", width: 50}}>7</p>
            <p style={{margin: 0}}>Club Fair</p>
          </div>
          <div style={{display: "flex", alignItems: 'center', padding: 8, borderBottom: "1px solid rgb(40, 150, 241)"}}>
            <p style={{color: "rgb(40, 150, 241)", fontWeight: "bold", margin: 0, textAlign: "center", width: 50}}>16</p>
            <p style={{margin: 0}}>Meeting</p>
          </div>
          <h3 style={{padding: 8, margin: 0, borderRadius: 4, background: "rgb(40, 150, 241)", color: "white"}}>November</h3>
          <div style={{display: "flex", alignItems: 'center', padding: 8, borderBottom: "1px solid rgb(40, 150, 241)"}}>
            <p style={{color: "rgb(40, 150, 241)", fontWeight: "bold", margin: 0, textAlign: "center", width: 50}}>12</p>
            <p style={{margin: 0}}>Meeting</p>
          </div>
          <div style={{display: "flex", alignItems: 'center', padding: 8, borderBottom: "1px solid rgb(40, 150, 241)"}}>
            <p style={{color: "rgb(40, 150, 241)", fontWeight: "bold", margin: 0, textAlign: "center", width: 50}}>24</p>
            <p style={{margin: 0}}>Meeting</p>
          </div>
          <h3 style={{padding: 8, margin: 0, borderRadius: 4, background: "rgb(40, 150, 241)", color: "white"}}>December</h3>
          <div style={{display: "flex", alignItems: 'center', padding: 8, borderBottom: "1px solid rgb(40, 150, 241)"}}>
            <p style={{color: "rgb(40, 150, 241)", fontWeight: "bold", margin: 0, textAlign: "center", width: 50}}>4</p>
            <p style={{margin: 0}}>Meeting</p>
          </div>
        </div>
        <h1>Leadership</h1>
        <div style={{display: "flex", justifyContent: "center", padding: 8}}>
          <div style={{"border": "1px solid rgb(40, 150, 241)", maxWidth: 256, "flex": 1, "margin": 8, padding: 8}}>
            <div style={{"background": "#EEE", width: "100%", paddingTop: "100%"}}></div>
            <h2>President</h2>
            <p>Thomas Barrett</p>
            <p>Page '22</p>
          </div>
          <div style={{"border": "1px solid rgb(40, 150, 241)",  maxWidth: 256, "flex": 1, "margin": 8, padding: 8}}>
            <div style={{"background": "#EEE", width: "100%", paddingTop: "100%"}}></div>
            <h2>Treasurer</h2>
            <p>Riley O'Neil</p>
            <p>Page '22</p>
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;
