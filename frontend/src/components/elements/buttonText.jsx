import CommonButton from "./CommonButton";
const ButtonText = ({ text, paragraph, color, img }) => {
  return (
    <div className="Button-with-paragraph">
      {img && <img src={img} alt="" width="80%" />}
      <CommonButton text={text} color={color}></CommonButton>
      <p>{paragraph}</p>
    </div>
  );
};

export default ButtonText;
