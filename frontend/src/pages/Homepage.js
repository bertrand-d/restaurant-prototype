import SearchBlock from "../components/SearchBlock"
import CardDetailedTop from "../components/CardDetailedTop"
import CardDetailedLeft from "../components/CardDetailedLeft"
import CardUnDetailedTop from "../components/CardUndetailedTop"
import React, { useState, useEffect } from 'react'
import { HOST } from "../utils/constants"

export default function Homepage() {

  const [hostels, setHostels] = useState([])
  const [activities, setActivities] = useState([])

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

    fetch(HOST + "/api/activities?populate=*")
      .then(res => res.json())
      .then(
        (result) => {
          setActivities(result.data)
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
  const [buttonValue, setButtonValue] = useState('Afficher plus')
  const [isArrayOver, setIsArrayOver] = useState(false)

  function handleMoreCards() {
    if ((next + cardLimit) > hostels.length) {
      setButtonValue('Afficher moins')
      setIsArrayOver(true)
    }
    if (isArrayOver) {
      setNext(next - cardLimit)

      if (next === 12) {
        setIsArrayOver(false)
        setButtonValue('Afficher plus')
      }
    }
    else {
      setNext(next + cardLimit)
    }
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
            <button onClick={handleMoreCards} className="see-more"> {buttonValue} </button>
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
      <section className="activities-result">
        <h2>Activités à Marseille</h2>
        <div className="activities-container">
          {
            React.Children.toArray(activities.slice(0, 4).map((activity) => <CardUnDetailedTop activity={activity} />))
          }
        </div>
      </section>
    </main>
  )
}