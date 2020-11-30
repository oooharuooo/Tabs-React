import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading,setIsLoading] = useState(true)
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);
  const [isActive,setIsActive] = useState(false)

  const fetchData = async () => { 
    const { data } = await axios.get(url);
    setPeople(data);
    setIsLoading(false);
  }

  useEffect(() => { 
    fetchData();
  },[])

  if (isLoading) { 
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const { title, dates, duties, company } = people[index];

  return (
		<section className="section">
			<div className="title">
				<h2>Experience</h2>
				<div className="underline"></div>

				<div className="jobs-center">
          <div className="btn-container">
						{people.map((people,i) => (
              <button key={i} className={`job-btn ${i === index && "active"}`} onClick={() => setIndex(i) }>
								{people.company}
							</button>
						))}
          </div>
          
					<article className="job-info">
						<h3>{title}</h3>
						<h4>{company}</h4>
						<p className="job-date">{dates}</p>
						{duties.map((duties, i) => (
              <div className="job-desc" key={i}>
                <FaAngleDoubleRight />
								<p>{duties}</p>
							</div>
						))}
          </article>
          
				</div>

				<button type="button" className="btn">
					More Info
				</button>
			</div>
		</section>
	);
}

export default App;
