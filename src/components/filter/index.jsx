import * as React from "react";
import "./style.css";
import { useReadCypher } from "use-neo4j";
import Btn from "./btn";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export default function Filter(props) {
  const [Objects, setObjects] = React.useState([]);
  const [Relationships, setRelationships] = React.useState([]);

  const { result } = useReadCypher(
    `CALL db.labels() YIELD label return label, Null as relationshipType UNION CALL db.relationshipTypes() YIELD relationshipType RETURN relationshipType, Null as label`
  );

  // Objects section
  const [checkedObjects, setCheckedObjects] = React.useState([0]);
  const [checkedSelectAllObjects, setCheckedSelectAllObjects] = React.useState(
    false
  );

  const handleToggleObjects = value => () => {
    const currentIndex = checkedObjects.indexOf(value);
    const newChecked = [...checkedObjects];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedObjects(newChecked);
  };
  // Relationships section
  const [checkedRelationships, setCheckedRelationships] = React.useState([0]);
  const [
    checkedSelectAllRelationships,
    setCheckedSelectAllRelationships,
  ] = React.useState(false);

  const handleToggleRelationships = value => () => {
    const currentIndex = checkedRelationships.indexOf(value);
    const newChecked = [...checkedRelationships];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedRelationships(newChecked);
  };
  // select all section on Objects
  const selectAllObjects = () => {
    setCheckedSelectAllObjects(!checkedSelectAllObjects);
    if (checkedSelectAllObjects == false) {
      const newChecked = [];
      Objects.map(value => {
        newChecked.push(value);
      });
      setCheckedObjects(newChecked);
    } else {
      const newChecked = [];
      setCheckedObjects(newChecked);
    }
  };
  // select all section on Relationships
  const selectAllRelationships = () => {
    setCheckedSelectAllRelationships(!checkedSelectAllRelationships);
    if (checkedSelectAllRelationships == false) {
      const newChecked = [];
      Relationships.map(value => {
        newChecked.push(value);
      });
      setCheckedRelationships(newChecked);
    } else {
      const newChecked = [];
      setCheckedRelationships(newChecked);
    }
  };

  return (
    <div className="container">
      <Btn handleOnClick={props.handleOnClick} />
      <List>
        <h4>Objects</h4>
        {/* Select all Objects */}
        <ListItem key={"SelectAllObjects"} disablePadding>
          <ListItemButton role={undefined} onClick={selectAllObjects} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checkedSelectAllObjects}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": "SelectAllObjects" }}
              />
            </ListItemIcon>
            <ListItemText id={"SelectAllObjects"} primary={`Select All`} />
          </ListItemButton>
        </ListItem>
        {/* Rest of objects */}
        {result &&
          result.records.map(row => {
            let temp = row.get("relationshipType");
            if (temp != null) {
              const labelId = `checkbox-list-label-${temp}`;

              return (
                <ListItem key={temp} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggleObjects(temp)}
                    dense
                  >
                    <ListItemIcon sx={{ paddingLeft: 2 }}>
                      <Checkbox
                        edge="start"
                        checked={checkedObjects.indexOf(temp) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${temp}`} />
                  </ListItemButton>
                </ListItem>
              );
            }
          })}
        <h4>Relationships</h4>
        {/* Select all Relationships */}
        <ListItem key={"SelectAllRelationships"} disablePadding>
          <ListItemButton
            role={undefined}
            onClick={selectAllRelationships}
            dense
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checkedSelectAllRelationships}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": "SelectAllRelationships" }}
              />
            </ListItemIcon>
            <ListItemText
              id={"SelectAllRelationships"}
              primary={`Select All`}
            />
          </ListItemButton>
        </ListItem>
        {/* Rest of Relationships */}
        {result &&
          result.records.map(row => {
            let temp = row.get("label");
            if (temp != null) {
              const labelId = `checkbox-list-label-${temp}`;

              return (
                <ListItem key={temp} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggleRelationships(temp)}
                    dense
                  >
                    <ListItemIcon sx={{ paddingLeft: 2 }}>
                      <Checkbox
                        edge="start"
                        checked={checkedRelationships.indexOf(temp) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${temp}`} />
                  </ListItemButton>
                </ListItem>
              );
            }
          })}
      </List>
    </div>
  );
}
