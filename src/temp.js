import './App.css'
import { faqData } from './data.js'
import { useState } from 'react'

function App() {
  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id)
  }

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleItem(id)
    }
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Frequently Asked Questions</h1>
        <p className="subtitle">Click on a question to see the answer</p>
        
        <div className="accordion">
          {faqData.map(item => {
            const isOpen = openItem === item.id
            return (
              <div key={item.id} className="item">
                <button 
                  className="trigger"
                  onClick={() => toggleItem(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                >
                  <span>{item.question}</span>
                  <span className={`chev ${isOpen ? 'open' : ''}`}>
                    {/* You can replace this with an actual icon */}
                    ▼
                  </span>
                </button>
                <div 
                  id={`panel-${item.id}`}
                  className="panel"
                  hidden={!isOpen}
                  role="region"
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App