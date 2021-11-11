import { DropDownDiv } from "./dropDown.styles";

export function DropDown({ data }) {
  console.log(data);
  return (
    <DropDownDiv className="productDropDown">
      {data[0] == "About us" || data[0] == "Profile"
        ? data.map((el) => {
            return (
              <div>
                <h5 style={{ margin: "0px" }}>{el}</h5>
              </div>
            );
          })
        : data.map((el) => (
            <div>
              <img src={el.img} alt="" />
              <div>
                <h5>{el.title}</h5>
                <p>{el.subtitle}</p>
              </div>
            </div>
          ))}
    </DropDownDiv>
  );
}
