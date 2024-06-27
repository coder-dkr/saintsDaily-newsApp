import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const Navigate = useNavigate()
  const handleBackHome = () => {
    Navigate('/home')
  }


  return (
    <>
    <div className='my-3 container d-flex w-100 justify-content-center'>   
    <button onClick={handleBackHome} type="button" class="btn btn-primary">Back to Home</button>
    </div>

    <div className='container my-4'>
    <div class="accordion bg-dark" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      Creator
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
      <strong><code>Roy / GitHub: coder-dkr</code></strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      About Saint's Daily
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
      <strong> <code>Saint's Daily is a cutting-edge news app that keeps you updated with the latest from around the world. Using the powerful News API, it offers news across categories such as World, Technology, Sports, Entertainment, Health, Science, and Business. Customize your news feed, get real-time updates, and enjoy a user-friendly interface. Save articles for offline reading and access rich multimedia content. With comprehensive coverage and personalized features, Saint's Daily ensures you stay informed and engaged. Download Saint's Daily today for a seamless news experience 
      </code></strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Tech stack
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
      <strong><code>Build using React build and BootStrap components</code></strong>
      </div>
    </div>
  </div>
</div>

    </div>

  </>  
  )
}


