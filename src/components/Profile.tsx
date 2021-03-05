import { useSession } from "next-auth/client";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile(){
  const [ session ] = useSession()
  const { myLevel } = useContext(ChallengesContext)

  console.log(JSON.stringify(session))

  return (
    <div className={styles.profileContainer}>
      <img src={session.user.image} alt="Foto de perfil" />
      <div>
        <strong>{session.user.name}</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {myLevel}
        </p>
      </div>
    </div>
  );
};