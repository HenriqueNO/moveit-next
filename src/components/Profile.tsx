import styles from "../styles/components/Profile.module.css";

export function Profile(){
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/HenriqueNO.png" alt="Foto de perfil" />
      <div>
        <strong>Henrique Nunes</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 01
        </p>
      </div>
    </div>
  );
};