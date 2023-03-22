import SearchBlock from "../components/SearchBlock"
import CardDetailedTop from "../components/CardDetailedTop"
import React, { useState, useEffect } from 'react'
import { HOST } from "../utils/constants"

export default function Homepage() {


  const [hostels, setHostels] = useState([])

  useEffect(() => {
    console.log("host", HOST)
    fetch(HOST + "/api/hotels?populate=*")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('res', result)
           setHostels(result.data)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {

        }
      )
  }, 
    // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  [])

  console.log(hostels)

    return (
        <main className="homepage">
            <SearchBlock/>
            <section className="accomodation-result">
              <div className="accomodation">
                <h2>Hébergements à Marseille</h2>
                <div className="accomodation__container"></div>
                {
                  React.Children.toArray(hostels.map((hostel) => <CardDetailedTop hostel= {hostel}/> ))
                }

              </div>
              <div className="popular-accomodation">
                <h2>Les plus populaires</h2>

              </div>
            </section>
        </main>
    );
}