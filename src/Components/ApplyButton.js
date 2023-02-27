import React from 'react'

export default function ApplyButton({jobLink}) {

    function goToJobPortal(e) {
        e.preventDefault();
        window.open(jobLink,'_blank');
    }
  return (
    <div>
        <button 
        className="h40 w230 br4 border0 bggreen cwhite s18 b" 
        onClick={goToJobPortal}>APPLY</button>
    </div>
  )
}
