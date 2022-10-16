import React from "react";
import { Button, MenuItem, TextField, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import poster from "../../assets/poster.svg"
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
  const [error, setError] = useState(false);

  const history = useHistory();

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = () => {
    if (!name||!value) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions();
      history.push("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Please Enter your Details</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Enter All details</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Assessment
          </Button>
        </div>
      </div>
      <img src={poster} className="banner" alt="quiz app" />
    </div>
  );
};

export default Home;
