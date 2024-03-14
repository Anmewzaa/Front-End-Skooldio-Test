/* eslint-disable react/prop-types */
import heart from "../images/heart.png";
import flag from "../images/flag.png";

const Department = ({ props }) => {
  return (
    <div>
      <div className="card-header">
        <img src={props.logo} alt="" />
        <div className="card-info">
          <h2>{props.faculty.name}</h2>
          <h3>{props.name}</h3>
          <h4>{props.faculty.university.name}</h4>
        </div>
        <img src={heart} alt="" className="heart" />
      </div>
      <hr />
      <div className="card-open">
        <h3>รอบที่เปิด</h3>
        <div className="card-flex">
          <h4 className="green">1</h4>
          <h4 className="green">2</h4>
          <h4>3</h4>
          <h4 className="green">4</h4>
          <h4>5</h4>
        </div>
      </div>
      <div className="card-state">
        {props.score ? (
          <>
            <h3>รอบที่ 4 : {props.score.scoreType}</h3>
          </>
        ) : (
          <>
            <h3>รอบที่ 4 : -</h3>
          </>
        )}
        <h4>แก้ไขคะแนน</h4>
      </div>
      <div className="card-your-score">
        <div>
          <img src={flag} alt="" />
        </div>
        <div>
          <h3>คะแนนของคุณคือ</h3>
          <h2>23453</h2>
        </div>
      </div>
      <div className="card-score">
        {props.score ? (
          <div className="score-card">
            <h3>{props.score.min}</h3>
            <h4>คะแนนเฉลี่ย 60</h4>
          </div>
        ) : (
          <div className="score-card">
            <h3>-</h3>
            <h4>คะแนนเฉลี่ย -</h4>
          </div>
        )}
        {props.score ? (
          <div className="score-card">
            <h3>{parseInt((props.score.min + props.score.max) / 2)}</h3>
            <h4>คะแนนเฉลี่ย 60</h4>
          </div>
        ) : (
          <div className="score-card">
            <h3>-</h3>
            <h4>คะแนนเฉลี่ย -</h4>
          </div>
        )}
        {props.score ? (
          <div className="score-card">
            <h3>{props.score.max}</h3>
            <h4>คะแนนเฉลี่ย 60</h4>
          </div>
        ) : (
          <div className="score-card">
            <h3>-</h3>
            <h4>คะแนนเฉลี่ย -</h4>
          </div>
        )}
      </div>
      <hr />
      <div className="card-ratio">
        <h4>ดูสัดส่วนคะแนน</h4>
      </div>
      <hr />
      <div className="card-interest">
        <h4>10 คนที่สนใจ</h4>
      </div>
    </div>
  );
};

export default Department;
