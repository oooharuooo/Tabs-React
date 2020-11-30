import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading,setIsLoading] = useState(true)
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);

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

  const { id, order, title, dates, duties,company } = people[0];

  return (
		<section className="section">
			<div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>

        <div className="jobs-center">
          <div className="btn-container">
            {people.map(({ id, company }) => <button key={id} className="job-btn">{ company}</button>)}
          </div>
          {/* <article className="job-info"></article>
          
        </div>

        <button type="button" className="btn">More Info</button>
			</div>
		</section>
	);
}

export default App;
