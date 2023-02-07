import React from "react"
import { BsCoin } from "react-icons/bs"
import { GiChiliPepper } from "react-icons/gi"
import { FaSeedling } from "react-icons/fa"

const BCard = ({id,image,ingredients,name,price,spicy,vegetarian,changeclick}) => {
  return (
    <>
      {/* เป็นการคลิ๊กที่ทุกส่งของ component แล้วเป็นการส่ง -1 ไปซึ่งจะไม่ตรงกับ id 
        ค่าไหนเลย แล้ว BigCard จะกลับไปเป็น false ดังนั้น card อันใหญ่่ก็ไม่แสดงผล
      */}
      <div className="container" onClick={() => changeclick(-1)}></div>
      <div className="bcard" onClick={() => changeclick(-1)}>
        <div className="bcard-header" onClick={() => {}}>
          <img src={image} alt="food" className="card-img" />
        </div>
        <div className="bcard-body">
          <div className="bcard-name">{name} {spicy ? <GiChiliPepper /> : null}</div>

          <div className="price">
            {price}&nbsp;<BsCoin />
          </div>
          <div className="card-icon">
            {vegetarian ? <FaSeedling /> : null }
          </div>

          {ingredients.length === 0 ? null: <div className="ingredients-title">ingredients:</div>}
          <ul className="ingredients-ul">
            {ingredients.filter((e,i) => i < 2).map((e,i) => <li key={i}>{e}</li>)}
          </ul>
        </div>
      </div>
    </>
  )
}
export default BCard
