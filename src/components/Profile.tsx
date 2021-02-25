import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile(){
  const { myLevel } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/HenriqueNO.png" alt="Foto de perfil" />
      <div>
        <strong>Henrique Nunes</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {myLevel}
        </p>
      </div>
    </div>
  );
};