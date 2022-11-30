import React from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/Actions/Actions";

const ModalComponent = ({ info, close }) => {
  const dispatch = useDispatch();

  //console.log(info);

  const handleChange = (e) => {
    //console.log(e, "E");
    const { name, value } = e.target;

    setSelectedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [selectedProduct, setSelectedProduct] = React.useState({
    name: info.name,
    lastname: info.lastname,
  });

  const handleSubmit = (e) => {
    let data = {
      name: selectedProduct.name,
      lastname: selectedProduct.lastname,
    };
    dispatch(updateUser(info.id, data));
    close(false);
    e.preventDefault();
  };

  return (
    <article id="wrapper">
      <article id="wrapper-container">
        <article id="wrapper-x-delete" onClick={() => close(false)}>
          X
        </article>
        <form id="form-user">
          <fieldset>
            <label>Name</label>
            <input
              name="name"
              onChange={(e) => handleChange(e)}
              value={selectedProduct.name}
            ></input>
          </fieldset>
          <fieldset>
            <label>Last name</label>
            <input
              name="lastname"
              onChange={(e) => handleChange(e)}
              value={selectedProduct.lastname}
            ></input>
          </fieldset>
          <fieldset id="flex-buttons-modal">
            <button className="button-dashboard" onClick={handleSubmit}>
              Edit
            </button>
            <button className="button-dashboard" onClick={() => close(false)}>
              Cancel
            </button>
          </fieldset>
        </form>
      </article>
    </article>
  );
};

export default ModalComponent;
