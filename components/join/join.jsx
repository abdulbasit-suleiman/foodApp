import "./join.css";
export function JoinPage() {
  return (
    <div className="join-container" id="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ARE YOU READY</span>
          <span> TO LEVEL UP</span>
        </div>
        <div>
          <span> YOUR SKILLS</span>
          <span className="stroke-text"> WITH US ?</span>
        </div>
      </div>
      <div className="right-j">
        <form className="email-container">
          <input
            type="email"
            name="user-email"
            placeholder="Enter your email"
          />
          <button className="join-btn">Join now</button>
        </form>
      </div>
    </div>
  );
}
