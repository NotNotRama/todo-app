import React from "react";
import { useDispatch } from "react-redux";
import { switchAll } from "./filterSlice";
import { switchCompleted } from "./filterSlice";
import { fetchThunk } from "./todosSlice";
import { useSelector } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import CheckboxDiv from "../styled-components/CheckboxDiv";
import FooterDiv from "../styled-components/FooterDiv";
import { RootState } from "../../api/TodoProps";

const Todo = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.footer);

  return (
    <FooterDiv>
      {/* <button
        onClick={() =>
          dispatch(
            fetchThunk({
              dummy: "DUMMY DATA",
              secondDummy: "SECOND DUMMY DATA",
            })
          )
        }
      >
        TEST ME
      </button> */}
      <CheckboxDiv>
        <h1>Hide all</h1>
        <Checkbox
          // label="Check this box"
          onChange={() => dispatch(switchAll())}
          checked={!status.hideAll}
          style={{
            color: "#262626",
          }}
          classes={{ root: "custom-checkbox-root" }}
        />
      </CheckboxDiv>

      <CheckboxDiv>
        <h1>Show completed</h1>
        <Checkbox
          onChange={() => dispatch(switchCompleted())}
          checked={status.showCompleted ? true : false}
          style={{
            color: "#262626",
          }}
          classes={{ root: "custom-checkbox-root" }}
        />
      </CheckboxDiv>
    </FooterDiv>
  );
};

export default Todo;
