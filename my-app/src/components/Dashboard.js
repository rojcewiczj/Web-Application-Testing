import React from 'react';

const Dashboard = (props) => {
return (
    <div className="dashboard-container">
         
             <button className="ball-button" data-testid="ball-button"
            onClick={props.addBall}>
                Ball!
            </button>
            <button className="strike-button" data-testid="strike-button"
            onClick={props.addStrike}>
                Strike!
            </button>
            <button className="foul-button" data-testid="foul-button"
            onClick={props.addFoul}>
               Foul!
            </button>
            <button className="hit-button" data-testid="hit-button"
            onClick={props.Hit}>
               Hit!
            </button>
            <button className="hit-button" data-testid="hit-button"
            onClick={props.addInning}>
               Next Inning!
            </button>

        
    </div>
)

}

export default Dashboard