import SearchBlock from "../components/SearchBlock"
import CardDetailedTop from "../components/CardDetailedTop"
import CardDetailedLeft from "../components/CardDetailedLeft"
import React, { useState, useEffect } from 'react'
import { HOST } from "../utils/constants"

export default function Homepage() {

  const [hostels, setHostels] = useState([])

  useEffect(() => {
    fetch(HOST + "/api/hotels?populate=*")
      .then(res => res.json())
      .then(
        (result) => {
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

  const cardLimit = 6
  const [next, setNext] = useState(cardLimit)

  function handleMoreCards() {
    setNext(next + cardLimit)
  }

  return (
    <main className="homepage">
      <SearchBlock />
      <section className="accomodation-result">
        <div className="accomodation">
          <h2>Hébergements à Marseille</h2>
          <div className="accomodation__container">
            {
              React.Children.toArray(hostels.slice(0, next).map((hostel) => <CardDetailedTop hostel={hostel} />))
            }
            <button onClick={handleMoreCards}> Afficher plus </button>
          </div>
        </div>
        <div className="popular-accomodation">
          <h2>Les plus populaires</h2>
          <div className="popular-accomodation__container">
            {
              React.Children.toArray(hostels.slice(0, 3).map((hostel) => <CardDetailedLeft hostel={hostel} />))
            }
          </div>
        </div>
      </section>
    </main>
  )
}