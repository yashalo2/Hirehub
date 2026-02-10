import style from "./ProfileInitializer.module.css";
function ProfileInitializer() {
  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <div>
          <h2>Please Select Your Choice</h2>
          <label>
            <input type="radio" name="role" va />
            Job Seeker
          </label>
          <label>
            <input type="radio" name="role" />
            Employer(company)
          </label>
        </div>
      </div>
      <h1>Hello!</h1>
    </div>
  );
}
export default ProfileInitializer;
