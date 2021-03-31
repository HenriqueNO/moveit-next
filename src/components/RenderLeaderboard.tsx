import { useState } from 'react'
import styles from '../styles/components/RenderLeaderboard.module.css'

export function RenderLeaderborad(props) {
  const [cont, setCont] = useState(6)


  function upData() {
    if ( cont > 6 ) {
      setCont(cont - 6)
    }
  }

  function downData() {
    if (cont < props.props.length) {
      setCont(cont + 6)
    }
  }

  return (
    <div>
      <div>
      {props.props.map((e, i, data: number) => {
        i += cont - 6

        while( i < cont && i < props.props.length) {
          return (
            
            <div key={i} className={styles.tableDataContainer}>
              <div className={styles.tableDataUser}>
                <div>
                <p>{i + 1}</p>
                </div>
                <div className={styles.user}>
                  <div>
                    <img src={data[i].image} alt="foto perfil" width="64"/>
                    <div>
                      <strong>{data[i].name}</strong>
                      <p>
                        <img src="/icons/level.svg" alt="level"/> Level {data[i].level}
                      </p>
                    </div>
                  </div>
                  <p>{data[i].challengesCompleted}</p>
                  <p>{data[i].totalExperience}</p>
                </div>
              </div>
            </div>
          )}
      })}</div>

      { props.props.length > 6 &&
      <div className={styles.buttonNavData}>
        <span onClick={upData}>&#8657;</span>
        <span onClick={downData}>&#8659;</span>
      </div>
      }
      
    </div>
  )
}